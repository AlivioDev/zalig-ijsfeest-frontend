import React from "react";
import "./SignUpSuccess.css";
import LoginForm from "../../components/forms/LoginForm";


function SignUpSuccess() {

    return (
        <>
            <div className="home-outer-container">
                <div className="home-inner-container">
                    <h2>Registratie succesvol, u kunt nu inloggen:</h2>

                    <LoginForm/>

                </div>
            </div>
        </>
    );

}

export default SignUpSuccess;