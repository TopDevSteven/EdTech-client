import React, { useState, useEffect } from "react";
import "./WorkingSpace.css";
import { ReactComponent as SquareIcon } from "../../../assets/icons/square.svg";
import { ReactComponent as TriangleIcon } from "../../../assets/icons/triangle.svg";
import { ReactComponent as OctagonIcon } from "../../../assets/icons/octagon.svg";
import { ReactComponent as AnalyticsIcon } from "../../../assets/icons/dashbaord.svg";
import { ReactComponent as PerformanceIcon } from "../../../assets/icons/Star.svg";
import { ReactComponent as TestlabIcon } from "../../../assets/icons/bulb.svg";
import { Link, useLocation } from "react-router-dom";

const WorkingSpace = () => {
  const location = useLocation();
  const [selected, setSelected] = useState();

  useEffect(() => {
    // Function to update the selected state based on the current URL path
    const updateSelected = () => {
      const path = location.pathname;
      if (path === "/userdashboard/lesson_app") {
        setSelected(0);
      } else if (path === "/userdashboard/gpt_hub/category") {
        setSelected(1);
      } else if (path === "/userdashboard/personal_ai") {
        setSelected(2);
      } else if (path ==="/userdashboard/testlab") {
        setSelected(4);
      } else if (path == "/userdashboard/performance") {
        setSelected(5);
      } else if (path == "/userdashboard/exambook") {
        setSelected(3);
      }
    };

    // Call the function on the initial render
    updateSelected();

    // Add event listeners to detect changes in URL
    window.addEventListener("hashchange", updateSelected);
    window.addEventListener("popstate", updateSelected);

    // Clean up the event listeners on unmount
    return () => {
      window.removeEventListener("hashchange", updateSelected);
      window.removeEventListener("popstate", updateSelected);
    };
  }, [location.pathname]);

  return (
    <div className="working-container">
      <div className="achievement-container">
        <div>
          <p className="achievement-header-text">ACHIEVENMENT SPACES</p>
        </div>
        <div className="achievement-list-container">
          <ul className="achievement-list">
            <li>
              {/* <a href="#">
                <PerformanceIcon className="performance-icon" />
                Performance
              </a> */}
              <Link to={"/userdashboard/performance"}
                className={`achievement-link-btn ${
                  selected === 5 ? "active" : ""
                }`}
                >
                <PerformanceIcon className={`performance-icon ${
                  selected === 5 ? "active": ""
                }`} />
                Performance
              </Link>
            </li>
            <li>
              {/* <a href="">
                <TestlabIcon className="testlab-icon" />
                TestLab
              </a> */}
              <Link 
                to={"/userdashboard/testlab"}
                className={`achievement-link-btn ${
                  selected === 4 ? "active" : ""
                }`}
                >
                <TestlabIcon className={`testlab-icon ${
                  selected === 4 ? "active": ""
                }`} />
                TestLab
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="learning-container">
        <div className="learning-header-container">
          <p className="workingspace-header-text">LEARNING SPACES</p>
        </div>
        <div className="learning-list-container">
          <ul className="learning-list">
            <li>
              <Link
                to={"/userdashboard/lesson_app"}
                className={`menu-btn-standard ${
                  selected === 0 ? "active" : ""
                }`}
              >
                <SquareIcon className="learn-icon" />
                Learning App
              </Link>
            </li>
            <li>
              <Link
                to={"/userdashboard/gpt_hub"}
                className={`menu-btn-standard ${
                  selected === 1 ? "active" : ""
                }`}
              >
                <TriangleIcon className="gpthub_icon" />
                GPT-Hub
              </Link>
            </li>
            <li>
              <Link
                to={"/userdashboard/personal_ai"}
                className={`menu-btn-standard ${
                  selected === 2 ? "active" : ""
                }`}
              >
                <SquareIcon className="personal_ai_icon" />
                Personal AI-GPT
              </Link>
            </li>
            <li>
              {/* <a href="#" className="menu-btn-standard">
                <OctagonIcon className="booking_icon" />
                Exam Booking App
              </a> */}
              <Link
                to={"/userdashboard/exambook"}
                className={`menu-btn-standard ${
                  selected === 3 ? "active" : ""
                }`}
              >
                <OctagonIcon className="booking_icon" />
                Exam Booking App
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WorkingSpace;
