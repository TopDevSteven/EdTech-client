import React, { useContext } from "react";
import "./PeraiCreateSection.css"
import { useState } from "react";
import {ReactComponent as UploadIcon} from "../../../assets/icons/perai_category_icons/upload.svg";
import { useAuth } from "../../../auth/auth";
import NormalButton from "../../common/lessonapp_commons/NormalButton";
import { MessageContext } from "../../../App";

const PeraiCreateSection = () => {
    const [fileName, setFileName] = useState('Choose a file');
    const [success, setSuccess] = useState(null);
    const [file, setFile] = useState();
    const [topic, setTopic] = useState("")
    const {token, csrfToken} = useAuth();
    const {isLoading, setIsLoading} = useContext(MessageContext)
    const now = new Date();

    const handleFileChange = (event) => {
        const file = event.target.files[0];
            if (file) {
            setFileName(file.name);
            setFile(file)
            } else {
            setFileName('Choose a file');
            }
    };

    const handleUpload = async () => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('topic', topic);
        formData.append('time', now.toISOString().split('T')[0]);
        if (topic !== "" && file) {
            const fileType = fileName.substring(fileName.length - 3);
            if (fileType.toUpperCase() === "PDF" || fileType.toUpperCase() === "OCX" || fileType.toUpperCase() === "CSV"){
                if (fileType.toUpperCase() === "PDF") {
                    formData.append('type', 'PDF');
                } else if (fileType.toUpperCase() === "OCX") {
                    formData.append('type', 'DOC');
                } else if (fileType.toUpperCase() === "CSV") {
                    formData.append('type', 'CSV')
                }
                setIsLoading(true)
                const res = await fetch(`/api/personal_ai/chat/create`, {
                  method: 'POST',
                  headers: {
                    Authorization: `Bearer ${token}`,
                    'X-CSRFToken': csrfToken
                  },
                  body: formData
                })
    
                if (res.ok) {
                    setFile(null)
                    setFileName("Choose a file")
                    setTopic("")
                    setIsLoading(false);
                    const respond = await res.json()
                    setSuccess(respond.message)
                } else {
                    setIsLoading(false);
                }
            }
        }
      };
    
    return (
        <div className="peraicreate-container">
            <div className="input-topic-container">
                <div className="input-topic-header">
                    <h1>Topic Title</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt u.</p>
                </div>
                <div className="input-topic-box">
                    <input value={topic} onChange={(e) => setTopic(e.target.value)}/>
                </div>
            </div>
            <div className="custom-file-upload">
                <h1>Upload Content</h1>
                <p>Select which users can access and view this project. Only users with access can view and edit the project.</p>
                <input type="file" id="fileUpload" className="inputfile" onChange={handleFileChange}/>
                <label htmlFor="fileUpload">
                    <span className="icon"><UploadIcon /></span>
                    {fileName !== 'Choose a file' ?
                        <p className="filename">Selected file: {fileName}</p>
                        : <p className="filename">Upload Document</p>
                    }
                    <p className="browse">File formats: PDF, DOCX, CSV</p>
                    <p>{fileName}</p>
                </label>
            </div>
            <div className="perai_train_btn">
                <NormalButton label="Train" onClick={handleUpload}/>
                {
                    isLoading?<p className="train_status">Training...</p >: success ?<p className="train_status">Training Success</p>: success === false ?<p className="train_status">Training Failed</p>: <></>
                }
            </div>
        </div>
    )
}

export default PeraiCreateSection;;