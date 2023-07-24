import React from "react";
import "./OverView.css"
import {ReactComponent as SearchIcon} from "../../../assets/icons/search.svg"
import {ReactComponent as CreditCardIcon} from "../../../assets/icons/credit-card.svg"

const OverView = () => {
    return (
        <div className="sidebar-head-container">
            <div className="head-text-container">
                <p className="header-text">GENERAL</p>
            </div>
            <div className="overview-container">
                    <ul className="overview">
                        <li><a href="#"><SearchIcon className ="overview-icon"/>Search</a></li>
                        <li><a href="#"><CreditCardIcon className ="overview-icon"/>Billing</a></li>
                    </ul>
            </div>
        </div>
    )
}

export default OverView;