import React from "react";
import {ReactComponent as ShareIcon} from "../../../assets/icons/share.svg";
import LessonButton from "../../common/lessonapp_commons/LessonButton";
import "./ExamTopbar.css"

const ExamTopbar = () => {
    return (
        <div className="topbar-container">
            <div className="topbar-header test">
                <div className="topbar-name">
                    <p className="app-name">Edu-Tech Platform</p>
                </div>
                <div className="topbar-option">
                    <ShareIcon />
                    <p>share</p>
                </div>
            </div>
        </div>
    )
}

export default ExamTopbar;