import React from "react";
import "./Selection.css";
import {useForm} from "react-hook-form";
import Button from "../../components/button/Button";
import ProductTileTwo from "../../components/tiles/ProductTileTwo";
import IceCream from "../../components/flavors/IceCream";
import Sorbet from "../../components/flavors/Sorbet";

function Selection() {

    const {handleSubmit, formState: {errors}} = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    return (
        <>

            {/*    {productTile &&*/}
            {/*        <div className="tile">*/}
            {/*            <img src={productTile.image} alt={`${productTile.productName}`}/>*/}
            {/*            <h4>{productTile.productName}</h4>*/}
            {/*        </div>*/}
            {/*    }*/}

            <div className="selection-outer-container">
                <div className="selection-inner-container">

                    <form className="flavor-form" onSubmit={handleSubmit(onSubmit)}>
                        <ProductTileTwo/>
                        <p>U kunt uit de volgende smaken kiezen voor uw ijstaart (maximaal 4 smaken per taart):</p>
                        <div className="flavors-section">
                        <div className="ice-cream-outer-container">
                        <h5 className="explanatory-notes">
                            Roomijs
                        </h5>
                        <div className="ice-cream-inner-container">
                            <IceCream/>
                            <IceCream/>
                            <IceCream/>
                            <IceCream/>
                            <IceCream/>
                            <IceCream/>
                            <IceCream/>
                            <IceCream/>
                            <IceCream/>
                            <IceCream/>
                            <IceCream/>
                            <IceCream/>
                            <IceCream/>
                            <IceCream/>
                            <IceCream/>
                            <IceCream/>
                            <IceCream/>
                            <IceCream/>
                            <IceCream/>
                            <IceCream/>
                            <IceCream/>
                            <IceCream/>
                            <IceCream/>
                            <IceCream/>
                            <IceCream/>
                            <IceCream/>
                            <IceCream/>
                        </div>
                        </div>

                        <div className="sorbet-outer-container">
                        <h5 className="explanatory-notes">
                            Sorbet
                        </h5>
                        <div className="sorbet-inner-container">
                            <Sorbet/>
                            <Sorbet/>
                            <Sorbet/>
                            <Sorbet/>
                            <Sorbet/>
                            <Sorbet/>
                            <Sorbet/>
                            <Sorbet/>
                            <Sorbet/>
                        </div>
                        </div>
                        </div>

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
