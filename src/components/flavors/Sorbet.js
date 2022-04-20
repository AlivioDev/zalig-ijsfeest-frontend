import "./Flavors.css";
import React from "react";
import {useForm} from "react-hook-form";


function Sorbet() {

    const {register, formState: {errors}} = useForm();
    console.log(errors);

    return (

        <div className="flavor-container">
            <input
                className="flavor-checkbox"
                type="checkbox"
                placeholder="smaak"
                {...register
                ("smaak",
                    {
                        max: 4
                    })}
            />
            <label className="flavor-label">
                smaak
            </label>
        </div>

    );
}

export default Sorbet;