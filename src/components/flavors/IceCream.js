import "./Flavors.css";
import React, {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import axios from "axios";


function IceCream() {
    const [iceCreamFlavor, setIceCreamFlavor] = useState([]);

    useEffect(() => {
        async function getIceCreamFlavor() {
            try {
                const result = await
                    axios.get("http://localhost:8080/open/icecreamflavors");
                console.log(result.data);
                setIceCreamFlavor(result.data.name);
            } catch (error) {
                console.error(error);
            }
        }
        getIceCreamFlavor();
    }, []);

    const {register, formState: {errors}} = useForm();
    console.log(errors);

    return (
        <>
            <div className="flavor-container">
                {iceCreamFlavor &&
                    iceCreamFlavor.map((iceCream) => {
                            return (
                                <>
                                    <input
                                        className="flavor-checkbox"
                                        type="checkbox"
                                        // placeholder="smaak"
                                        {...register
                                        ("smaak")}
                                    />
                                    <label className="flavor-label">
                                        {iceCream.name};
                                    </label>
                                </>
                            );
                        }
                    )}
            </div>
        </>
    );
}

export default IceCream;