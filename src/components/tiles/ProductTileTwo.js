// import React, {useState, useEffect} from "react";
import "./ProductTileTwo.css";
// import axios from "axios";
import Logo from "../logo/Logo";
import React from "react";
import {useForm} from "react-hook-form";
// import Button from "../button/Button";
// import Selection from "../../pages/selection/Selection";
// import {Link} from "react-router-dom";


function ProductTileOne() {

    const {register, handleSubmit, formState: {errors}} = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    // function ProductTileOne({endpoint}) {
    // const [productTile, setProductTile] = useState(null);
    //
    // useEffect(() => {
    //     async function fetchData() {
    //         try {
    //             const result = await
    //                 axios.get(`${endpoint}`);
    //             console.log(result.data);
    //             setProductTile(result.data);
    //         } catch (e) {
    //             console.error(e);
    //         }
    //     }
    //
    //     fetchData();
    // }, [endpoint]);


    return (
        <>
            {/*<div>*/}
            {/*    {productTile &&*/}
            {/*            <h4>{productTile.productName}</h4>*/}
            {/*        <div className="tile">*/}
            {/*            <img src={productTile.image} alt={`${productTile.productName}`}/>*/}
            {/*        </div>*/}
            {/*    }*/}
            {/*</div>*/}

            <div className="tile-two-outer-container">
                <div className="tile-two-inner-container">
                    <h2> naam ijstaart</h2>

                    <form className="option-dropdown" onSubmit={handleSubmit(onSubmit)}>
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
                                value="optionOne">
                                4/6 personen € 20,00
                            </option>
                            <option value="optionTwo">
                                8/10 personen € 26,50
                            </option>
                            <option value="optionThree">
                                14/16 personen € 39,50
                            </option>
                        </select>
                    </form>
                </div>
                <Logo/>
            </div>
        </>
    );
}

export default ProductTileOne;