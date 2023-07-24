import React, { useState } from "react";
import {ReactComponent as ShareIcon} from "../../../assets/icons/share.svg";
import GptChatsTopbarBtn from "../../common/gpthub_commons/GptChatsTopbarBtn";
import {ReactComponent as CodeIcon} from "../../../assets/icons/gpthub-code.svg"
import {ReactComponent as PresentationIcon} from "../../../assets/icons/gpthub_cards_icons/magic-wand.svg"
import {ReactComponent as BlogIcon} from "../../../assets/icons/gpthub_cards_icons/chat-bubble.svg"
import {ReactComponent as ImageIcon} from "../../../assets/icons/gpthub_cards_icons/image.svg"
import "./GpthubChatsTopbar.css"

const categories = [
    {
        label: "Code",
        icon: <CodeIcon />
    },
    {
        label: "Presentation",
        icon: <PresentationIcon />
    },
    {
        label: "Blog Content",
        icon: <BlogIcon />
    },
    {
        label: "Image",
        icon: <ImageIcon />
    },
]

const GpthubChatsTopbar = ({idx, handleGpthubcategory}) => {
    const [gpthubTopbarBtn, setGpthubTopbarBtn] = useState(idx)
    const handleGpthubTopbarBtn = (index) => {
        setGpthubTopbarBtn(index)
        handleGpthubcategory(index)
    }

    return (
        <div className="topbar-container">
            <div className="topbar-header">
                <div className="topbar-name">
                    <p className="app-name">GPT-Hub</p>
                    <p className="app-explain">A lesson app that will blow your mind</p>
                </div>
                <div className="topbar-option">
                    <ShareIcon />
                    <p>share</p>
                </div>
            </div>
            <div className="gpthub-topbar-btn-container">
                {
                    categories.map((item, id) => 
                        <GptChatsTopbarBtn
                        key={id}
                        label={item.label} 
                        icon={item.icon}
                        isSelected={gpthubTopbarBtn == id}
                        onClick={() => handleGpthubTopbarBtn(id)}
                        />
                    )
                }
            </div>
        </div>
    )
}

export default GpthubChatsTopbar;