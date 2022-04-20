import React from "react";
import "./ProductTileOne.css";
// import axios from "axios";
import Logo from "../logo/Logo";
import Button from "../button/Button";
import Selection from "../../pages/selection/Selection";

function ProductTileOne() {

// function ProductTileOne({endpoint}) {
//     const [productTile, setProductTile] = useState(null);
//
//     useEffect(() => {
//         async function fetchData() {
//             try {
//                 const result = await
//                     axios.get(`${endpoint}`);
//                 console.log(result.data);
//                 setProductTile(result.data);
//             } catch (e) {
//                 console.error(e);
//             }
//         }
//
//         fetchData();
//     }, [endpoint]);


    return (
        <>
        {/*<div>*/}
        {/*    {productTile &&*/}

        {/*        <div className="tile">*/}
        {/*            <img src={productTile.image} alt={`${productTile.productName}`}/>*/}
        {/*            <h4>{productTile.productName}</h4>*/}
        {/*    <Button as={Link} to={productTile.productPage}*/}
        {/*        type="button"*/}
        {/*        description="Samenstellen"*/}
        {/*    />*/}
        {/*        </div>*/}
        {/*    }*/}
        {/*</div>*/}

        <div className="tile">
            <Logo/>
            <p> naam ijstaart</p>
            <Button
                type="button"
                onClick={Selection}
                description="Samenstellen"
            />
        </div>
        </>
    );
}

export default ProductTileOne;