import React, { useContext } from "react";
import BotIcon from "../../../assets/icons/Avatar.png";

const PerBotMessage = ({respond}) => {
    return (
        <div className="gpthubbotmessage-container">
            <img src={BotIcon}/>
            <div>
                <h1>Ed Tech</h1>
                <pre>
                    {respond}
                </pre>
            </div>
        </div>
    );
}

export default PerBotMessage;