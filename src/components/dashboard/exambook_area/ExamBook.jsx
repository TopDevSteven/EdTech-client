import React from "react";
import { useState } from "react";
import ExamTopbar from "./ExamTopbar";
import ExamBookSelectSection from "./ExamBookSelectSection";
import ExamBookCalendar from "./ExamBookCalendar";

const ExamBook = () => {
    const [isSelected, setIsSelected]  = useState(null);
    return (
        <div className="workarea-container">
            <ExamTopbar />
            {
                isSelected == null?<ExamBookSelectSection isSelected={isSelected} setIsSelected={setIsSelected}/>
                                    : <ExamBookCalendar />
            }
        </div>
    )
};

export default ExamBook;