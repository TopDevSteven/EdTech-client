import { useEffect, useState } from "react";
import "./RadioButton.css";

const RadioButton = ({ size, onSelect, checked }) => {
  const handleClick = () => {
    if (onSelect) {
        onSelect(!checked);
    }
  };

  return (
    <div
      className="radio-btn-container"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        borderColor: checked ? "#B6F09C" : "white",
      }}
      onClick={handleClick}
    >
      {checked && <div className="radio-btn-checked"></div>}
    </div>
  );
};

export default RadioButton;
