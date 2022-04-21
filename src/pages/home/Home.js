import React from "react";
import "./Home.css";
import RegisterForm from "../../components/forms/RegisterForm";
import LoginForm from "../../components/forms/LoginForm";


function Home() {

    return (
        <>
            <div className="home-outer-container">
            <div className="home-inner-container">
            <h1>Welkom bij Zalig Ysfeest!</h1>

            <LoginForm/>

            <RegisterForm/>
            </div>
            </div>
        </>
    );

}

export default Home;