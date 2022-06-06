import React from "react";
import "./Admin.css";
import Orders from "../../components/tables/Orders";
import Button from "../../components/button/Button";
import {useHistory} from "react-router-dom";


function Admin() {
    const history = useHistory();

    return (
        <div className="admin-outer-container">
            <Button
                onClick={() => history.push(`/add-product`)}
                description="Nieuw product aanmaken"
            />
            <p className="table-text">klik met de rechtermuisknop op een regel voor meer opties</p>
            <div className="order-grid">
                <Orders/>
            </div>
        </div>
    );
}

export default Admin;