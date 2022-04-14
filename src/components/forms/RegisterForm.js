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
            <h2>Indien u nog geen login gegevens heeft kun u zich hier registreren: </h2>

            <form onSubmit={handleSubmit(onSubmit)}>

                <label htmlFor="firstName">
                    Voornaam:
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
                </label>

                <label htmlFor="lastName">
                    Achternaam:
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
                </label>

                <label htmlFor="phone">
                    Telefoonnummer:
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
                </label>

                <label htmlFor="email">
                    E-mail adres:
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
                </label>

                <label htmlFor="username">
                    Gebruikersnaam:
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
                </label>

                <label htmlFor="password">
                    Wachtwoord:
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
                </label>

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