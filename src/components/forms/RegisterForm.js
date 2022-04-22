import "./Forms.css";
import Button from "../button/Button";
import React from "react";
import {useForm} from "react-hook-form";
import {useHistory} from "react-router-dom";
import axios from "axios";


function RegisterForm() {
    const {register, handleSubmit, formState: {errors}} = useForm();

    const history = useHistory();

    async function onFormSubmit(data) {
        try {
            const response = await axios.post("http://localhost:8080/open/signup",
                {
                    firstName: data.firstName,
                    lastName: data.lastName,
                    phone: data.phone,
                    email: data.email,
                    username: data.username,
                    password: data.password,
                    role: "USER",
                });
            console.log(response.data);
            history.push("/signup-success");
        } catch (error) {
            console.error(error);
        }
    }


    return (
        <div className="forms-container">

            <form className="account-form" onSubmit={handleSubmit(onFormSubmit)}>
                <h2 className="form-title">Indien u nog geen login gegevens heeft kun u zich hier registreren: </h2>

                <section className="form-section">
                    <label htmlFor="firstName">
                        Voornaam:
                    </label>
                    <input
                        type="text"
                        {...register(
                            "firstName",
                            {
                                required: "Dit veld is verplicht",
                                minLength: {
                                    value: 3,
                                    message: "Vul minimaal 3 letters in"
                                },
                                maxLength: {
                                    value: 25,
                                    message: "Vul maximaal 25 karakters in"
                                }
                            })}
                    />
                    <div className="form-error">
                        {errors.firstName && <p>{errors.firstName.message}</p>}
                    </div>
                </section>

                <section className="form-section">
                    <label htmlFor="lastName">
                        Achternaam:
                    </label>
                    <input
                        type="text"
                        {...register(
                            "lastName",
                            {
                                required: "Dit veld is verplicht",
                                minLength: {
                                    value: 3,
                                    message: "Vul minimaal 3 letters in"
                                },
                                maxLength: {
                                    value: 25,
                                    message: "Vul maximaal 25 karakters in"
                                }
                            }
                        )}
                    />
                    <div className="form-error">
                        {errors.lastName && <p>{errors.lastName.message}</p>}
                    </div>
                </section>

                <section className="form-section">
                    <label htmlFor="phone">
                        Telefoonnummer:
                    </label>
                    <input
                        type="text"
                        {...register(
                            "phone",
                            {
                                required: "Dit veld is verplicht",
                                minLength: {
                                    value: 10,
                                    message: "Vul minimaal 10 cijfers in"
                                },
                                maxLength: {
                                    value: 13,
                                    message: "Vul maximaal 13 karakters in"
                                }
                            }
                        )}
                    />
                    <div className="form-error">
                        {errors.phone && <p>{errors.phone.message}</p>}
                    </div>
                </section>

                <section className="form-section">
                    <label htmlFor="email">
                        E-mail adres:
                    </label>
                    <input
                        type="email"
                        {...register(
                            "email",
                            {
                                required: "Dit veld is verplicht",
                                pattern: /^\S+@\S+$/i,
                                message: "Vul een geldig e-mailadres in"
                            })}
                    />
                    <div className="form-error">
                        {errors.email && <p>{errors.email.message}</p>}
                    </div>
                </section>

                <section className="form-section">
                    <label htmlFor="username">
                        Gebruikersnaam:
                    </label>
                    <input
                        type="text"
                        placeholder="Gebruik minimaal 6 karakters"
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
                    <div className="form-error">
                        {errors.username && <p>{errors.username.message}</p>}
                    </div>
                </section>

                <section className="form-section">
                    <label htmlFor="password">
                        Wachtwoord:
                    </label>
                    <input
                        type="password"
                        placeholder="Gebruik hoofdletters, kleine letters, cijfers en !@#$%^&*-(=)+"
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
                                },
                                validate: (value) => {
                                    return (
                                        [/[a-z]/, /[A-Z]/, /[0-9]/, /[^a-zA-Z0-9]/].every((pattern) => pattern.test(value))
                                        || "Gebruik minimaal 1 hoofdletter, 1 kleine letter, 1 cijfer en 1 speciaal karakter"
                                    );
                                }
                            })}
                    />
                    <div className="form-error">
                        {errors.password && <p>{errors.password.message}</p>}
                    </div>
                </section>

                <div className="register-button">
                    <Button
                        type="submit"
                        description="Registreer"
                    />
                </div>
            </form>
        </div>
    );
}

export default RegisterForm;