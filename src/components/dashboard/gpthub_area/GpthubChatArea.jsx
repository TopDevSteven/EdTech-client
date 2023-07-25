import React from "react";
import GptHubBotMessage from "../../common/gpthub_commons/GptHubBotMessage";
import UserMessage from "../../common/UserMessage";
import "./GpthubChatArea.css"
import { useContext } from "react";
import { MessageContext } from "../../../App";
import GptSlideBox from "../../common/gpthub_commons/GptSlideBox";
import BotMessage from "../../common/BotMessage";

const gpthubEndpoints = [
    'coding',
    'presentation',
    'blog',
    'image',
]

const GpthubChatArea =  ({id}) => {
    const {messageHistory, isLoading} = useContext(MessageContext);

    console.log(messageHistory)

    return (
        <div className="gpthub-selectcard-container">

                {
                    messageHistory[gpthubEndpoints[id]]?.map((item, idx) =>
                    item.user == 'USER' ? <UserMessage key={idx} question={item.content} />
                                        : <GptHubBotMessage respond={item.content} endpoint={gpthubEndpoints[id]} type={item.type}/>
                    )
                }
                {
                    isLoading? <GptHubBotMessage respond="Loading..." endpoint="blog" type="python"/>: <></>
                }
        </div>
    );
};

export default GpthubChatArea;