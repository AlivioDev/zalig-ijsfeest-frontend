import "./OrderData.css";
import axios from "axios";
import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {numberFormat} from "../../helpers/numberFormat";
import PreLoader from "../preloader/PreLoader";

function OrderData() {
    const [loading, toggleLoading] = useState(false);
    const [orders, setOrders] = useState([]);
    const {username} = useParams();

    useEffect(() => {
        async function fetchOrderData() {
            toggleLoading(true);
            try {
                const result = await axios.get(`http://localhost:8080/orders/user/${username}`);
                setOrders(result.data);
            } catch (error) {
                console.error(error);
            }
            toggleLoading(false);
        }

        fetchOrderData();
    }, []);

    return (
        <>
            {loading && <PreLoader/>}
            <h3 className="userdata-text">Bestellingen</h3>
            <div className="order-inner-container">
                {orders &&
                    orders.map((order) => {
                        return (
                            <ul className="orderlist-outer-container" key={order.id}>
                                <li>Ordernummer: {order.id}</li>
                                <li>Afhaal moment: {order.pickupDate}</li>
                                <li>Totaalbedrag: {numberFormat(order.orderAmount)}</li>
                                {order.paymentStatus === "online" ?
                                    <li>U heeft online betaald</li>
                                    :
                                    <li>U betaalt tijdens afhalen</li>
                                }
                                <li>
                                    {order.orderLines.map((orderLine) => {
                                        return (
                                            <ul className="orderlist-inner-container" key={orderLine.id}>
                                                <li>IJstaart: {orderLine.productName}</li>
                                                <li>Aantal personen: {orderLine.options} {orderLine.persons}</li>
                                                <li>Smaken: {orderLine.flavors}</li>
                                                <li>Prijs: {numberFormat(orderLine.price)} </li>
                                            </ul>
                                        );
                                    })}
                                </li>
                            </ul>
                        );
                    })}
            </div>
        </>
    );
}


export default OrderData;