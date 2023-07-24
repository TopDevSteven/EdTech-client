import React from "react";
import "./GptChatsTopbarBtn.css"
import {ReactComponent as ArrowIcon} from "../../../assets/icons/arrow-right.svg"

const GptChatsTopbarBtn = ({label, icon, isSelected, onClick}) => {
    return (
        <div className="gpthub-topbar-btn">
            <button onClick={onClick} className={`gpthub-topbar-btn-wrapper ${isSelected ? 'active' : ''}`}>
                <span className="gpthub-topbar-icon">
                    {icon}
                </span>
                {label}
                <span className="allow-icon">
                    <ArrowIcon />
                </span>
            </button>
        </div>
    );
};

export default GptChatsTopbarBtn;