import React from "react";
import User from "./sidebar/User";
import "./Sidebar.css"
import OverView from "./sidebar/OverView";
import WorkingSpace from "./sidebar/WorkingSpace";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <User />
            <OverView />
            <WorkingSpace />
        </div>
    )
}

export default Sidebar;