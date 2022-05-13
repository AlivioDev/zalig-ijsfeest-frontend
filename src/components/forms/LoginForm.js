import "./Forms.css";
import Button from "../button/Button";
import React, {useContext, useState} from "react";
import {useForm} from "react-hook-form";
import {AuthContext} from "../../context/AuthContext";
import {useHistory} from "react-router-dom";
import axios from "axios";
import PreLoader from "../preloader/PreLoader";

function LoginForm() {
    const [loading, toggleLoading] = useState(false);
    const {register, handleSubmit,formState: {errors}} = useForm();
    const {login} = useContext(AuthContext);

    const history = useHistory();

    async function onFormSubmit(data) {
        toggleLoading(true);
        try {
            const result = await axios.post("http://localhost:8080/authenticate",
                {
                    username: data.username,
                    password: data.password,
                })
            console.log(result);
            login(result.data.jwt);
            history.push(`/profile/${data.username}`)
        } catch(error){
            console.error(error);
        }
        toggleLoading(false);
    }

    return (
        <div className="forms-container">
            {loading && <PreLoader/>}
            <form className="account-form" onSubmit={handleSubmit(onFormSubmit)}>
                <h2 className="form-title">Inloggen: </h2>

                <section className="form-section">
                <label htmlFor="username">
                    Gebruikersnaam:
                </label>
                    <input
                        type="text"
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
                    <div className="form-error">
                        {errors.password && <p>{errors.password.message}</p>}
                    </div>
                </section>

                <div className="login-button">
                    <Button
                        type="submit"
                        description="Login"
                    />
                </div>
            </form>
        </div>
    );
}

export default LoginForm;