import "./UserData.css";
import axios from "axios";
import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import PreLoader from "../preloader/PreLoader";

function UserData() {
    const [loading, toggleLoading] = useState(false);
    const [userData, setUserData] = useState([]);
    const {username} = useParams();

    useEffect(() => {
        async function fetchUserData() {
            const token = localStorage.getItem("token");
            toggleLoading(true);
            try {
                const result = await
                    axios.get(`http://localhost:8080/users/${username}`, {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`,
                        }
                    });
                setUserData(result.data);
                console.log(result.data.authorities[0].authority);
            } catch (error) {
                console.error(error);
            }
            toggleLoading(false);
        }

        fetchUserData();
    }, []);

    return (
        <>
            {loading && <PreLoader/>}
            <div className="userdata-overview">
                <div className="userdata">
                    <p>Voornaam: </p>
                    <p>Achternaam: </p>
                    <p>Telefoonnummer: </p>
                    <p>E-mail adres: </p>
                    <p>Gebruikersnaam: </p>
                </div>
                <div className="userdata">
                    <p>{userData.firstName}</p>
                    <p>{userData.lastName}</p>
                    <p>{userData.phoneNumber}</p>
                    <p>{userData.email}</p>
                    <p>{userData.username}</p>
                </div>
            </div>
        </>
    );
}

export default UserData;