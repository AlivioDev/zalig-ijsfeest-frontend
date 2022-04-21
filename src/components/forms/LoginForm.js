import "./Forms.css";
import Button from "../button/Button";
import React, {useContext, useState} from "react";
import {useForm} from "react-hook-form";
import {AuthContext} from "../../context/AuthContext";
import {useHistory} from "react-router-dom";
import axios from "axios";

function LoginForm() {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const {login} = useContext(AuthContext);

    const [userDetails, setUserDetails] = useState({
        username: "",
        password: "",
    })

    function onFormSubmit(event) {
        event.preventDefault();
        setUserDetails({
            ...userDetails,
            username: "",
            password: "",
        });
        console.log(userDetails);
        console.log(errors);
    }


    const history = useHistory();

    async function userLogin() {
        try {
            const result = await axios.post("http://localhost:8080/auth",
                {userDetails})
            console.log(result.data);
            login(result.data.accessToken);
            history.push("/products")
        } catch(error){
            console.error(error);
        }
    }
    userLogin();


    return (
        <div className="forms-container">
            <form className="account-form" >
                <h2 className="form-title">Inloggen: </h2>
                <section className="form-section">
                <label htmlFor="username">
                    Gebruikersnaam:
                </label>
                    <input
                        type="text"
                        value={userDetails.username}
                        onChange={onFormSubmit}
                        placeholder="Vul de gebruikersnaam in die u gekozen heeft"
                        {...register(
                            "username",
                            {
                                required: "Dit veld is verplicht",
                                minLength: {
                                    value: 6,
                                    message: "Vul minimaal 6 karakters in"
                                },
                                maxLength: {
                                    value: 25,
                                    message: "Vul maximaal 25 karakters in"
                                }
                            }
                        )}
                    />
                </section>
                <div className="form-error">
                    {errors.username && <p>{errors.username.message}</p>}
                </div>

                <section className="form-section">
                <label htmlFor="password">
                    Wachtwoord:
                </label>
                    <input
                        type="password"
                        value={userDetails.password}
                        onChange={onFormSubmit}
                        placeholder="Vul het wachtwoord in dat u gekozen heeft"
                        {...register(
                            "password",
                            {
                                required: "Dit veld is verplicht",
                                minLength: {
                                    value: 6,
                                    message: "Vul minimaal 6 karakters in"
                                },
                                maxLength: {
                                    value: 25,
                                    message: "Vul maximaal 25 karakters in"
                                }
                            }
                        )}
                    />
                </section>
                <div className="form-error">
                {errors.password && <p>{errors.password.message}</p>}
                </div>

                <div className="login-button">
                    <Button
                        className="Login"
                        type="submit"
                        description="Login"
                    />
                </div>
            </form>
        </div>
    );
}


export default LoginForm;