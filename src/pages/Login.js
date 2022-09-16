import React, { useRef, useState } from 'react'
import { auth, provider } from '../firebase'
import { signInWithPopup } from 'firebase/auth'
import {useNavigate} from 'react-router-dom'

function Login({ setIsAuth }) {



let navigate = useNavigate();


    const signInWithGoogle = () => {
        // puts in ifnormatiuon user inputs
        signInWithPopup(auth, provider).then((result) => {
            localStorage.setItem("isAuth", true);
            setIsAuth(true)
            // redirects to home page
            navigate("/")
        })
    } 
  return (
    <div className="loginPage">
        <p>Sign In With Google to Continue</p>
        <button className="login-with-google-btn" onClick={signInWithGoogle} > 
        Sign in With Google
        </button>
    </div>
  )
}

export default Login;