import "./Forms.css";
import Button from "../button/Button";
import React from "react";
import {useForm} from "react-hook-form";

function RegisterForm() {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    return (
        <div className="forms-container">


            <form onSubmit={handleSubmit(onSubmit)}>
                <h2>Indien u nog geen login gegevens heeft kun u zich hier registreren: </h2>

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
                            }
                        )}
                    />
                    {errors.firstName && <p>{errors.firstName.message}</p>}
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
                    {errors.lastName && <p>{errors.lastName.message}</p>}
                </section>

                <section className="form-section">
                <label htmlFor="phone">
                    Telefoonnummer:
                </label>
                    <input
                        type="tel"
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
                    {errors.phone && <p>{errors.phone.message}</p>}
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
                    {errors.email && <p>{errors.email.message}</p>}
                </section>

                <section className="form-section">
                <label htmlFor="username">
                    Gebruikersnaam:
                </label>
                    <input
                        type="text"
                        placeholder="Kies een gebruikersnaam van minimaal 6 karakters"
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
                </section>

                <section className="form-section">
                <label htmlFor="password">
                    Wachtwoord:
                </label>
                    <input
                        type="password"
                        placeholder="Kies een wachtwoord van minimaal 6 karakters"
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
                </section>

                <div className="home-button">
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