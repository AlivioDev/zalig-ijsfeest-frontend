import React, {createContext, useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import jwt_decode from "jwt-decode";
import axios from "axios";

export const AuthContext = createContext({});

function AuthContextProvider({children}) {
    const [auth, setAuth] = useState({
        isAuth: false,
        user: null,
        status: "pending",
    });

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (token) {
            const decodedToken = jwt_decode(token);

            async function fetchUserData() {
                try {
                    const response = await axios.get(`http://localhost:8080/users/${decodedToken.sub}`, {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`,
                        }
                    });
                    // console.log(response);
                    setAuth({
                        ...auth,
                        isAuth: true,
                        user: {
                            password: response.data.password,
                            username: response.data.username,
                            // id: response.data.id,
                        },
                        status: "done",
                    });
                } catch (e) {
                    console.error(e);

                    if (e.response.status === 500) {
                        console.log("De server deed het niet");
                    } else if (e.response.status === 404) {
                        console.log("De developer heeft iets doms gedaan in het request");
                    } else {
                        console.log("Het ging mis. Geen idee wat.");
                    }

                    setAuth({
                        ...auth,
                        status: "done",
                    });
                }
            }

            fetchUserData();
        } else {
            setAuth({
                ...auth,
                status: "done",
            });
        }
    }, []);

    const history = useHistory();

    function login(jwtToken) {

        localStorage.setItem("token", jwtToken);
        const decodedToken = jwt_decode(jwtToken);
        // console.log(decodedToken);
        // console.log("Gebruiker is ingelogd!");

        setAuth({
            ...auth,
            isAuth: true,
            user: {
                password: decodedToken.password,
            }
        });

        history.push("/profile");
    }

    function logout() {
        console.log("Gebruiker is uitgelogd!");
        setAuth({
            ...auth,
            isAuth: false,
        });
        history.push("/");
    }

    const contextData = {
        isAuth: auth.isAuth,
        login: login,
        logout: logout,
    };

    return (
        <AuthContext.Provider value={contextData}>
            {auth.status === "done" ? children : <img src="../assets/549-ice-cream-scoops-flat.gif" alt="Loading..."/>}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;