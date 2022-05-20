import "./ShoppingCart.css";
import OrderLines from "../../components/orderData/OrderLines";
import React, {useEffect, useState} from "react";
import {useHistory, useParams} from "react-router-dom";
import axios from "axios";
import {numberFormat} from "../../helpers/numberFormat";
import Button from "../../components/button/Button";
import {useForm} from "react-hook-form";
import PreLoader from "../../components/preloader/PreLoader";


const options22 = [
    {"date": "22 december", "time": "09:00 - 09:15"}, {"date": "22 december", "time": "09:15 - 09:30"},
    {"date": "22 december", "time": "09:30 - 09:45"}, {"date": "22 december", "time": "09:45 - 10:00"},
    {"date": "22 december", "time": "10:00 - 10:15"}, {"date": "22 december", "time": "10:15 - 10:30"},
    {"date": "22 december", "time": "10:45 - 11:00"}, {"date": "22 december", "time": "11:00 - 11:15"},
    {"date": "22 december", "time": "11:15 - 11:30"}, {"date": "22 december", "time": "11:30 - 11:45"},
    {"date": "22 december", "time": "11:45 - 12:00"}, {"date": "22 december", "time": "12:00 - 12:15"},
    {"date": "22 december", "time": "12:15 - 12:30"}, {"date": "22 december", "time": "13:00 - 13:15"},
    {"date": "22 december", "time": "13:15 - 13:30"}, {"date": "22 december", "time": "13:30 - 13:45"},
    {"date": "22 december", "time": "13:45 - 14:00"}, {"date": "22 december", "time": "14:00 - 14:15"},
    {"date": "22 december", "time": "14:15 - 14:30"}, {"date": "22 december", "time": "14:45 - 15:00"},
    {"date": "22 december", "time": "15:00 - 15:15"}, {"date": "22 december", "time": "15:15 - 15:30"},
    {"date": "22 december", "time": "15:30 - 15:45"}, {"date": "22 december", "time": "15:45 - 16:00"},
    {"date": "22 december", "time": "16:00 - 16:15"}, {"date": "22 december", "time": "16:15 - 16:30"},
    {"date": "22 december", "time": "16:30 - 16:45"}, {"date": "22 december", "time": "16:45 - 17:00"}
];

const options23 = [
    {"date": "23 december", "time": "09:00 - 09:15"}, {"date": "23 december", "time": "09:15 - 09:30"},
    {"date": "23 december", "time": "09:30 - 09:45"}, {"date": "23 december", "time": "09:45 - 10:00"},
    {"date": "23 december", "time": "10:00 - 10:15"}, {"date": "23 december", "time": "10:15 - 10:30"},
    {"date": "23 december", "time": "10:45 - 11:00"}, {"date": "23 december", "time": "11:00 - 11:15"},
    {"date": "23 december", "time": "11:15 - 11:30"}, {"date": "23 december", "time": "11:30 - 11:45"},
    {"date": "23 december", "time": "11:45 - 12:00"}, {"date": "23 december", "time": "12:00 - 12:15"},
    {"date": "23 december", "time": "12:15 - 12:30"}, {"date": "23 december", "time": "13:00 - 13:15"},
    {"date": "23 december", "time": "13:15 - 13:30"}, {"date": "23 december", "time": "13:30 - 13:45"},
    {"date": "23 december", "time": "13:45 - 14:00"}, {"date": "23 december", "time": "14:00 - 14:15"},
    {"date": "23 december", "time": "14:15 - 14:30"}, {"date": "23 december", "time": "14:45 - 15:00"},
    {"date": "23 december", "time": "15:00 - 15:15"}, {"date": "23 december", "time": "15:15 - 15:30"},
    {"date": "23 december", "time": "15:30 - 15:45"}, {"date": "23 december", "time": "15:45 - 16:00"},
    {"date": "23 december", "time": "16:00 - 16:15"}, {"date": "23 december", "time": "16:15 - 16:30"},
    {"date": "23 december", "time": "16:30 - 16:45"}, {"date": "23 december", "time": "16:45 - 17:00"}
];

const options24 = [
    {"date": "24 december", "time": "09:00 - 09:15"}, {"date": "24 december", "time": "09:15 - 09:30"},
    {"date": "24 december", "time": "09:30 - 09:45"}, {"date": "24 december", "time": "09:45 - 10:00"},
    {"date": "24 december", "time": "10:00 - 10:15"}, {"date": "24 december", "time": "10:15 - 10:30"},
    {"date": "24 december", "time": "10:45 - 11:00"}, {"date": "24 december", "time": "11:00 - 11:15"},
    {"date": "24 december", "time": "11:15 - 11:30"}, {"date": "24 december", "time": "11:30 - 11:45"},
    {"date": "24 december", "time": "11:45 - 12:00"}, {"date": "24 december", "time": "12:00 - 12:15"},
    {"date": "24 december", "time": "12:15 - 12:30"}, {"date": "24 december", "time": "13:00 - 13:15"},
    {"date": "24 december", "time": "13:15 - 13:30"}, {"date": "24 december", "time": "13:30 - 13:45"},
    {"date": "24 december", "time": "13:45 - 14:00"}, {"date": "24 december", "time": "14:00 - 14:15"},
    {"date": "24 december", "time": "14:15 - 14:30"}, {"date": "24 december", "time": "14:45 - 15:00"},
    {"date": "24 december", "time": "15:00 - 15:15"}, {"date": "24 december", "time": "15:15 - 15:30"},
    {"date": "24 december", "time": "15:30 - 15:45"}, {"date": "24 december", "time": "15:45 - 16:00"}
];

function ShoppingCart() {
    const [loading, toggleLoading] = useState(false);
    const [orderLines, setOrderLines] = useState([]);
    const [selectedOption, setSelectedOption] = useState("");
    const [isOpen22, setIsOpen22] = useState(false);
    const [isOpen23, setIsOpen23] = useState(false);
    const [isOpen24, setIsOpen24] = useState(false);
    const [selectedPayment, setSelectedPayment] = useState("");
    const [isOpenPayment, setIsOpenPayment] = useState(false);
    const history = useHistory();
    const {username} = useParams();
    const {handleSubmit} = useForm();

    const toggling22 = () => setIsOpen22(!isOpen22);
    const toggling23 = () => setIsOpen23(!isOpen23);
    const toggling24 = () => setIsOpen24(!isOpen24);
    const togglingPayment = () => setIsOpenPayment(!isOpenPayment);

    const hour = 1000 * 60 * 60 * 2;
    const expirationDate = Date.now() - hour;
    const isValid = `${username}${expirationDate}`;
    const validOrderLines = orderLines.filter((orderLine) => {
        return (orderLine.id >= isValid) && (orderLine.order == null);
    });

    let orderAmount = 0;
    validOrderLines.map((price) => {
        return orderAmount += price.price;
    });

    const onOptionClicked = value => () => {
        setSelectedOption(`${value.date} ${value.time}`);
        setIsOpen22(false);
        setIsOpen23(false);
        setIsOpen24(false);
    };

    let checkDate = 0;
    let checkOrder = null;
    let id = "";

    useEffect(() => {
        async function fetchOrderLineData() {
            toggleLoading(true);
            try {
                const result = await axios.get(`http://localhost:8080/orderlines/user/${username}`);
                setOrderLines(result.data);
            } catch (error) {
                console.error(error);
            }
            toggleLoading(false);
        }
        fetchOrderLineData();
    }, []);


    async function deleteExpiredOrderLines() {
        for (let i = 0; i < orderLines.length; i++) {
            checkDate = orderLines[i].dateCreated;
            checkOrder = orderLines[i].order;

            if ((checkDate < expirationDate) && (checkOrder == null)) {
                id = orderLines[i].id;
                try {
                    const response = await axios.delete(`http://localhost:8080/orderlines/delete/${id}`);
                    console.log(response);
                } catch (error) {
                    console.error(error);
                }
            }
        }
    }
    deleteExpiredOrderLines();


    async function onFormSubmit() {
        toggleLoading(true);
        try {
            const response = await axios.post("http://localhost:8080/orders",
                {
                    orderAmount: orderAmount,
                    pickupDate: selectedOption,
                    paymentStatus: selectedPayment,
                    user: {
                        username: username
                    }
                });
            console.log(response);
            history.push(`/processing-order/${username}`);

        } catch (error) {
            console.error(error);
        }
        toggleLoading(false);
    }

    function handleClick() {
        setSelectedOption("");
    }

    const onPaymentClicked = value => () => {
        setSelectedPayment(value);
        setIsOpenPayment(false);
    };

    function handlePaymentClick() {
        setSelectedPayment("");
    }


    return (
        <div className="cart-outer-container">
            {loading && <PreLoader/>}
            <div className="cart-inner-container">

                <div className="order-lines">
                    <h3 className="cart-text-black">Winkelwagentje</h3>
                    <OrderLines orderLines={validOrderLines}/>
                    <h3 className="cart-text-white">Totaalbedrag: {numberFormat(orderAmount)}</h3>
                </div>
            </div>

            <form className="shopping-cart-form" onSubmit={handleSubmit(onFormSubmit)}>
                <div className="shopping-cart-form-outer-container">

                    <div className="shopping-cart-form-inner-container">
                        <h3 className="cart-text-black">Kies een van de beschikbare afhaalmomenten</h3>
                        {!selectedOption &&
                            <ul className="dropdown-container">

                                <li className="dropdown-header" onClick={toggling22}>
                                    <a className="decoration" tabIndex="-1"
                                       href="#">{selectedOption || "22 december 2022 "}
                                        <span className="caret"/>
                                    </a>
                                    {isOpen22 && (
                                        <ul className="dropdown-list">
                                            {options22.map(option => (
                                                <li className="list-item" onClick={onOptionClicked(option)}
                                                    key={Math.random()}>
                                                    {option.time}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>

                                <li className="dropdown-header" onClick={toggling23}>
                                    <a className="decoration" tabIndex="-1"
                                       href="#">{selectedOption || "23 december 2022"}
                                        <span
                                            className="caret"/></a>
                                    {isOpen23 && (
                                        <ul className="dropdown-list">
                                            {options23.map(option => (
                                                <li className="list-item" onClick={onOptionClicked(option)}
                                                    key={Math.random()}>
                                                    {option.time}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>

                                <li className="dropdown-header" onClick={toggling24}>
                                    <a className="decoration" tabIndex="-1"
                                       href="#">{selectedOption || "24 december 2022"}
                                        <span
                                            className="caret"/></a>
                                    {isOpen24 && (
                                        <ul className="dropdown-list">
                                            {options24.map(option => (
                                                <li className="list-item" onClick={onOptionClicked(option)}
                                                    key={Math.random()}>
                                                    {option.time}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            </ul>
                        }

                        {selectedOption &&
                            <div className="shopping-cart-form-choice">
                                <h3 className="cart-text-black">Uw afhaalmoment:</h3>
                                <p className="cart-text-white">{selectedOption}</p>
                                <Button
                                    description="Wijzig gekozen afhaalmoment"
                                    onClick={handleClick}
                                />
                            </div>
                        }
                    </div>
                </div>

                <div className="shopping-cart-form-outer-container">

                    <div className="shopping-cart-form-inner-container">
                        <h3 className="cart-text-black">Kies de gewenste betaal methode</h3>
                        {!selectedPayment &&
                            <ul className="dropdown-container">
                                <li className="dropdown-header" onClick={togglingPayment}>
                                    <a className="decoration" tabIndex="-1" href="#">{selectedPayment || "betaling"}
                                        <span className="caret"/>
                                    </a>
                                    {isOpenPayment && (
                                        <ul className="dropdown-list">
                                            <li className="list-item" onClick={onPaymentClicked("online")}
                                                key={Math.random()}>
                                                online
                                            </li>
                                            <li className="list-item" onClick={onPaymentClicked("tijdens afhalen")}
                                                key={Math.random()}>
                                                tijdens afhalen
                                            </li>
                                        </ul>
                                    )}
                                </li>
                            </ul>
                        }


                        {selectedPayment &&
                            <div className="shopping-cart-form-choice">
                                <h3 className="cart-text-black">U betaalt:</h3>
                                <p className="cart-text-white">{selectedPayment}</p>
                                <Button
                                    description="Wijzig gekozen betaal methode"
                                    onClick={handlePaymentClick}
                                />
                            </div>
                        }
                    </div>
                </div>

                <div className="submit-order">
                    <Button
                        type="submit"
                        description="Bestelling afronden"
                        disabled={!selectedOption || !selectedPayment}
                    />
                </div>
            </form>
        </div>
    );
}

export default ShoppingCart;