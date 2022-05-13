import React, {useEffect, useState} from "react";
import "./ProductOptions.css";
import {useForm} from "react-hook-form";
import Button from "../../components/button/Button";
import axios from "axios";
import {useHistory, useParams} from "react-router-dom";
import {numberFormat} from "../../helpers/priceFormat";
import {imagePicker} from "../../helpers/imagePicker";

function ProductOptions() {
    const [product, setProduct] = useState("");
    const [iceCreamFlavor, setIceCreamFlavor] = useState("");
    const [sorbetFlavor, setSorbetFlavor] = useState("");
    const [maximumFlavors, setMaximumFlavors] = useState(false);
    const [maximumFlavorsError, setMaximumFlavorsError] = useState("");

    const count = [];

    const {register, handleSubmit, watch} = useForm();
    const selectedReferrer = watch("options");

    const {productId} = useParams();

    useEffect(() => {
        async function getProduct() {
            try {
                const result = await
                    axios.get(`http://localhost:8080/open/products/${productId}`);
                setProduct(result.data);
            } catch (error) {
                console.error(error);
            }
        }
        getProduct();
    }, [productId]);


    useEffect(() => {
        async function getIceCreamFlavor() {
            try {
                const result = await
                    axios.get("http://localhost:8080/open/icecreamflavors");
                setIceCreamFlavor(result.data);
            } catch (error) {
                console.error(error);
            }
        }

        getIceCreamFlavor();
    }, []);

    useEffect(() => {
        async function getSorbetFlavor() {
            try {
                const result = await
                    axios.get("http://localhost:8080/open/sorbetflavors");
                setSorbetFlavor(result.data);
            } catch (error) {
                console.error(error);
            }
        }
        getSorbetFlavor();
    }, []);


    const history = useHistory();
    const {username} = useParams();
    const date = Date.now();
    const id = `${username}${date}`

    async function onFormSubmit(data) {
        if (data.options === product.numberOfPersonsOne) {
            data.price = product.priceOne;
        } else if (data.options === product.numberOfPersonsTwo) {
            data.price = product.priceTwo;
        } else if (data.options === product.numberOfPersonsThree) {
            data.price = product.priceThree;
        } else if (data.options === product.perPerson) {
            data.price = product.priceOne * data.persons;
        }
        console.log(data);

        try {
            const result = await axios.post("http://localhost:8080/open/orderlines",
                {
                    id: id,
                    flavors: JSON.stringify(data.flavors),
                    productName: data.productName,
                    options: data.options,
                    persons: data.persons,
                    price: data.price,
                });
            console.log(result);
            // history.push("/shopping-cart");
        } catch (error) {
            console.error(error);
        }
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

                    <form className="options-form" onSubmit={handleSubmit(onFormSubmit)}>
                        <div className="product-outer-container">

                            {product &&
                                <div className="product-inner-container">
                                    <h2 key={product.id}>
                                        {product.productName}
                                    </h2>
                                    <input className="invisible"
                                           {...register(
                                               "productName",
                                               {
                                                   value: product.productName
                                               }
                                           )}
                                    />

                                    <div className="option-dropdown">
                                        <p className="explanatory-notes">
                                            kies het aantal personen:
                                        </p>

                                        <select
                                            {...register(
                                                "options"
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

                                            <option
                                                value={product.perPerson}
                                                disabled={product.perPerson === null}
                                            >
                                                {product.perPerson ?
                                                    `Vanaf 6 personen ${numberFormat((product.priceOne))} per persoon`
                                                    : ""}
                                            </option>
                                        </select>

                                        {selectedReferrer === product.perPerson &&
                                            <input
                                                type="number"
                                                defaultValue={6}
                                                min={6}
                                                {...register("persons")}
                                            />
                                        }
                                    </div>
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
                                description="Naar winkelwagentje"
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
