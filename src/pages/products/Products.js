import "./Products.css";
import ProductTileOne from "../../components/productTiles/ProductTileOne";

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