import React, { useContext } from "react";
import BotIcon from "../../assets/icons/Avatar.png";
import "./BotMessage.css"
import { LessonContext } from "../dashboard/lessonapp_area/LessonArea";

const BotMessage = ({respond}) => {
    const { eduStyle, setEduStyle } = useContext(LessonContext);
    const muliRespond = respond.split("\n")

    return (
        <div className="botmessage-container">
            <img src={BotIcon}/>
            <div>
                <h1>Ed Tech</h1>
                {muliRespond.map((item, idx) => <pre key={idx}>{item}</pre>)}
                <strong>{eduStyle["Depth"]}/ {eduStyle["Learning Style"]}/ {eduStyle["Communication Style"]}/ {eduStyle["Tone Style"]}/ {eduStyle["Reasoning Framework"]}</strong>
            </div>
        </div>
    );
}

export default BotMessage;