import React from "react";
import "./Admin.css"
// import OrderTable from "../../components/table/OrderTable";
import GridTable from "../../components/table/ag-grid-table";



function Admin() {


    return(
        <div className="admin-outer-container">
            <div className="admin-inner-container">
            {/*<OrderTable/>*/}
                <GridTable/>
            </div>
        </div>
    )
}

export default Admin;