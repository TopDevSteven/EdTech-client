import React from "react";

const ExamBookingCategoryBox = ({icon, category, explain, isSelected, onClick}) => {
    return (
        <div onClick={onClick} className={`gpthubcategory-box ${isSelected ? 'active' : ''}`} >
            <span>{icon}</span>
            <h1>{category}</h1>
            <p>{explain}</p>
        </div>
    )
}

export default ExamBookingCategoryBox;