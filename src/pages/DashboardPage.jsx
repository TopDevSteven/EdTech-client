import React, { useEffect } from "react";
import Sidebar from "../components/dashboard/Sidebar";
import "./DashboardPage.css"
// import WorkingArea from "../components/dashboard/lessonapp_area/LessonArea";
// import GpthubArea from "../components/dashboard/gpthub_area/GpthubArea";
import { Routes, Route, Outlet } from "react-router-dom";
import {useAuth} from "../auth/auth";
import { useContext } from "react";
import { UserContext } from "../App";

const DashboardPage = () => {
    const {token, csrfToken} = useAuth();
    const {setFirstname, setLastname} = useContext(UserContext);
    
    useEffect(() => {
        const fetchUser = async () => {
            const response = await fetch('/api/auth/user', {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: `Bearer ${token}`,
                  'X-CSRFToken': csrfToken
                  // Pass the authentication token in the headers
                },
            });

            if (response.ok) {
                const data = await response.json()
                setFirstname(data.first_name);
                setLastname(data.last_name);
            }

        }

        fetchUser();
    }, [])

    return (
        <div className="d-flex">
            <div className="sidebar-container">
                <Sidebar />
            </div>
            <Outlet />
        </div>
    )
}

export default DashboardPage;