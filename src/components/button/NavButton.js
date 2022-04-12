import "./Button.css";
import React from "react";

function NavButton({description}) {
     return(
         <button
             type="button"
             className="button">
             {description}
         </button>
     )
}

export default NavButton;