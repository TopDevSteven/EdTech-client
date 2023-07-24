import "./Calender.css";
import CalenderItem from "./CalenderItem";

const currentDates = [
  "Saturday 8th",
  "Saturday 9th",
  "Saturday 10th",
  "Saturday 12th",
  "Saturday 13th",
  "Saturday 14th",
  "Saturday 15th",
];
const Calender = ({}) => {
  return (
    <div className="calendar-container">
      <div style={{
        display: "flex",
        alignItems: "center"
      }}>
        <button
          style={{
            width: "30px",
            height: "30px",
            backgroundColor: "white",
            outline: "none",
            border: "0px solid",
            borderRadius: "15px",
            fontWeight: "bold"
          }}
        >
          {"<"}
        </button>
      </div>
      {currentDates.map((currentDate) => (
        <CalenderItem key={currentDate} date={currentDate} />
      ))}
      <div style={{
        display: "flex",
        alignItems: "center"
      }}>
        <button
          style={{
            width: "30px",
            height: "30px",
            backgroundColor: "white",
            outline: "none",
            border: "0px solid",
            borderRadius: "15px",
            fontWeight: "bold"
          }}
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default Calender;
