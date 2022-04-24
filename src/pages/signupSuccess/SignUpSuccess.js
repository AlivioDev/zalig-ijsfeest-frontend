import React from "react";
import "./SignUpSuccess.css";
import LoginForm from "../../components/forms/LoginForm";


function SignUpSuccess() {

    return (
        <>
            <div className="success-outer-container">
                <div className="success-inner-container">
                    <h2 className="succes">Registratie succesvol, u kunt nu inloggen:</h2>

                    <LoginForm/>

                </div>
            </div>
        </>
    );

}

export default SignUpSuccess;