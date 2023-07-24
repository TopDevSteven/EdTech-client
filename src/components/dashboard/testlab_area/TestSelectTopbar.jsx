import React from "react";
import {ReactComponent as ShareIcon} from "../../../assets/icons/share.svg";
import "./TestSelectTopbar.css"

const TestSelectTopbar = () => {
    return (
        <div className="topbar-container">
            <div className="topbar-header booking">
                <div className="topbar-name">
                    <p className="app-name">Welcome Back</p>
                </div>
                <div className="topbar-option">
                    <ShareIcon />
                    <p>share</p>
                </div>
            </div>
        </div>
    )
}

export default TestSelectTopbar;