import "./ProductTileTwo.css";
import React, {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import axios from "axios";
import {numberFormat} from "../../helpers/PriceFormat";


function ProductTileTwo() {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        async function getProduct() {
            try {
                const result = await
                    axios.get('http://localhost:8080/open/products/8');
                console.log(result);
                setProduct(result.data);
            } catch (error) {
                console.error(error);
            }
        }
        getProduct();
    }, []);


    const {register, watch} = useForm();
    const selectedReferrer = watch("aantal personen");

    return (
        <>
            <div className="tile-two-outer-container">
                {product &&
                    <div className="tile-two-inner-container">
                        <div>
                            <h2 key={product.id}>
                                {product.productName}
                            </h2>
                        </div>

                        <div className="option-dropdown">
                            <p className="explanatory-notes">
                                kies het aantal personen:
                            </p>
                            <select
                                {...register
                                ("aantal personen",
                                    {
                                        required: true
                                    })}>
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
                <img src={product.image} alt={`foto van ${product.productName}`}/>
            </div>

        </>
    );
}

export default ProductTileTwo;