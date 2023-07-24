import React, { useState } from "react";
import "./PeraiChatSection.css"
import PerBotMessage from "../../common/perai_commons/PerBotMessage";
import UserMessage from "../../common/UserMessage";

const PeraiChatSection = ({topic , message}) => {
    return (
        <div className="peraichat-container">
            <div>
                <h1>Topic: {topic}</h1>
            </div>
            <div>
                {
                    message[topic]?.map((item, idx) => (
                    item.user === 'USER' ? <UserMessage key={idx} question={item.content} />
                                        : <PerBotMessage key={idx} respond={item.content} />
                    ))
                }
            </div>
        </div>
    );
};

export default PeraiChatSection;