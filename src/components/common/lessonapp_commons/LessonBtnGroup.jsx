import React, { useContext, useState } from "react";
import LessonButton from "./LessonButton";
import { LessonContext } from "../../dashboard/lessonapp_area/LessonArea";

const LessonBtnGroup = ({topic, labels}) => {
    const { eduStyle, setEduStyle } = useContext(LessonContext)
    const [selectedButton, setSelectedButton] = useState(labels.findIndex((label) => label === eduStyle[topic]))

    const handleLessonClick = (index) => {
        setSelectedButton(index)

        setEduStyle({
            ...eduStyle,
            [topic]: labels[index]
        })
    }

    return (
        <div style={{ width: "90%" }}>
            {
                labels.map((label, index) => 
                    <LessonButton 
                        key={index} 
                        label={label}
                        isSelected={selectedButton == index}
                        onClick={() => handleLessonClick(index)}
                    />)
            }
        </div>
    )
}

export default LessonBtnGroup;