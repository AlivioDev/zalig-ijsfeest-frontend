import "./ShoppingCart.css";
import OrderLines from "../../components/cart/OrderLines";
import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import {numberFormat} from "../../helpers/numberFormat";
import DateTimeDropDown from "../../components/cart/DateTimeDropDown";
import PaymentOptions from "../../components/cart/PaymentOptions";


export default function ShoppingCart() {
    const [orderLines, setOrderLines] = useState([]);
    const {username} = useParams();
    const hour = 1000 * 60 * 60;
    const date = Date.now() - hour;
    const isValid = `${username}${date}`;


    useEffect(() => {
        async function fetchOrderLineData() {
            try {
                const result = await axios.get(`http://localhost:8080/open/orderlines/user/${username}`);
                console.log(result.data);
                setOrderLines(result.data);
            } catch (error) {
                console.error(error);
            }
        }

        fetchOrderLineData();
    }, [username]);

    const validOrderLines = orderLines.filter((orderLine) => {
        return orderLine.id >= isValid;
    });

    console.log(validOrderLines);


    let orderAmount = 0;
    validOrderLines.map((price) => {
        return orderAmount += price.price;
    });

    console.log(orderAmount);


    return (
        <div className="cart-outer-container">

            <div className="cart-inner-container">
                <div className="order-lines">
                <h3 className="cart-text">Winkelwagentje</h3>
                <OrderLines orderLines={validOrderLines}/>
                <h3 className="cart-text">Totaalbedrag: {numberFormat(orderAmount)}</h3>
                </div>
            </div>

            <div>
                <DateTimeDropDown/>
            </div>

            <div>
                <PaymentOptions/>
            </div>

        </div>
    );
}
