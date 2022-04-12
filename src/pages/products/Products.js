import React, {useState, useEffect} from "react";
import "./Products.css";
import axios from "axios";
import ProductCard from "../../components/Product/ProductCard";

function Products() {

    const [product, setProduct] = useState(null);
    const [endpoint, setEndpoint] = useState(`https://pokeapi.co/api/v2/pokemon`)

    useEffect(() => {
        async function fetchData() {
            try {
                const result = await axios.get(`${endpoint}`);
                console.log(result.data);
                setProduct(result.data)
            } catch (e) {
                console.error(e);
            }
        }

        fetchData();

    }, [endpoint]);


    return (
        <>
            <header>
                {product && <>
                    <button
                        disabled={!product.previous}
                        type = "button"
                        onClick={() => setEndpoint([product.previous])}
                    >
                        Previous
                    </button>

                    <button
                        disabled={!product.next}
                        type="button"
                        onClick={() => setEndpoint([product.next])}
                    >
                        Next
                    </button>
                </>
                }
            </header>


            <div className="product-card">
                {product && product.results.map((card) => {
                    return <ProductCard endpoint={card.url}/>
                })}
            </div>
        </>
    )
}

export default Products;