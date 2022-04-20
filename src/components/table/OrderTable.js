import "./OrderTable.css"
import React from "react";
import {useForm} from "react-hook-form";

function OrderTable() {

    const {register, formState: {errors}} = useForm();
    console.log(errors);


    return (
        <>
            <table className="order-table">
                <caption>Bestellingen</caption>
                <thead>
                <tr>
                    <th/>
                    <th>Ordernummer</th>
                    <th>Klant</th>
                    <th>Bestelling</th>
                    <th>Afhaal datum</th>
                    <th>Afhaal tijd</th>
                    <th>Bedrag</th>
                    <th>Betaalstatus</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>
                        <input
                            className="table-checkbox"
                            type="checkbox"
                            placeholder="select"
                            {...register
                            ("select"
                            )}
                        />
                    </td>
                    <td>regel1</td>
                    <td>kolom3</td>
                    <td>testdata</td>
                    <td>testdata</td>
                    <td>testdata</td>
                    <td>testdata</td>
                    <td>testdata</td>
                </tr>
                </tbody>
            </table>
        </>
    )
}

export default OrderTable;