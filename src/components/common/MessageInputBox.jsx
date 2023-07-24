import React, { useEffect } from "react";
import { ReactComponent as MessageInputIcon } from "../../assets/icons/microphone.svg";
import { ReactComponent as MessageSendIcon } from "../../assets/icons/paper-plane.svg";

const MessageInputBox = ({query, onChat, onChange}) => {
    
    return (
        <div className="messageinput-container" >
                <MessageInputIcon className="messageinput-icon" />
            <input
                value={query}
                onChange={(e) => onChange(e.target.value)}
                className="message-input"
                placeholder="You can ask me anything! I am here to help"
            />
            <span className="messagesend-icon" onClick={onChat}>
                <MessageSendIcon />
            </span>
        </div>
    )
}

export default MessageInputBox;