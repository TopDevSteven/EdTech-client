import React, { useContext, useState } from "react";
import BotMessage from "../../common/BotMessage";
import UserMessage from "../../common/UserMessage";
import { LessonContext } from "./LessonArea";
import { MessageContext } from "../../../App";
import "./ChatUI.css"


const ChatUI = () => {
    const {messageHistory, setMessageHistory} = useContext(LessonContext);
    const {isLoading} = useContext(MessageContext)
    
    return (
        <div className="messagehistory-container">
            <BotMessage respond="Hello! I am an Ed Tech Professional that is here to help with  your specific needsYou have chosen to search for lessons on:"/>
            {/* <UserMessage /> */}
            {
                messageHistory.map((item, idx) => item.user == 'User'?<UserMessage key={idx} question={item.text}/> : <BotMessage key={idx} respond={item.text}/>)
            }
            {
                isLoading?<BotMessage respond="Loading..."/>: <></>
            }
        </div>
    );
};

export default ChatUI;