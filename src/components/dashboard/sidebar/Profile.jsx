import React from "react";
import { Link } from "react-router-dom";
import "./Profile.css"
import LessonButton from "../../common/lessonapp_commons/LessonButton";
import {ReactComponent as CrossIcon} from "../../../assets/icons/profile_icons/cross.svg";
import {ReactComponent as EditIcon} from "../../../assets/icons/profile_icons/avatar_editer.svg";
import { useAuth } from "../../../auth/auth";

const user = {
    name: "crybaby",
    email: "crybaby@gmail.com",
    jobTitle: "student",
    language: "English"
}

const Profile = ({isOpen, onClose, firstname, lastname}) => {
    const { logout } = useAuth();

    const handleLogOut = () => {
        logout()
    }
    if(!isOpen) return null;

    return (
        <div className="profile-container">
            <div className="profile-content">
                <div className="close-icon" onClick={onClose}>
                    <span>
                        <CrossIcon />
                    </span>
                </div>
                <div className="profile-header">
                    <h1>User Profile</h1>
                </div>
                <div className="profile-icon">
                    <div className="profile-avatar-wrapper">
                        <img src="/avatars/user1.png" className="profile-avatar"/>
                        <p className="name">{firstname} {lastname}</p>
                        <p className="member">Premium Member</p>
                        <span><EditIcon /></span>
                    </div>
                    <div className="profile-btn">
                        <LessonButton label="Account" isSelected={true}/>
                        <LessonButton label="Community" />
                        <LessonButton label="Notification" />
                    </div>
                </div>
                <div className="profile-infor">
                    <div>
                        <h1>Name</h1>
                        <p>{firstname} {lastname}</p>
                        <Link>Change Name</Link>
                    </div>
                    <div>
                        <h1>Email</h1>
                        <p>{user.email}</p>
                        <Link>Change Email</Link>
                    </div>
                    <div>
                        <h1>Job Title</h1>
                        <p>{user.jobTitle}</p>
                        <Link>Change Title</Link>
                    </div>
                    <div>
                        <h1>Password</h1>
                        <p></p>
                        <Link>Change Password</Link>
                    </div>
                    <div>
                        <h1>Language</h1>
                        <p>{user.language}</p>
                        <Link>Change Language</Link>
                    </div>
                    <button className="logout-btn" onClick={handleLogOut}>
                        log out
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Profile