import { useState } from "react";
import "./CalenderItem.css";

const timeData = {
  morning: ["08 AM", "09 AM", "10 AM", "11 AM", "12 AM"],
  afternoon: ["02 PM", "03 PM", "04 PM", "05 PM", "06 PM"],
  evening: ["08 PM", "09 PM", "10 PM", "11 PM", "12 PM"],
};

const CalenderItem = ({ date }) => {
  const [selectedTime, setSelectedTime] = useState();
  const [selectedRange, setSelectedRange] = useState();

  return (
    <div>
      <p className="range-title">{date}</p>
      <div className="range-container">
        {["Morning", "Afternoon", "Evening"].map((range) => (
          <div
            key={range}
            className="range-item"
            onClick={() => setSelectedRange(range)}
          >
            {range}
          </div>
        ))}
        {selectedRange && (
          <div
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(22, 22, 22)",
              borderRadius: "10px",
              position: "absolute",
              top: 0,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              alignItems: "flex-start",
              padding: "10px",
            }}
          >
            <div style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%"
            }}>
              <p
                style={{
                  color: "#9B9C9E",
                  fontWeight: "bold",
                }}
              >
                {selectedRange}
              </p>
              <div
                style={{
                  cursor: "pointer",
                  color: "#9B9C9E",
                  width: "25px",
                  height: "25px",
                  borderRadius: "50%",
                  border: "2px solid #9B9C9E",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onClick={() => setSelectedRange(null)}
              >
                X
              </div>
            </div>
            {selectedRange &&
              timeData[selectedRange.toLowerCase()].map((time) => (
                <p
                  key={time}
                  style={{
                    color: selectedTime === time ? "#B6F09C" : "white",
                    padding: 0,
                    margin: 0,
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                  onClick={() => setSelectedTime(time)}
                >
                  {time}
                </p>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CalenderItem;
