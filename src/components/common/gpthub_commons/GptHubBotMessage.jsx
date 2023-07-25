import React, { useContext } from "react";
import BotIcon from "../../../assets/icons/Avatar.png";
import { CopyBlock, dracula } from "react-code-blocks";
import GptSlideBox from "./GptSlideBox";
import "./GptHubBotMessage.css"

const GptHubBotMessage = ({respond, type, endpoint}) => {
    console.log(respond)
    return (
        <div className="gpthubbotmessage-container">
            <img src={BotIcon}/>
            <div>
                <h1>Ed Tech</h1>
                {
                    endpoint === 'coding'
                    ?<CopyBlock
                        text={respond}
                        language={type}
                        showLineNumbers={true}
                        wrapLines={true}
                        startingLineNumber={1}
                        codeBlock={{ lineNumbers: false, wrapLines: true }}
                        theme={dracula}
                        // codeBlock
                        // onClick={handleClick}
                    />
                    : endpoint === 'presentation'
                    ? <GptSlideBox item={respond}/>
                    : <p>{respond}</p>
                    
                }
            </div>
        </div>
    );
}

export default GptHubBotMessage;