import React from "react";
import "./OrderHistory.css";
import Button from "../../components/button/Button";
import {useHistory, useParams} from "react-router-dom";
import UserData from "../../components/userData/UserData";
import OrderData from "../../components/orderData/OrderData";


function OrderHistory() {
    const history = useHistory();
    const {username} = useParams();

    return (
        <>
            <div className="userdata-outer-container">
                <div className="userdata-inner-container">
                    <UserData/>
                </div>
                <div className="order-outer-container">
                    <OrderData/>
                </div>
                <div className="order-button">
                    <Button
                        onClick={() => history.push(`/products/${username}`)}
                        type="button"
                        description="Ik wil een nieuwe bestelling plaatsen"
                    />
                </div>
            </div>
        </>
    );
}

export default OrderHistory;