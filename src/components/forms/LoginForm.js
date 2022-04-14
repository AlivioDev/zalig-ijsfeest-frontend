import "./Forms.css";
import Button from "../button/Button";
import React from "react";
import {useForm} from "react-hook-form";

function LoginForm() {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    return (
        <div className="forms-container">
            <h2>Inloggen: </h2>

            <form onSubmit={handleSubmit(onSubmit)}>

                <label htmlFor="username">
                    Gebruikersnaam:
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
                    {errors.username && <p>{errors.username.message}</p>}
                </label>

                <label htmlFor="password">
                    Wachtwoord:
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
                    {errors.password && <p>{errors.password.message}</p>}
                </label>

                <div className="home-button">
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