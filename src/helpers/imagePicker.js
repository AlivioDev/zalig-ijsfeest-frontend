import rond from "../assets/Ijstaart Rond.jpg";
import ster from "../assets/Ijstaart Ster.png";
import klok from "../assets/Kerstklok.png";
import cassata from "../assets/Cassata.png";
import tulband from "../assets/tulband.jpg";
import kathedraal from "../assets/kerstkathedraal2.png";
import bombe from "../assets/Bombe.png";
import profiteroles from "../assets/profiteroles.jpg";
import React from "react";

export function imagePicker(product) {
    return(
        <img
            src={
                product.id === 1001 ? rond :
                    product.id === 1002 ? ster :
                        product.id === 1003 ? klok :
                            product.id === 1004 ? cassata :
                                product.id === 1005 ? tulband :
                                    product.id === 1006 ? kathedraal :
                                        product.id === 1007 ? bombe :
                                            product.id === 1008 ? profiteroles : "afbeelding niet gevonden"}
            alt={`foto van ${product.productName}`}
            width={100}
            height={100}
        />
    )
}
