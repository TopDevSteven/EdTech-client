import React, { useState } from "react";
import {ReactComponent as ScienceIcon} from "../../../assets/icons/exambooking_icons/a (3).svg";
import {ReactComponent as ArtIcon} from "../../../assets/icons/exambooking_icons/a (4).svg";
import {ReactComponent as MusicIcon} from "../../../assets/icons/exambooking_icons/a (5).svg";
import {ReactComponent as CodeIcon} from "../../../assets/icons/exambooking_icons/code_FILL0_wght400_GRAD0_opsz48 (1).svg";
import {ReactComponent as HistoryIcon} from "../../../assets/icons/exambooking_icons/history_edu_FILL0_wght400_GRAD0_opsz48 1 (1).svg";
import {ReactComponent as TravelIcon} from "../../../assets/icons/exambooking_icons/rocket_launch_FILL0_wght400_GRAD0_opsz48-2 1 (2).svg";
import {ReactComponent as MathIcon} from "../../../assets/icons/exambooking_icons/🦆 icon _math_ (1).svg";
import ExamBookingCategoryBox from "../../common/exampbooking_commons/ExamBookingCategoryBox";
import "./ExamBookSelectSection.css";

const examCategory = [
    {
        topic: "Math",
        icon: <MathIcon />,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut .",
        subtopics: [
            {
                topic: "",
                icon: "",
                description: "",
            },
        ],
    },
    {
        topic: "Science",
        icon: <ScienceIcon />,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut .",
        subtopics: [
            {
                topic: "",
                icon: "",
                description: "",
            },
        ],
    },
    {
        topic: "Coding",
        icon: <CodeIcon />,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut .",
        subtopics: [
            {
                topic: "",
                icon: "",
                description: "",
            },
        ],
    },
    {
        topic: "History",
        icon: <HistoryIcon />,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut .",
        subtopics: [
            {
                topic: "",
                icon: "",
                description: "",
            },
        ],
    },
    {
        topic: "Art",
        icon: <ArtIcon />,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut .",
        subtopics: [
            {
                topic: "",
                icon: "",
                description: "",
            },
        ],
    },
    {
        topic: "Music",
        icon: <MusicIcon />,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut .",
        subtopics: [
            {
                topic: "",
                icon: "",
                description: "",
            },
        ],
    },
    {

        topic: "Space Travel",
        icon: <TravelIcon />,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut .",
        subtopics: [
            {
                topic: "",
                icon: "",
                description: "",
            },
        ],
    },
    {

        topic: "More Classes",
        icon: <></>,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut .",
        subtopics: [
            {
                topic: "",
                icon: "",
                description: "",
            },
        ],
    }
]

const ExamBookSelectSection = ({isSelected, setIsSelected}) => {
    
    const handleSelect = (index) => {
        setIsSelected(index);
    }
    

    return (
        <div className="exambooking-category-container">
            <div className="exambooking-category-header">
                <h1>Exam Booking App</h1>
                <p>Select one or more courses below to schedule your next exam</p>
            </div>
            <div className="exambooking-category-section">
                {
                    examCategory.map((item, idx) => (
                        <ExamBookingCategoryBox
                            icon={item.icon}
                            key={idx}
                            category={item.topic}
                            explain={item.description}
                            onClick={() => handleSelect(idx)}
                            isSelected={isSelected === idx}
                        />
                    ))
                }
            </div>
        </div>
    );
}

export default ExamBookSelectSection;