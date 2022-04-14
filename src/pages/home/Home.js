import React from "react";
import "./Home.css";
import RegisterForm from "../../components/forms/RegisterForm";
import LoginForm from "../../components/forms/LoginForm";


function Home() {

    return (
        <>
            <h1>Welkom bij Zalig Ysfeest!</h1>
            <LoginForm/>

            <RegisterForm/>
        </>
    );

}

export default Home;