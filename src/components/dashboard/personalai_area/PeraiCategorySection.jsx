import React, { useState } from "react";
import "./PeraiCategorySection.css"
import GptHubCategoryBox from "../../common/gpthub_commons/GptHubCategoryBox";
import {ReactComponent as PDFIcon} from "../../../assets/icons/perai_category_icons/Group (1).svg";
import {ReactComponent as CSVIcon} from "../../../assets/icons/perai_category_icons/Vector (3).svg";
import {ReactComponent as DOCIcon} from "../../../assets/icons/perai_category_icons/Group (2).svg";
import {ReactComponent as URLIcon} from "../../../assets/icons/perai_category_icons/noun-url-1658755 1.svg";

const perai_category = [
    {
        icon: <PDFIcon />,
        category: "PDF",
        explain: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ."
    },
    {
        icon: <CSVIcon />,
        category: "CSV",
        explain: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ."
    },
    {
        icon: <DOCIcon />,
        category: "DOCX",
        explain: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ."
    },
    {
        icon: <URLIcon />,
        category: "WEB URL",
        explain: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ."
    }
]

const PeraiCategorySection = () => {
    const [cateogry, setCategory] = useState(null)

    const handlePeraiCategory = (idx) => {
        setCategory(idx);
    }

    return (
            <div className="peraicategory-container">
                <div className="peraicategory-header">
                    <h1>Personal GPT</h1>
                    <p>Welcome to Personal GPT. Here you can upload content and save it  for your 
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam arcu sapien, finibus et rutrum sit amet, maximus in metus. Morbi rhoncus sed turpis in maximus.</p>
                </div>
                <div className="peraicategory-wrapper">
                    {
                        perai_category.map((item, idx) => 
                            <GptHubCategoryBox
                                key = {item.category}
                                icon={item.icon}
                                category={item.category}
                                explain={item.explain}
                                // isSelected={cateogry == idx}
                                // onClick={() => handlePeraiCategory(idx)}
                            />
                        )
                    }
                </div>
            </div>
    );
};

export default PeraiCategorySection;