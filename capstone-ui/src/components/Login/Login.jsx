import * as React from "react"
import "./Login.css"

export default function Login() {
  return (
    <div className="login" id="login">
        <h1>Login</h1>
        <h2>Log in and start finding routes!</h2>
        <input className = "input login-input" id = "email" type="email" placeholder="Email" />
        <br />
        <input className = "input login-input" id = "password" type="text" placeholder="Password" />
        <br />
        <button className = "login-btn">
            Log In
        </button>
        <p>Don't Have an Account Yet? </p>
        <button className = "signup-btn">
            Sign up!
        </button>
    </div> 
  )
}