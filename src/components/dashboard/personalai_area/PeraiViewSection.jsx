import React, { useEffect, useState } from "react";
import ViewCardBox from "../../common/perai_commons/ViewCardBox";
import PeraiChatSection from "./PeraiChatSection";
import {ReactComponent as TypeDOCIcon} from "../../../assets/icons/perai_category_icons/Group (3).svg";
import {ReactComponent as TypePDFIcon} from "../../../assets/icons/perai_category_icons/Group (4).svg";
import "./PeraiViewSection.css";
import { useAuth } from "../../../auth/auth";

const cardIcons = {
    PDF: <TypePDFIcon />,
    DOC: <TypeDOCIcon />,
    WEB: <TypePDFIcon />
}

const PeraiViewSection = ({topic, handleTopic, message}) => {
    const [showchat, setShowchat] = useState(false)
    const [views, setViews] = useState([])
    const {token, csrfToken} = useAuth()
    const [refresView ,setRefreshView] = useState(false)

    useEffect(() => {
        const fetchViews = async () => {
            try {
                const response = await fetch('/api/auth/view/0', {
                    method: 'GET',
                    headers: {
                      'Content-Type': 'application/json',
                      Authorization: `Bearer ${token}`,
                      'X-CSRFToken': csrfToken
                    },
                });
    
                if (response.ok) {
                    const data = await response.json()
                    setViews(data)
                    console.log(data)
                }
            } catch (erro) {
                console.log(erro)
            }
        }
        fetchViews();
    }, [refresView])

    const handleShowChat = (index) => {
        setShowchat(true)
        handleTopic(views[index].topic)
    }

    const handleDeleteDoc = async (id) => {
        try {
            const response = await fetch(`/api/auth/view/${id}`, {
              method: 'DELETE',
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
                'X-CSRFToken': csrfToken
              }
            });
      
            if (response.status === 204) {
              // Document successfully deleted
              // Refresh the list of documents after deletion
              setRefreshView(!refresView)

            } else if (response.status === 403) {
              console.error('Permission denied. You cannot delete this document.');
            } else if (response.status === 404) {
              console.error('Document not found.');
            } else {
              console.error('Failed to delete document.');
            }
          } catch (error) {
            console.error('Error deleting document:', error);
          }
    }

    return (
        <div className="peraiview-container">
            {
                !showchat ?
                    <div className="peraiview-cards-container">
                        <div className="peraiview-cards-header">
                            <label className="topic">Content</label>
                            <label className="type">Type</label>
                            <label className="status">Status</label>
                            <label className="date">Date</label>
                        </div>
                        <div className="peraiview-cards">
                            {
                                views.map((item, idx) => 
                                    <ViewCardBox 
                                        key={idx}
                                        topic={item.topic}
                                        typeIcon={cardIcons[item.document_type]}
                                        typeLabel={item.document_type}
                                        status="Ready"
                                        date={item.date}
                                        showchat={() => handleShowChat(idx)}
                                        onDelete={() => handleDeleteDoc(item.id)}
                                    />
                                )
                            }
                        </div>
                    </div>
                :<PeraiChatSection topic={topic} message={message}/>
            }
        </div>

    )
}

export default PeraiViewSection;