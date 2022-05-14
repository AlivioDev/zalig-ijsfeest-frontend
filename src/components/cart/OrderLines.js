import "./OrderLines.css";
import React from "react";
import OrderLine from "./OrderLine";

// Customers.js

function OrderLines({orderLines}) {

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
        </>
    );
}

export default OrderLines;