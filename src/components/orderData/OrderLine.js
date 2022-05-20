import React from "react";
import {numberFormat} from "../../helpers/numberFormat";


function OrderLine({orderLine:{id, productName, options, persons, flavors, price}}) {

    return (

        <tr key={id}>
            <td>{productName}</td>
            <td>{options} {persons}</td>
            <td>{flavors}</td>
            <td>{numberFormat(price)}</td>
        </tr>
    );
}

export default OrderLine;