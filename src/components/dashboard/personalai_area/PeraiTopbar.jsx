import React, { useState } from "react";
import {ReactComponent as ShareIcon} from "../../../assets/icons/share.svg";
import LessonButton from "../../common/lessonapp_commons/LessonButton";
import "./PeraiTopbar.css"

const actions = [
    "view",
    "Create"
]

const PeraiTopbar = ({selectedBtn, handleSeletecBtn}) => {
    return (
        <div className="topbar-container">
            <div className="topbar-header">
                <div className="topbar-name">
                    <p className="app-name">Personal GPT</p>
                </div>
                <div className="topbar-option">
                    <ShareIcon />
                    <p>share</p>
                </div>
            </div>
            <div className="perai-topbar-btn-container">
                {
                    actions.map((item, idx) => 
                        <LessonButton 
                            key={idx}
                            label={item} 
                            isSelected={selectedBtn === idx}
                            onClick={() => handleSeletecBtn(idx)}
                        />
                    )
                }
            </div>
        </div>
    )
}

export default PeraiTopbar;