import React, { useContext, useEffect, useState } from "react";
import "./Topbar.css"
import {ReactComponent as ShareIcon} from "../../../assets/icons/share.svg"
import {ReactComponent as ArtificiumIcon} from "../../../assets/icons/artificium.svg"
import {ReactComponent as FolderIcon} from "../../../assets/icons/folder.svg"
import { LessonContext } from "./LessonArea";

const Topbar = ({activetab, onClick}) => {
    const { eduStyle } = useContext(LessonContext);

    useEffect(() => {
        // console.log(eduStyle)
    }, [eduStyle])

    return (
        <div className="topbar-container">
            <div className="topbar-header">
                <div className="topbar-name">
                    <p className="app-name">Lesson App</p>
                    <p className="app-explain">A lesson app that will blow your mind</p>
                </div>
                <div className="topbar-option">
                    <ShareIcon />
                    <p>share</p>
                </div>
            </div>
            <div className="topbar-navigation">
                <div className="topbar-tab1">
                    <a href="#" onClick={() => onClick("topbar-tab1")}><span><ArtificiumIcon className="tab1-icon"/></span>Type of Class</a>
                </div>
                <div className="topbar-tab2">
                    <a href="#" onClick={() => onClick("topbar-tab2")}><FolderIcon className="tab2-icon"/>
                        {eduStyle["Depth"]}/ {eduStyle["Learning Style"]}/ {eduStyle["Communication Style"]}/ {eduStyle["Tone Style"]}/ {eduStyle["Reasoning Framework"]}
                    </a>
                    {activetab === "topbar-tab2" && <div className="bottom-line2"></div>}
                </div>
            </div>
            <div className="bottom-line1"></div>
        </div>
    )
}

export default Topbar;