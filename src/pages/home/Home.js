import React from "react";
import "./Home.css";
import SignUpForm from "../../components/forms/SignUpForm";
import LoginForm from "../../components/forms/LoginForm";


function Home() {


    return (
        <>
            <div className="home-outer-container">
            <div className="home-inner-container">
            <h1>Welkom bij Zalig Ysfeest!</h1>

            <LoginForm/>

            <SignUpForm/>
            </div>
            </div>
        </>
    );

}

export default Home;