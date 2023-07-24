import React from "react";
import GpthubChatsTopbar from "./GpthubChatsTopbar";
import GpthubChatArea from "./GpthubChatArea";
import "./GpthubChatSection.css"

const GpthubChatsSection = ({idx, handleGpthubcategory, messageHistory}) => {
    return (
        <div className="gpthubcategory-container">
            <GpthubChatsTopbar idx={idx} handleGpthubcategory={handleGpthubcategory}/>
            <div className="gpthub-chatarea-container">
                <GpthubChatArea id={idx}/>
            </div>
        </div>
    )
}

export default GpthubChatsSection