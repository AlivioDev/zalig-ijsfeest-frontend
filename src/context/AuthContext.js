import React, {createContext, useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import jwt_decode from "jwt-decode";
import axios from "axios";
import PreLoader from "../components/preloader/PreLoader";

export const AuthContext = createContext({});

function AuthContextProvider({children}) {
    const [auth, setAuth] = useState({
        isAuth: false, user: null, status: "pending",
    });

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (token) {
            const decodedToken = jwt_decode(token);
            fetchUserData(decodedToken, token);
        } else {
            setAuth({
                ...auth, status: "done",
            });
        }
    }, []);

    async function fetchUserData(decodedToken, token) {
        try {
            const response = await axios.get(`http://localhost:8080/users/${decodedToken.sub}`, {
                headers: {
                    "Content-Type": "application/json", Authorization: `Bearer ${token}`,
                }
            });
            setAuth({
                ...auth, isAuth: true, user: {
                    password: response.data.password,
                    username: response.data.username,
                    id: response.data.id,
                    role: response.data.authorities[0].authority,
                }, status: "done",
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
                ...auth, status: "done",
            });
        }
    }


    const history = useHistory();

    function login(jwtToken) {
        localStorage.setItem("token", jwtToken);
        const decodedToken = jwt_decode(jwtToken);
        console.log(decodedToken);
        console.log("Gebruiker is ingelogd!");
        fetchUserData(decodedToken, jwtToken);

        setAuth({
            ...auth, isAuth: true, user: {
                username: decodedToken.username,
            }
        });
        history.push(`/profile/${decodedToken.username}`);
    }

    function logout() {
        localStorage.clear();
        setAuth({
            ...auth, isAuth: false,
        });
        console.log("Gebruiker is uitgelogd!");
        history.push("/");
    }

    const contextData = {
        isAuth: auth.isAuth, login: login, logout: logout, user: auth.user
    };

    return (<AuthContext.Provider value={contextData}>
        {auth.status === "done" ? children : <PreLoader/>}
    </AuthContext.Provider>);
}

export default AuthContextProvider;