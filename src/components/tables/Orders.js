import React, {useEffect, useMemo, useRef, useState} from "react";
import {AgGridReact} from "ag-grid-react";
import "./OrderTable.css"
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import "ag-grid-enterprise";

/*benodigde dependecies:
    "ag-grid-community": "^27.2.0",
    "ag-grid-react": "^27.2.0",
    als install niet lukt, dan eerst beiden versie 27.1.0 installeren en daarna lukt 27.2 wel */

function OrderListForAdmin() {
    const [rowData, setRowData] = useState([]);
    const gridRef = useRef();


    const columns = useMemo(() => [
        {field:"order.id", headerName: "ordernummer"},
        {field:"order.user.username", headerName:"Gebruikersnaam"},
        {field:"productName", headerName:"IJstaart"},
        {field:"flavors", headerName:"Smaken", resizable: true},
        {field:"options", headerName:"Opties"},
        {field:"persons", headerName:"Personen"},
        {field:"order.pickupDate", headerName:"Afhaalmoment"},
        {field:"order.orderAmount", headerName:"Bedrag"},
        {field:"order.paymentStatus", headerName:"Betaald"}
    ], []);

    const defaultColumnSettings = useMemo(() => ({
        sortable: true,
        filter: true,
    }), []);

    useEffect(() => {
        fetch("http://localhost:8080/open/orderlines")
            .then(result => result.json())
            .then(rowData => setRowData(rowData));
    }, []);

    console.log(rowData);

    return (
        <>
            <div className="ag-theme-alpine" style={{height: 800}}>
                <p className="table-text">klik met de rechtermuisknop op een regel voor meer opties</p>
                <AgGridReact
                    defaultColDef = {defaultColumnSettings}
                    pagination={true}
                    ref={gridRef}
                    rowData={rowData}
                    columnDefs={columns}
                    animateRows={true}
                >
                </AgGridReact>
            </div>
        </>
    );
}
export default OrderListForAdmin;