import * as React from "react"
import "./Signup.css"

export default function Signup() {
  return (
    <div className="signup" id="signup">
        <h1>Create Account</h1>
        <input id = "preferredName" className = "input signup-input" type="text" placeholder="Preferred Name" />
        <br />
        <input id = "email" className = "input signup-input" type="email" placeholder="Enter your email" />
        <br />
        <input id = "password" className = "input signup-input" type="password" placeholder="Create a Password" />
        <br />
        <input id = "confirm-password" className = "input signup-input" type="password" placeholder="Confirm Password" />
        <br />
        <button className = "login-btn">
            Next
        </button>
        <p>Already Have an Account? </p>
        <button className = "login-btn">
            Login!
        </button>
    </div> 
  )
}