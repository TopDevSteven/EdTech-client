import React, { useState } from "react";
import "./User.css"
import {ReactComponent as SettingIcon} from '../../../assets/icons/cog.svg'
import { UserContext } from "../../../App";
import { useContext } from "react";
import Profile from "./Profile";

const User = () => {
    const {firstname, lastname} = useContext(UserContext);
    const [isProfileOpen, setProfileOpen] = useState(false);
    const handleOpenProfile = () => {
        setProfileOpen(true);
    }

    const handleCloseProfile = () => {
        setProfileOpen(false);
    }

    return (
        <div className="user">
            <div className="user-container">
                <img src="/avatars/user1.png" className="avatar" />
                <div className="name-container">
                    <p className="name">{firstname} {lastname}</p>
                    <p className="member">Premium Member</p>
                </div>
            </div>
            <SettingIcon className="setting-icon" onClick={handleOpenProfile}/>
            <Profile 
                isOpen={isProfileOpen} 
                onClose={handleCloseProfile}
                firstname={firstname}
                lastname={lastname}
            />
        </div>
    );
};

export default User;