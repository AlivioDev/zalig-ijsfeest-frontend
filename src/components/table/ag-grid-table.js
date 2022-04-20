import React, {useState, useEffect, useCallback, useMemo, useRef} from "react";
import {AgGridReact} from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import Button from "../button/Button";


function GridTable() {

    const gridRef = useRef();

    const [rowData, setRowData] = useState(
        [{
            ordernummer: "2412221230",
            klant: "user01",
            bestelling: "Ster, 4/6 personen, banaan",
            afhaaldatum: "24122022",
            afhaaltijd: "12.30",
            bedrag: 19.50,
            betaalstatus: true
        }
    ]);

    const [columnDefs] = useState([
        {field: "ordernummer", checkboxSelection: true},
        {field: "klant"},
        {field: "bestelling"},
        {field: "afhaaldatum"},
        {field: "afhaaltijd"},
        {field: "bedrag"},
        {field: "betaalstatus"}
        // {field: 'make', dndSource: true},
        // {field: 'model'},
        // {field: 'price'}
    ]);


    const defaultColDef = useMemo( ()=> ({
        sortable: true,
        filter: true,

    }), []);

    const cellClickedListener = useCallback( event => {
        console.log('cellClicked', event);
    }, []);

    // useEffect(() => {
    //     fetch("https://www.ag-grid.com/example-assets/row-data.json")
    //         .then(result => result.json())
    //         .then(rowData => setRowData(rowData));
    // }, []);


    const onBtExport = useCallback(() => {
        gridRef.current.api.exportDataAsCsv();
    }, []);

    const pushMeClicked = useCallback( e => {
        gridRef.current.api.deselectAll();
    },[]);

    const onBtCopyRows = useCallback(() => {
        gridRef.current.api.copySelectedRowsToClipboard();
    }, []);


    return (
        <>
        <div className="ag-theme-alpine" style={{height: 800}}>
            <Button
                onClick={onBtExport}
                description={'Exporteer als CSV'}
            />

            <Button
                onClick={pushMeClicked}
                description="Selectie opheffen"
            />
            <AgGridReact
                ref={gridRef}
                columnDefs={columnDefs}
                rowData={rowData}
                rowSelection='multiple'
                rowMultiSelectWithClick={true}
                animateRows={true}
                defaultColDef={defaultColDef}
                onCellClicked={cellClickedListener}
                onBtCopyRows={onBtCopyRows}
            />
        </div>


        </>
    );
}
export default GridTable;