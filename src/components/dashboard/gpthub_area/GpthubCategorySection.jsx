import React from "react";
import "./GpthubCategorySection.css"
import GptHubCategoryBox from "../../common/gpthub_commons/GptHubCategoryBox";
import GptHubTopbar from "./GptHubTopbar";
import {ReactComponent as PresentationIcon} from "../../../assets/icons/gpthub_cards_icons/magic-wand.svg"
import {ReactComponent as BlogIcon} from "../../../assets/icons/gpthub_cards_icons/chat-bubble.svg"
import {ReactComponent as GptHubCodeIcon} from "../../../assets/icons/gpthub-code.svg"
import {ReactComponent as ImageIcon} from "../../../assets/icons/gpthub_cards_icons/image.svg"

const gpthubScienceCategories = [
    { 
        icon: <GptHubCodeIcon />,
        category: "Coding",
        explain: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porttitor ."
    },
    { 
        icon: <PresentationIcon />,
        category: "Presentation",
        explain: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porttitor ."
    },
    { 
        icon: <BlogIcon />,
        category: "Blog Content",
        explain: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porttitor ."
    },
    { 
        icon: <ImageIcon />,
        category: "Image",
        explain: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porttitor ."
    }
]

const GpthubCategorySection = ({gpthubcategory, handleGpthubcategory}) => {
    return (
        <div className="gpthubcategory-container">
            <GptHubTopbar />
                <div className="gpthub-category-container">
                    <div className="gpthub-category-header">
                        <h1>Ed Tech Platform</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porttitor .</p>
                    </div>
                </div>
                <div className="gpthubcategory-wrapper">
                    {
                        gpthubScienceCategories.map((item, idx) => 
                            <GptHubCategoryBox
                                key={idx}
                                icon={item.icon}
                                category={item.category}
                                explain={item.explain}
                                isSelected={gpthubcategory == idx}
                                onClick={() => handleGpthubcategory(idx)}
                            />
                        )
                    }
            </div>
        </div>
    )
}

export default GpthubCategorySection;