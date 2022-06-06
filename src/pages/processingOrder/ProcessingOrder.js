import "./ProcessingOrder.css";
import axios from "axios";
import {useEffect, useState} from "react";
import {useHistory, useParams} from "react-router-dom";
import processingOrder from "../../assets/ice-cream-swirl.gif";

function OrderData() {
    const [orders, setOrders] = useState([]);
    const [orderLines, setOrderLines] = useState([]);
    const {username} = useParams();
    const history = useHistory();

    useEffect(() => {
        async function fetchOrderData() {
            try {
                const result = await axios.get(`http://localhost:8080/orders/user/${username}`);
                setOrders(result.data);
            } catch (error) {
                console.error(error);
            }
            try {
                const result = await axios.get(`http://localhost:8080/orderlines/user/${username}`);
                setOrderLines(result.data);
            } catch (error) {
                console.error(error);
            }
        }

        fetchOrderData();
    }, []);


    async function addOrderIdToOrdeLines() {
        let i = (orders.length - 1);
        let order = (orders[i].id);

        console.log(order);
        for (let i = 0; i < orderLines.length; i++) {
            let checkOrder = orderLines[i].order;
            let id = orderLines[i].id;
            console.log(checkOrder);
            console.log(id);
            if (checkOrder == null) {
                try {
                    const response = await axios.put(`http://localhost:8080/orderlines/update/${id}`,
                        {
                            productName: orderLines[i].productName,
                            flavors: orderLines[i].flavors,
                            options: orderLines[i].options,
                            persons: orderLines[i].persons,
                            price: orderLines[i].price,
                            dateCreated: orderLines[i].dateCreated,
                            order: {
                                "id": order,
                            }
                        });
                    console.log(response);
                    history.push(`/order-confirmation/${username}`);
                } catch (error) {
                    console.error(error);
                }
            }
        }
    }

    addOrderIdToOrdeLines();


    return (
        <>
            <div className="processing-outer-container">
                Uw bestelling wordt verwerkt...

                <div className="processing-inner-container">
                    <img src={processingOrder} alt="IJsbereiding"/>
                </div>

            </div>

        </>
    );
}


export default OrderData;