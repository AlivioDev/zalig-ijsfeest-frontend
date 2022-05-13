import "./OrderData.css";
import axios from "axios";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {numberFormat} from "../../helpers/priceFormat";

function OrderData() {
    const [orders, setOrders] = useState([]);
    const {username} = useParams();

    useEffect(() => {
        async function fetchOrderData() {
            try {
                const result = await axios.get(`http://localhost:8080/open/orders/user/${username}`);
                console.log(result.data);
                setOrders(result.data);
            } catch (error) {
                console.error(error);
            }
        }

        fetchOrderData();
    }, [username]);

    return (
        <>
            <h3 className="userdata-text">Bestellingen</h3>
            <div className="order-inner-container">
            {orders &&
                orders.map((order) => {
                    return (
                        <ul className="orderlist-outer-container" key={order.id}>
                            <li>Ordernummer: {order.id}</li>
                            <li>Afhaal moment: {order.pickupDate}</li>
                            <li>Totaalbedrag: {numberFormat(order.orderAmount)}</li>
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