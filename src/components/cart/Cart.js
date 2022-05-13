import React from "react";
import {numberFormat} from "../../helpers/priceFormat";
import {useParams} from "react-router-dom";


export default function Cart() {
    const {username} = useParams();

    //get request voor orderlines maken
    //criteria voor het id is gebruikersnaam + Date.now minus maximaal 1 uur in milliseconden, orderlines ouder dan dat worden niet meer opgehaald
    // totaalbedrag van de orderregels optellen

    return (
        <>

            <p>winkelwagentje</p>
            {/*<div>*/}
            {/*    {cartItems.length === 0 && <p>Winkelwagentje is leeg</p>}*/}
            {/*</div>*/}
            {/*{cartItems.map((item) => (*/}
            {/*    <div key={item.index}>*/}
            {/*        {item.productName}*/}
            {/*        {item.options}*/}
            {/*        {item.persons}*/}
            {/*        {item.flavors}*/}
            {/*        {numberFormat(item.price)}*/}
            {/*    </div>*/}
            {/*))}*/}
        </>
    );
}