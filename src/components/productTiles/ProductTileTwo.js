import "./ProductTileTwo.css";
import React, {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import axios from "axios";
import {numberFormat} from "../../helpers/priceFormat";
import {imagePicker} from "../../helpers/imagePicker";
import {useParams} from "react-router-dom";

function ProductTileTwo() {
    const [product, setProduct] = useState([]);
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


    const {register, handleSubmit, watch} = useForm();
    const selectedReferrer = watch("options");

    function onFormSubmit(data) {
        console.log(data);
    }

    return (
        <>
            <div className="tile-two-outer-container">
                {product &&
                    <div className="tile-two-inner-container">
                        <div >
                            <h2 key={product.id}
                                onSubmit={handleSubmit(onFormSubmit)}
                                {...register (
                                    "productName",
                                    {
                                        value: product.productName
                                    }
                                )}
                            >
                                {product.productName}
                            </h2>
                        </div>

                        <div className="option-dropdown">
                            <p className="explanatory-notes">
                                kies het aantal personen:
                            </p>
                            <select
                                onSubmit={handleSubmit(onFormSubmit)}
                                {...register(
                                    "options"
                                )}
                            >
                                <option
                                    value="optionOne"
                                    disabled={product.numberOfPersonsOne === null}
                                >
                                    {product.numberOfPersonsOne ?
                                        `${product.numberOfPersonsOne}    ${numberFormat((product.priceOne))}`
                                        : ""}
                                </option>

                                <option
                                    value="optionTwo"
                                    disabled={product.numberOfPersonsTwo === null}
                                >
                                    {product.numberOfPersonsTwo ?
                                        `${product.numberOfPersonsTwo}    ${numberFormat((product.priceTwo))}`
                                        : ""}
                                </option>

                                <option
                                    value="optionThree"
                                    disabled={product.numberOfPersonsThree === null}
                                >
                                    {product.numberOfPersonsThree ?
                                        `${product.numberOfPersonsThree}    ${numberFormat((product.priceThree))}`
                                        : ""}
                                </option>
                                <option
                                    value="profiteroles"
                                    disabled= {product.perPerson === null}
                                >
                                    {product.perPerson ?
                                        `Vanaf 6 personen   ${numberFormat((product.priceOne))}`
                                        : ""}
                                </option>
                            </select>

                            {selectedReferrer === "profiteroles" &&
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

        </>
    );
}

export default ProductTileTwo;