import React from "react";
import {ReactComponent as ShareIcon} from "../../../assets/icons/share.svg"
import {ReactComponent as ArtificiumIcon} from "../../../assets/icons/artificium.svg"
import "./GptHubTopbar.css"

const GptHubTopbar = () => {
    return (
        <div className="gpthub-topbar-container">
            <div className="gpthub-topbar-header">
                <p className="app-name">GPT-Hub</p>
            </div>
            <div className="gpthub-topbar-tab">
                <span><ArtificiumIcon className="gpthub-category-btn"/></span>
                <p className="gpthub-category">Categories</p>
            </div>
            <div className="topbar-option">
                <ShareIcon />
                <p>share</p>
            </div>
        </div>
    )
}

export default GptHubTopbar