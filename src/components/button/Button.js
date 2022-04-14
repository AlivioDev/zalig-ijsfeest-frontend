import "./Button.css";
import React from "react";

function Button({description}) {
     return(
         <button
             className="button">
             {description}
         </button>
     )
}

export default Button;