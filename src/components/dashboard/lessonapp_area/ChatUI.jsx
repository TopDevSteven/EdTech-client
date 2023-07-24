import React, { useContext, useState } from "react";
import BotMessage from "../../common/BotMessage";
import UserMessage from "../../common/UserMessage";
import { LessonContext } from "./LessonArea";
import "./ChatUI.css"


const ChatUI = () => {
    const {messageHistory, setMessageHistory} = useContext(LessonContext);
    
    return (
        <div className="messagehistory-container">
            <BotMessage respond="Hello! I am an Ed Tech Professional that is here to help with  your specific needsYou have chosen to search for lessons on:"/>
            {/* <UserMessage /> */}
            {
                messageHistory.map((item, idx) => item.user == 'User'?<UserMessage key={idx} question={item.text}/> : <BotMessage key={idx} respond={item.text}/>)
            }
        </div>
    );
};

export default ChatUI;