// import React, {useState, useEffect} from "react";
import "./Products.css";
// import axios from "axios";
import ProductTileOne from "../../components/tiles/ProductTileOne";

function Products() {

    return (
        <>
            <div className="products-outer-container">
                <div className="products-inner-container">
                    <h2>Kies de ijstaart die u wilt samenstellen</h2>
                    <ProductTileOne className="product-tiles"/>
                </div>
            </div>
        </>
    );
}

export default Products;