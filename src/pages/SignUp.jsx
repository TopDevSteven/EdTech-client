import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./SignUp.css"

const SignUp = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("")
    const [first, setFirst] = useState("")
    const [second, setSecond] = useState("")
    const [password, setPassword] = useState("")
    const [repassword, setRepassword] = useState("")

    const handleAccount = async () => {
        console.log(email)
        const data = {
            email,
            first_name: first,
            last_name: second,
            password: password,
            password2: repassword
        }
        const res = await fetch("/api/auth/register", {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })

        if(res.ok) {
            console.log(await res.json())
            navigate("/signin")
        }
    }

    return (
        <div className="signup-container">
            <div className="signup-form">
                <Link to={"/signin"} className="login">log in</Link>
                <div className="signin-header">
                    <h1 className="first">ED</h1>
                    <h1 className="second"> TECH</h1>
                </div>
                <h1>SignUp Now</h1>
                <div className="email">
                        <label>Email</label><br/>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email"/>
                </div>
                <div className="signup-infor">
                    <div className="firstname">
                        <label>First name</label><br/>
                        <input value={first}  onChange={(e) => setFirst(e.target.value)} placeholder="First name"/>
                    </div>
                    <div className="lastname">
                        <label>Last name</label><br/>
                        <input value={second}  onChange={(e) => setSecond(e.target.value)} placeholder="Last name"/>
                    </div>
                    <div className="password">
                        <label>Password</label><br/>
                        <input value={password}  onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password"/>
                    </div>
                    <div className="re-password">
                        <label>Repeat Password</label><br/>
                        <input value={repassword}  onChange={(e) => setRepassword(e.target.value)} type="password" placeholder="Repeat Password"/>
                    </div>
                </div>
                <button onClick={handleAccount} className="login-btn">Create free account</button>
            </div>
            <div className="signup-background">
                <img src="/img/images/signup-background.png"/>
            </div>
        </div>
    )
}

export default SignUp;