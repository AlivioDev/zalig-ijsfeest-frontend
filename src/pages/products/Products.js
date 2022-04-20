// import React, {useState, useEffect} from "react";
import "./Products.css";
// import axios from "axios";
import ProductTileOne from "../../components/tiles/ProductTileOne";

function Products() {

    // const token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0a2xhbnR1c2VyIiwiZXhwIjoxNjUwOTEzODcwLCJpYXQiOjE2NTAwNDk4NzB9.7nHfH9CdpR_DI4pAnm-F6H8tsofdEioDhNtyZosflG0";
    //
    // const [product, setProduct] = useState(null);
    // const endpoint = `http://localhost:8080/products`
    //
    //
    // useEffect(() => {
    //     async function fetchData() {
    //         try {
    //             const result = await axios.get(`${endpoint}`, {
    //                 headers: {
    //                     "Content-Type": "application/json",
    //                     Authorization: `Bearer ${token}`,
    //                 }
    //             });
    //             console.log(result.data);
    //             setProduct(result.data)
    //         } catch (e) {
    //             console.error(e);
    //         }
    //     }
    //
    //     fetchData();
    //
    // }, [endpoint]);


    return (
        <>
            {/*<header>*/}
            {/*    {tiles && <>*/}
            {/*        <button*/}
            {/*            disabled={!tiles.previous}*/}
            {/*            type = "button"*/}
            {/*            onClick={() => setEndpoint([tiles.previous])}*/}
            {/*        >*/}
            {/*            Previous*/}
            {/*        </button>*/}

            {/*        <button*/}
            {/*            disabled={!tiles.next}*/}
            {/*            type="button"*/}
            {/*            onClick={() => setEndpoint([tiles.next])}*/}
            {/*        >*/}
            {/*            Next*/}
            {/*        </button>*/}
            {/*    </>*/}
            {/*    }*/}
            {/*</header>*/}


            {/*<div className="product-tile">*/}
            {/*    {product && product.results.map((tile) => {*/}
            {/*        return <ProductTileOne endpoint={tile.url}/>*/}
            {/*    })}*/}
            {/*</div>*/}

            <div className="products-outer-container">
                <div className="products-inner-container">
                    <h2>Kies de ijstaart die u wilt samenstellen</h2>
                    <div className="product-tiles">
                    <ProductTileOne/>
                    <ProductTileOne/>
                    <ProductTileOne/>
                    <ProductTileOne/>
                    <ProductTileOne/>
                    <ProductTileOne/>
                    <ProductTileOne/>
                    <ProductTileOne/>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Products;