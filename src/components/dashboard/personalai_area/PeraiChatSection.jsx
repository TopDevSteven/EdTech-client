import React, { useContext, useState } from "react";
import "./PeraiChatSection.css"
import PerBotMessage from "../../common/perai_commons/PerBotMessage";
import UserMessage from "../../common/UserMessage";
import { MessageContext } from "../../../App";

const PeraiChatSection = ({topic , message}) => {
    const {isLoading} = useContext(MessageContext)

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
                {
                    isLoading? <PerBotMessage respond="Loading..."/> : <></>
                }
            </div>
        </div>
    );
};

export default PeraiChatSection;