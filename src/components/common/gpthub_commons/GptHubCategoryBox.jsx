import React from "react";
import "./GptHubCategoryBox.css"

const GptHubCategoryBox = ({icon, category, explain, isSelected, onClick}) => {
    return (
        <div onClick={onClick} className={`gpthubcategory-box ${isSelected ? 'active' : ''}`} >
            <span>{icon}</span>
            <h1>{category}</h1>
            <p>{explain}</p>
        </div>
    )
}

export default GptHubCategoryBox;