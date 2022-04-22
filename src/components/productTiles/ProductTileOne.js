import React, {useEffect, useState} from "react";
import "./ProductTileOne.css";
import axios from "axios";
import Button from "../button/Button";
import {useHistory} from "react-router-dom";
import {imagePicker} from "../../helpers/imagePicker";

function ProductTileOne() {
    const [product, setProduct] = useState([]);
    const history = useHistory();

    useEffect(() => {
        async function getProduct() {
            try {
                const result = await
                    axios.get("http://localhost:8080/open/products");
                setProduct(result.data);
                console.log(result.data);
            } catch (error) {
                console.error(error);
            }
        }
        getProduct();
    }, []);

    return (
        <>
            {product &&
                <div className="product-tiles">
                    {product.map((product) => {
                        return (
                            <ul key={product.id} >
                                <li className="tile">
                                    {imagePicker((product))}
                                <p>
                                    {product.productName}
                                </p>
                                <Button
                                    type="button"
                                    onClick={() => history.push(`/options/${product.id}`)}
                                    description="Samenstellen"
                                />
                                </li>
                            </ul>
                        );
                    })}
                </div>
            }
        </>
    );
}

export default ProductTileOne;