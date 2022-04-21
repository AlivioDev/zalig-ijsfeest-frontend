import React, {useEffect, useState} from "react";
import "./Selection.css";
import {useForm} from "react-hook-form";
import Button from "../../components/button/Button";
import ProductTileTwo from "../../components/tiles/ProductTileTwo";
import IceCream from "../../components/flavors/IceCream";
import Sorbet from "../../components/flavors/Sorbet";
import {useParams} from "react-router-dom";

//functie maken dat er max 4 checkboxen kunnen worden geselecteerd

function Selection() {
    const [orderLine, setOrderLine] = useState({
        product: "",
        variant: "",
        flavors: "",
        price: 0.00,
    });


    const {handleSubmit} = useForm();

    // useEffect(() => {
    //     async function createOrderLine(){
    //         try{
    //             const result = await
    //                 axios.post("http:/localhost:8080/orderline",
    //                 {
    //                     product: product,
    //                     variant: variant,
    //                     flavors: {
    //                     [flavors]
    //                     },
    //                     price:   price,
    //                  })
    //                 );
    //             console.log(result.data);
    //             setProduct(result.data.productName);
    //         }catch(error) {
    //             console.error(error);
    //         }
    //     }
    //     getProduct();
    // }, [])


    return (
        <>

            <div className="selection-outer-container">
                <div className="selection-inner-container">


                    {/*schrijf async axios functie om bestelregel op te slaan*/}
                    <form className="flavor-form" onSubmit={handleSubmit("createOrderLine")}>
                        <ProductTileTwo/>

                        {/*<p>U kunt uit de volgende smaken kiezen voor uw ijstaart (maximaal 4 smaken per taart):</p>*/}
                        {/*<div className="flavors-section">*/}
                        {/*    */}
                        {/*    <div className="ice-cream-outer-container">*/}
                        {/*        <h5 className="explanatory-notes">*/}
                        {/*            Roomijs*/}
                        {/*        </h5>*/}
                        {/*        <div className="ice-cream-inner-container">*/}
                        {/*            <IceCream/>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}

                        {/*    <div className="sorbet-outer-container">*/}
                        {/*        <h5 className="explanatory-notes">*/}
                        {/*            Sorbet*/}
                        {/*        </h5>*/}
                        {/*        <div className="sorbet-inner-container">*/}
                        {/*            <Sorbet/>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*    */}
                        {/*</div>*/}

                        <div className="selection-button">
                            <Button
                                type="submit"
                                description="Bevestig keuzes"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Selection;
