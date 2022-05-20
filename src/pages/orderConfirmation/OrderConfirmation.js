import React, {useContext, useEffect, useState} from "react";
import "./OrderConfirmation.css";
import axios from "axios";
import {useHistory, useParams} from "react-router-dom";
import Button from "../../components/button/Button";
import {AuthContext} from "../../context/AuthContext";
import UserData from "../../components/userData/UserData";
import {numberFormat} from "../../helpers/numberFormat";
import PreLoader from "../../components/preloader/PreLoader";

function OrderConfirmation() {
    const [loading, toggleLoading] = useState(false);
    const [orders, setOrders] = useState([]);
    const {username} = useParams();
    const history = useHistory();
    const {logout} = useContext((AuthContext));

    useEffect(() => {
        async function fetchOrderData() {
            toggleLoading(true);
            try {
                const result = await axios.get(`http://localhost:8080/orders/user/${username}`);
                setOrders(result.data);
                console.log(result);
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
            <div className="orderconfirmation-outer-container">
                <h3 className="order-confirmation">Bevestiging van uw bestelling:</h3>
                <UserData/>
                <div className="orderconfirmation-inner-container">
                    {Object.keys(orders).length > 0 &&
                        <>
                            <p>Ordernummer: {orders.slice(-1)[0].id}</p>
                            <p>Afhaal moment: {orders.slice(-1)[0].pickupDate}</p>
                            <p>Totaalbedrag: {numberFormat(orders.slice(-1)[0].orderAmount)}</p>
                            {orders.slice(-1)[0].paymentStatus === "online" ?
                                <p>U heeft online betaald</p>
                                :
                                <p>U betaalt tijdens afhalen</p>
                            }

                            {/*TODO: bij meerdere producten in 1 bestelling wordt er maar 1 product gerenderd, refresh nodig voor de resterende producten*/}
                            <div className="orderconfirmation-orderlist-outer-container">
                                {orders.slice(-1)[0].orderLines.map((orderLine) => {
                                    return (
                                        <ul className="orderconfirmation-orderlist-inner-container" key={orderLine.id}>
                                            <li>IJstaart: {orderLine.productName}</li>
                                            <li>Aantal personen: {orderLine.options} {orderLine.persons}</li>
                                            <li>Smaken: {orderLine.flavors}</li>
                                            <li>Prijs: {numberFormat(orderLine.price)} </li>
                                        </ul>
                                    );
                                })}
                            </div>
                        </>
                    }
                </div>

                <h1>Bedankt voor uw bestelling en alvast een Zalig Ysfeest!</h1>

                <Button
                    onClick={() => history.push(`/products/${username}`)}
                    type="button"
                    description="Nog een bestelling plaatsen"
                />
                <Button
                    onClick={logout}
                    type="button"
                    description="Uitloggen"
                />
            </div>
        </>
    );
}

export default OrderConfirmation;