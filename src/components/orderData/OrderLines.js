import "./OrderLines.css";
import React, {useContext} from "react";
import OrderLine from "./OrderLine";
import Button from "../button/Button";
import {useHistory} from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";


function OrderLines({orderLines}) {
    const history = useHistory();
    const {user} = useContext((AuthContext));


    return (
        <>
            <table>
                    <thead>
                    <tr>
                        <th>Product:</th>
                        <th>Aantal personen: </th>
                        <th>Smaken: </th>
                        <th>Prijs:</th>
                    </tr>
                    </thead>
                    <tbody>
                     {orderLines.map(orderLine => <OrderLine key={orderLine.id} orderLine={orderLine}/>)}
                    </tbody>
                </table>

            <Button
                type="button"
                onClick={() => history.push(`/products/${user.username}`)}
                description="Ik wil nog een ijstaart toevoegen aan mijn bestelling"
            />
        </>
    );
}

export default OrderLines;