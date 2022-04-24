import React, {useEffect, useState} from "react";
import "./ProductOptions.css";
import {useForm} from "react-hook-form";
import Button from "../../components/button/Button";
import axios from "axios";
import {useParams} from "react-router-dom";
import {numberFormat} from "../../helpers/priceFormat";
import {imagePicker} from "../../helpers/imagePicker";
// import {useHistory} from "react-router-dom";

//functie maken dat er maximaal 4 checkboxen kunnen worden geselecteerd

function ProductOptions() {
    const [product, setProduct] = useState("");
    const [iceCreamFlavor, setIceCreamFlavor] = useState("");
    const [sorbetFlavor, setSorbetFlavor] = useState("");

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


    // const history = useHistory();

    // async function onFormSubmit(data) {
    // if data.flavors.length > 4
    //     try {
    //         const result = await axios.post("http://localhost:8080/open/orderlines",
    //             {
    //                 flavors: data.flavors,
    //                 productName: data.productName,
    //                 options: data.options,
    //                 persons: data.persons,
    //                 price: data.price,
    //             });
    //         console.log(result);
    //         // history.push("/shopping-cart");
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }

    async function onFormSubmit(data) {
        console.log(data);
        console.log(JSON.stringify(getValues()));
        // console.log(document.getElementById("flavor").value);
    }

    const {register, handleSubmit, watch, getValues} = useForm({
        mode: "onChange"
    });

    const selectedReferrer = watch("options");


    return (
        <>
            <div className="options-outer-container">
                <div className="options-inner-container">

                    <form className="flavor-form" onSubmit={handleSubmit(onFormSubmit)}>
                        <div className="tile-two-outer-container">

                            {product &&
                                <div className="tile-two-inner-container">
                                    <h2 key={product.id}>
                                        {product.productName}
                                    </h2>
                                    <input className="invisible"
                                        {...register (
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
                                            )}
                                        >
                                            <option
                                                value= {product.numberOfPersonsOne}
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
                                                    `${product.numberOfPersonsThree}    ${numberFormat((product.priceThree))}`
                                                    : ""}
                                            </option>

                                            <option
                                                value="other"
                                                disabled= {product.perPerson === null}
                                            >
                                                {product.perPerson ?
                                                    `Vanaf 6 personen   ${numberFormat((product.priceOne))}  per persoon`
                                                    : ""}
                                            </option>
                                        </select>

                                        {selectedReferrer === "other" &&
                                            <input
                                                type="number"
                                                defaultValue={6}
                                                min={6}
                                                {...register("personen")}
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

                        <div className="selection-button">
                            <Button
                                type="submit"
                                description="Bevestig keuzes"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default ProductOptions;
