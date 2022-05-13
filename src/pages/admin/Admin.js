import React from "react";
import "./Admin.css"
import Orders from "../../components/tables/Orders";


function Admin() {


    return(
        <div className="admin-outer-container">
            <div className="admin-inner-container">
                <Orders/>
            </div>
        </div>
    )
}

export default Admin;