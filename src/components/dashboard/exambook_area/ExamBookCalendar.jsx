import React from "react";
import Calender from "../../common/Calender";
import "./ExamBookCalendar.css"
import MessageInputBox from "../../common/MessageInputBox";

const ExamBookCalendar = () => {
    return (
        <div className="exambookcalendar-container">
            <div className="exambookcalendar-wrapper">
                <h3 className="exambookcalendar-header">Exam Booking App</h3>
                <p className="exambookcalendar-content">When do you want to book your exam?</p>
                <Calender />
                <div className="bookbtn-container">
                    <button className="book-btn">Book Now</button>
                </div>
            </div>
            <div className="examinput-container">
                <MessageInputBox />
            </div>
        </div>
    )
}

export default ExamBookCalendar;