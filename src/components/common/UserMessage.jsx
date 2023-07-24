import React from "react";
import "./UserMessage.css";

const UserMessage = ({question}) => {
    return (
        <div className="usermessage-container">
            <img src="/avatars/user1.png"/>
            <div>
                <h1>Tyler</h1>
                <p>{question}</p>
            </div>
        </div>
    )
}

export default UserMessage;