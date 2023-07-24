import React, { useEffect, useState } from "react";
import "./SignIn.css"
import {ReactComponent as EmailIcon}  from "../assets/icons/signin_icons/Lead Icon.svg"
import {ReactComponent as PasswordIcon}  from "../assets/icons/signin_icons/Lead Icon (1).svg"
import {ReactComponent as GoogleIcon} from "../assets/icons/signin_icons/Frame (2).svg";
import {ReactComponent as AppleIcon} from "../assets/icons/signin_icons/Frame (3).svg";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {useAuth} from "../auth/auth";

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const {user, login, isAuthenticated, isLoading } = useAuth();
    const goToDashboard =async () => {

        try {
            await login(email, password);
            navigate("/userdashboard");
        } catch (err) {
            console.log("Sign In failed");
        }
    }

    useEffect(() => {
        if (!isLoading && isAuthenticated) {
            navigate("/userdashboard");
        }
    }, [isAuthenticated, navigate, isLoading])


    return (
        <div className="signin-container">
            <div className="signin-form">
                <div className="signin-header">
                    <h1 className="first">ED</h1>
                    <h1 className="second"> TECH</h1>
                </div>
                <p className="signin-explain">Log in to Ed-Tech  to start creating magic.</p>
                <div className="signin-email">
                    <span><EmailIcon /></span>
                    <input value={email} onChange={(e) => setEmail(e.target.value)}  type="email" placeholder="Email" />
                </div>
                <div className="signin-password">
                    <span><PasswordIcon /></span>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password"/>
                </div>
                <button onClick={goToDashboard} className="login-btn">Log In</button>
                <div className="signin-line-wrapper">
                    <div></div>
                    <p>or continue with</p>
                    <div></div>
                </div>
                <div className="social-signin">
                    <Link className="social-link"><span><GoogleIcon /></span>Google Account</Link>
                    <Link className="social-link"><span><AppleIcon /></span>Apple Account</Link>
                </div>
                <div className="signup-btn-wrapper">
                    <p>Don't have an account</p>
                    <Link to={"/signup"}>Sign Up</Link>
                </div>
            </div>
            <div className="signin-background">
                <img src="/img/images/signin-background.png"/>
            </div>
        </div>
    );
};

export default SignIn;
