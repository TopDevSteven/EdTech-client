import React from "react";
import LessonBtnGroup from "../../common/lessonapp_commons/LessonBtnGroup";
import { ReactComponent as DepthIcon} from "../../../assets/icons/comment-circle.svg"
import { ReactComponent as LearningStyleIcon} from "../../../assets/icons/edit.svg"
import { ReactComponent as CommunicStyleIcon} from "../../../assets/icons/chart.svg"
import { ReactComponent as ToneStyleIcon} from "../../../assets/icons/check.svg"
import { ReactComponent as ReasonFIcon} from "../../../assets/icons/bulb.svg"
import "./LessonChat.css"

const depthLists = ["Elmentary", "Middle School", "High School", "UnderGrad", "Master's", "Postdoc", "Ph D"]
const learningstyleLists = ["Visual", "Verbal", "Active", "Intuitive", "Reflective", "Global"]
const communicationLists = ["Formal", "Textbook", "Layman", "Story telling", "Socratic"]
const tonestyleLists = ["Encouraging", "Neutral", "Informative", "Friendly", "Humorous"]
const reasingFrameworkLists = ["Deductive", "Inductive", "Abductive", "Analogical", "Causal"]

const LessonChat = () => {
    return (
        <div className="styleselect-container">
            <div className="styles-header">
                <h1>Ed Tech Platform</h1>
                <p>Kickstart your learning & teaching with our comprehensive selection of predefined prompts</p>
            </div>
            <div className="styleselect-wrapper">
                <div className="depth-btngroup">
                    <span className="group-icon">
                        <DepthIcon className="depth-icon" />
                        {/* <img src="/img/icons/comment-circle.png" style={{ marginTop: "19px" }}/> */}
                    </span>
                    <label className="depth-label">Depth</label>
                    <LessonBtnGroup labels={depthLists} topic={"Depth"}/>
                </div >
                <div className="depth-btngroup">
                    <span className="group-icon">
                        <LearningStyleIcon className="learningstyle-icon" />
                    </span>
                    <label className="depth-label">Learning Style</label>
                    <LessonBtnGroup labels={learningstyleLists} topic={"Learning Style"}/>
                </div>
                <div className="depth-btngroup">
                    <span className="group-icon">
                        <CommunicStyleIcon className="communicstyle-icon" />
                    </span>
                    <label className="depth-label">Communication Style</label>
                    <LessonBtnGroup labels={communicationLists} topic={"Communication Style"}/>
                </div>
                <div className="depth-btngroup">
                    <span className="group-icon">
                        <ToneStyleIcon className="tonestyle-icon" />
                    </span>
                    <label className="depth-label">Tone Style</label>
                    <LessonBtnGroup labels={tonestyleLists} topic={"Tone Style"}/>
                </div>
                <div className="depth-btngroup">
                    <span className="group-icon">
                        <ReasonFIcon className="reasonf-icon" />
                    </span>
                    <label className="depth-label">Reasoning Framework</label>
                    <LessonBtnGroup labels={reasingFrameworkLists} topic={"Reasoning Framework"}/>
                </div>
            </div>
        </div>
    )
}

export default LessonChat;