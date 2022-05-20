import React, {useEffect, useState} from "react";
import "./ProductOptions.css";
import Button from "../../components/button/Button";
import axios from "axios";
import {useHistory, useParams} from "react-router-dom";
import {numberFormat} from "../../helpers/numberFormat";
import {imagePicker} from "../../helpers/imagePicker";
import PreLoader from "../../components/preloader/PreLoader";
import {useForm} from "react-hook-form";

function ProductOptions() {
    const [loading, toggleLoading] = useState(false);
    const [product, setProduct] = useState("");
    const [iceCreamFlavor, setIceCreamFlavor] = useState("");
    const [sorbetFlavor, setSorbetFlavor] = useState("");
    const [maximumFlavors, setMaximumFlavors] = useState(false);
    const [maximumFlavorsError, setMaximumFlavorsError] = useState("");

    const count = [];

    const {register, handleSubmit} = useForm();

    const {productId} = useParams();

    useEffect(() => {
        async function getProduct() {
            toggleLoading(true);
            try {
                const result = await
                    axios.get(`http://localhost:8080/products/${productId}`);
                setProduct(result.data);
            } catch (error) {
                console.error(error);
            }
            toggleLoading(false);
        }

        getProduct();
    }, [productId]);


    useEffect(() => {
        async function getIceCreamFlavor() {
            toggleLoading(true);
            try {
                const result = await
                    axios.get("http://localhost:8080/icecreamflavors");
                setIceCreamFlavor(result.data);
            } catch (error) {
                console.error(error);
            }
            toggleLoading(false);
        }

        getIceCreamFlavor();
    }, [productId]);

    useEffect(() => {
        async function getSorbetFlavor() {
            toggleLoading(true);
            try {
                const result = await
                    axios.get("http://localhost:8080/sorbetflavors");
                setSorbetFlavor(result.data);
            } catch (error) {
                console.error(error);
            }
            toggleLoading(false);
        }

        getSorbetFlavor();
    }, [productId]);

    const history = useHistory();
    const {username} = useParams();
    const date = Date.now();
    const id = `${username}${date}`;

    async function onFormSubmit(data) {
        if (data.options === product.numberOfPersonsOne) {
            data.price = product.priceOne;
            data.persons = null;
        } else if (data.options === product.numberOfPersonsTwo) {
            data.price = product.priceTwo;
            data.persons = null;
        } else if (data.options === product.numberOfPersonsThree) {
            data.price = product.priceThree;
            data.persons = null;
        } else if (product.productName === "Profiteroles"){
            data.price = product.priceOne * data.persons;
        }
        console.log(data);
        toggleLoading(true);
        try {
            const response = await axios.post("http://localhost:8080/orderlines",
                {
                    id: id,
                    flavors: (data.flavors).toString(),
                    productName: product.productName,
                    options: data.options,
                    persons: data.persons,
                    price: data.price,
                    dateCreated: date
                });
            console.log(response);
            history.push(`/shopping-cart/${username}`);
        } catch (error) {
            console.error(error);
        }
        toggleLoading(false);
    }

    function handleInput(event) {
        count.push(event.target.value);
        if (count.length > 4) {
            setMaximumFlavors(true);
            setMaximumFlavorsError("U kunt maximaal 4 smaken kiezen");
        } else if (count.length < 5) {
            setMaximumFlavors(false);
            setMaximumFlavorsError("");
        }
    }


    return (
        <>
            <div className="options-outer-container">

                <div className="options-inner-container">
                    {loading && <PreLoader/>}

                    <form className="options-form" onSubmit={handleSubmit(onFormSubmit)}>
                        <div className="product-outer-container">

                            {product && product.id !== 1008 ?
                                <div className="product-inner-container">
                                    <h2 key={product.id}>
                                        {product.productName}
                                    </h2>

                                    <div className="option-dropdown">
                                        <p className="explanatory-notes">
                                            kies het aantal personen:
                                        </p>

                                        <select
                                            defaultValue={product.numberOfPersonsOne}
                                            {...register(
                                                "options", {
                                                    required : "maak een keuze uit het keuzemenu"
                                                }
                                            )}>
                                            <option
                                                value={product.numberOfPersonsOne}
                                                disabled={product.numberOfPersonsOne === null}
                                            >
                                                {product.numberOfPersonsOne ?
                                                    `${product.numberOfPersonsOne}    ${numberFormat((product.priceOne))}`
                                                    : ""}
                                            </option>

                                            <option
                                                value={product.numberOfPersonsTwo}
                                                disabled={product.numberOfPersonsTwo === null}
                                            >
                                                {product.numberOfPersonsTwo ?
                                                    `${product.numberOfPersonsTwo}    ${numberFormat((product.priceTwo))}`
                                                    : ""}
                                            </option>

                                            <option
                                                value={product.numberOfPersonsThree}
                                                disabled={product.numberOfPersonsThree === null}
                                            >
                                                {product.numberOfPersonsThree ?
                                                    `${product.numberOfPersonsThree}     ${numberFormat((product.priceThree))}`
                                                    : ""}
                                            </option>
                                        </select>
                                    </div>
                                </div>

                            :
                                <div className="profiteroles">
                                    <h2 key={product.id}>{product.productName}</h2>
                                    <h3 className="profiteroles-text">€ 5,- per persoon</h3>
                                    <h3 className="profiteroles-text">Vanaf 6 personen</h3>
                                    <p className="explanatory-notes">kies het aantal personen:</p>
                                    <input
                                        type="number"
                                        defaultValue={6}
                                        min={6}
                                        {...register("persons")}
                                    />
                                </div>
                            }
                            {imagePicker((product))}
                        </div>

                        <p>U kunt uit de volgende smaken kiezen voor uw ijstaart (maximaal 4 smaken per taart):</p>

                        <div className="flavors-section">

                            <div className="ice-cream-outer-container">
                                <h5 className="explanatory-notes">
                                    Roomijs
                                </h5>
                                <div className="ice-cream-inner-container">
                                    {iceCreamFlavor &&
                                        iceCreamFlavor.map((iceCream) => {
                                            return (
                                                <div className="flavor-container" key={iceCream.name}>
                                                    <input
                                                        className="flavor-checkbox"
                                                        type="checkbox"
                                                        value={iceCream.name}
                                                        onClick={handleInput}
                                                        {...register
                                                        ("flavors")}

                                                    />
                                                    <label htmlFor="flavors" className="flavor-label">
                                                        {iceCream.name}
                                                    </label>
                                                </div>
                                            );
                                        })
                                    }
                                </div>
                            </div>

                            <div className="sorbet-outer-container">
                                <h5 className="explanatory-notes">
                                    Sorbet
                                </h5>
                                <div className="sorbet-inner-container">
                                    {sorbetFlavor &&
                                        sorbetFlavor.map((sorbet) => {
                                            return (
                                                <div className="flavor-container" key={sorbet.name}>
                                                    <input
                                                        className="flavor-checkbox"
                                                        type="checkbox"
                                                        value={sorbet.name}
                                                        onClick={handleInput}
                                                        {...register
                                                        ("flavors")}
                                                    />
                                                    <label htmlFor="flavors" className="flavor-label">
                                                        {sorbet.name}
                                                    </label>
                                                </div>
                                            );
                                        })
                                    }
                                </div>
                            </div>
                        </div>

                        <p className="maximumFlavorsError">{maximumFlavorsError}</p>
                        <div className="selection-button">
                            <Button
                                type="submit"
                                description="Naar winkelmandje"
                                disabled={maximumFlavors}
                            />
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default ProductOptions;
