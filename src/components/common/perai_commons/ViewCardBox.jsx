import React from "react";
import "./ViewCardBox.css"
import {ReactComponent as EditIcon} from "../../../assets/icons/perai_category_icons/noun-edit-1167408 1.svg";
import {ReactComponent as DeleteIcon} from "../../../assets/icons/perai_category_icons/Group 968.svg";

const ViewCardBox = ({topic, typeIcon, typeLabel, status, date, showchat, onDelete}) => {
    return (
        <div className="perai-viewcard">
            <p className="perai-viewcard-topic">{topic}</p>
            <span className="perai-viewcard-typeicon">{typeIcon}</span>
            <p className="perai-viewcard-typelabel">{typeLabel}</p>
            <p onClick={showchat} className="perai-viewcard-status">{status}</p>
            <p className="perai-viewcard-date">{date}</p>
            <span className="perai-viewcard-edit"><EditIcon /></span>
            <span className="perai-viewcard-delete" onClick={onDelete}><DeleteIcon /></span>
        </div>
    );
};

export default ViewCardBox;