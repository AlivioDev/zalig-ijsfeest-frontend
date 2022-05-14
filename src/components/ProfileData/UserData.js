import "./UserData.css";
import axios from "axios";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

function UserData() {
    const [userData, setUserData] = useState([]);
    const {username} = useParams();

    useEffect(() => {
        async function fetchUserData() {
            try {
                const result = await
                    axios.get(`http://localhost:8080/users/${username}`);
                setUserData(result.data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchUserData();
    }, [username]);

    return (
        <>
            <h3 className="userdata-text">Mijn gegevens</h3>
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