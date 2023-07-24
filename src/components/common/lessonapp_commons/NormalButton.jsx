import React from "react";
import { useState } from "react";
import "./NormalButton.css"

const NormalButton = ({label, isSelected, onClick}) => {

    return (
        <div className="normalbtn-container">
            <button className={`normalbtn ${isSelected ? 'active' : ''}`} onClick={onClick}>{label}</button>
        </div>
    )
}

export default NormalButton;