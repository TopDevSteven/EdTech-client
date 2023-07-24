import React, { useState } from "react";
import PeraiTopbar from "./PeraiTopbar";
import PeraiCategorySection from "./PeraiCategorySection";
import PeraiViewSection from "./PeraiViewSection";
import PeraiCreateSection from "./PeraiCreateSection";
import MessageInputBox from "../../common/MessageInputBox";
import { useAuth } from "../../../auth/auth";
import "./PeraiArea.css"

const PeraiArea = () => {
    const [selectedBtn, setSelectedBtn] = useState(null);
    const {token, csrfToken} = useAuth();
    const [query, setQuery] = useState("");
    const [topic, setTopic] = useState("");
    const [message, setMessage] = useState({});

    const handleTopic = (content) => {
        setTopic(content);
    }

    const handleSeletecBtn = (idx) => {
        setSelectedBtn(idx)
        console.log(idx)
    }

    const handleQuery = (content) => {
        setQuery(content)
    }

    const handleChatDoc = async () => {
        if (selectedBtn === 0 && topic != "") {
            const data = {query: query}
            setMessage(message => {
                return {...message, [topic]: message[topic] ? [...message[topic], {user: 'USER', content: query}]: [{user: 'USER', content: query}]}
            })
            const res = await fetch(`/api/personal_ai/chat/doc`, {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                  Authorization: `Bearer ${token}`,
                  'X-CSRFToken': csrfToken
                },
                body: JSON.stringify(data)
              })
  
              if (res.ok) {
                  const response = await res.json()
                  setMessage(message => {
                    return {...message, [topic]: message[topic] ? [...message[topic], {user: 'BOT', content: response.message}]: [{user: 'BOT', content: response.message}]}
                    })
              }
        }
    }
    
    return (
        <div className="workarea-container">
            <div className="perai-container">
                <PeraiTopbar selectedBtn={selectedBtn} handleSeletecBtn={handleSeletecBtn} />
                {
                    selectedBtn === null && <PeraiCategorySection />
                }
                {
                    selectedBtn === 0 && <PeraiViewSection topic={topic} handleTopic={handleTopic} message={message}/>
                }
                {
                    selectedBtn === 1 && <PeraiCreateSection />
                }
                <MessageInputBox onChat={handleChatDoc} onChange={handleQuery}/>
            </div>
        </div>
    )
}

export default PeraiArea;