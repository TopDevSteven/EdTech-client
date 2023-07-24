import React from "react";
import { useState } from "react";
import {ReactComponent as ArrowIcon} from "../../../assets/icons/arrow-right.svg"
import "./LessonButton.css"

const LessonButton = ({label, isSelected, onClick}) => {

    return (
        <div className="lessonbtn-container">
            <button className={`lessonbtn ${isSelected ? 'active' : ''}`} onClick={onClick}>{label}<ArrowIcon className='lesson-icon'/></button>
        </div>
    )
}

export default LessonButton;