import React from "react";
import "./GptChatsCardBox.css"

const GptChatsCardBox = ({icon, label, description}) => {
    return (
        <div className="gpthub-selectedcard">
            <span>{icon}</span>
            {label}
            <p>
                {description}
            </p>
        </div>
    )
}

export default GptChatsCardBox;