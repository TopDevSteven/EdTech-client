import React, { useCallback, useState } from "react";
import GpthubCategorySection from "./GpthubCategorySection";
import MessageInputBox from "../../common/MessageInputBox";
import "./GpthubArea.css"
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../auth/auth";
import { useContext } from "react";
import { MessageContext } from "../../../App";

const gpthubEndpoints = [
    'coding',
    'presentation',
    'blog',
    'image',
]

const GpthubArea = ({gpthubcategory, handleGpthubcategory}) => {

    const {token, csrfToken} = useAuth();
    const [query, setQuery] = useState("")
    const navigate = useNavigate()
    const handleChangeQuery = (message) => {
        setQuery(message)
    }
    const {setMessageHistory} = useContext(MessageContext);
    const data = {query}

    const handleSendQuery = async () => {
        setMessageHistory(messageHistory => ({
            ...messageHistory,
            [gpthubEndpoints[gpthubcategory]]:[
                ...messageHistory[gpthubEndpoints[gpthubcategory]],
                {
                    user: 'USER',
                    content: query
                }
            ]
        }))
        navigate(`/userdashboard/gpt_hub/chats`)
        const res = await fetch(`/api/gpt_hub/chat/${gpthubEndpoints[gpthubcategory]}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
                'X-CSRFToken': csrfToken
            },
            body: JSON.stringify(data)
        })

        if (res.ok) {
            const messages = await res.json()
            setMessageHistory(messageHistory => ({
                ...messageHistory,
            [gpthubEndpoints[gpthubcategory]]:[
                    ...messageHistory[gpthubEndpoints[gpthubcategory]],
                    {
                        user: 'BOT',
                        content: messages.message,
                        type: messages.type
                    }
                ]
            }))
        }
    }

    // const handleSendQuery = async () => {
    //     const xhr = new XMLHttpRequest();
    //     if(query.trim() != "" && gpthubcategory != null){
    //         navigate("/userdashboard/gpt_hub/chats")
    //         xhr.open('POST', `/api/gpt_hub/chat/${gpthubEndpoints[gpthubcategory]}`, true);
    //         xhr.setRequestHeader("Content-Type", "application/json")

    //         xhr.onprogress = () => {
    //             const rawResult = xhr.responseText;
    //             let temp = "";
    //             const jsonStrs = rawResult.split('}{').map((str, idx, arr) => {
    //                 if (idx !== 0) str = '{' + str;
    //                 if (idx !== arr.length - 1) str = str + '}';
    //                 return str;
    //             })

    //             jsonStrs.forEach(jsonStrs => {
    //                 try {
    //                     const data = JSON.parse(jsonStrs);
    //                     const content = data?.choices[0]?.delta?.content || "";
    //                     temp = temp + content;
    //                 } catch (e) {
    //                     console.error(e);
    //                 }
    //             })
    //             console.log(temp)
    //         }

    //         const body = JSON.stringify({message: query})
    //         xhr.send(body);
    //         setQuery("")
    //     }
    // }
    return (
        <div className="workarea-container">
            <div className="gpthub-container">
                {/* <GpthubCategorySection 
                    gpthubcategory={gpthubcategory}
                    handleGpthubcategory={handleGpthubcategory}
                /> */}
                <Outlet />
                <MessageInputBox query={query} onChat={handleSendQuery} onChange={handleChangeQuery}/>
            </div>
        </div>
    )
}

export default GpthubArea;