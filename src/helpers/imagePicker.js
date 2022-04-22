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
                product.id === 1 ? rond :
                    product.id === 2 ? ster :
                        product.id === 3 ? klok :
                            product.id === 4 ? cassata :
                                product.id === 5 ? tulband :
                                    product.id === 6 ? kathedraal :
                                        product.id === 7 ? bombe :
                                            product.id === 8 ? profiteroles : "afbeelding niet gevonden"}
            alt={`foto van ${product.productName}`}
            width={100}
            height={100}
        />
    )
}
