import "./Button.css";
import React from "react";

function Button({description, onClick, type}) {
     return(
         <button
             onClick={onClick}
             type={type}
             className="button">
             {description}
         </button>
     )
}

export default Button;