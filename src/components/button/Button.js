import "./Button.css";
import React from "react";

function Button({description, onClick, type, disabled}) {
     return(
         <button
             onClick={onClick}
             type={type}
             disabled={disabled}
             className="button">
             {description}
         </button>
     )
}

export default Button;