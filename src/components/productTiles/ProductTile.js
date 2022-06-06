import React, {useEffect, useState} from "react";
import "./ProductTile.css";
import axios from "axios";
import Button from "../button/Button";
import {useHistory, useParams} from "react-router-dom";
import {imagePicker} from "../../helpers/imagePicker";
import PreLoader from "../preloader/PreLoader";

function ProductTile() {
    const [loading, toggleLoading] = useState(false);
    const [product, setProduct] = useState([]);
    const history = useHistory();

    useEffect(() => {
        async function getProduct() {
            toggleLoading(true);
            try {
                const result = await
                    axios.get("http://localhost:8080/products");
                setProduct(result.data);
            } catch (error) {
                console.error(error);
            }
            toggleLoading(false);
        }

        getProduct();
    }, []);

    const {username} = useParams();

    return (
        <>
            {loading && <PreLoader/>}
            {product &&
                <div className="product-tiles">
                    {product.map((product) => {
                        return (
                            <ul key={product.id}>
                                <li className="tile">
                                    {imagePicker((product))}
                                    <p>
                                        {product.productName}
                                    </p>
                                    <Button
                                        type="button"
                                        onClick={() => history.push(`/options/${product.id}/${username}`)}
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

export default ProductTile;