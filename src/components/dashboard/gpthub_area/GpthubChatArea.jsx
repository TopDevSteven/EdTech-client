import React from "react";
import GptHubBotMessage from "../../common/gpthub_commons/GptHubBotMessage";
import UserMessage from "../../common/UserMessage";
import "./GpthubChatArea.css"
import { useContext } from "react";
import { MessageContext } from "../../../App";
import GptSlideBox from "../../common/gpthub_commons/GptSlideBox";

const gpthubEndpoints = [
    'coding',
    'presentation',
    'blog',
    'image',
]

const GpthubChatArea =  ({id}) => {
    const {messageHistory} = useContext(MessageContext);

    console.log(messageHistory)

    return (
        <div className="gpthub-selectcard-container">
            {/* <GptSlideBox order={1} title='type of turtle' content='there are a lot of turtles'/> */}
                {
                    messageHistory[gpthubEndpoints[id]]?.map((item, idx) =>
                    item.user == 'USER' ? <UserMessage key={idx} question={item.content} />
                                        : <GptHubBotMessage respond={item.content} endpoint={gpthubEndpoints[id]} type={item.type}/>
                    )
                }
            {/* {
                messageHistory[gpthubEndpoints[id]]?.map((item, idx) =>
                    item.user == 'USER' ? <UserMessage key={idx} question={item.content} />
                                        : <GptHubBotMessage key={idx} endpoint={gpthubEndpoints[id]} respond={item.content} type={item.type}/>
                )
            } */}
        </div>
    );
};

export default GpthubChatArea;