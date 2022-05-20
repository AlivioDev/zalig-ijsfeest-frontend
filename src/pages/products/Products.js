import "./Products.css";
import ProductTile from "../../components/productTiles/ProductTile";

function Products() {

    return (
        <>
            <div className="products-outer-container">
                <div className="products-inner-container">
                    <h2>Kies de ijstaart die u wilt samenstellen</h2>
                    <ProductTile className="product-tiles"/>
                </div>
            </div>
        </>
    );
}

export default Products;