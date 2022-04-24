import "./Flavors.css";
import React, {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import axios from "axios";


function IceCream() {
    const [iceCreamFlavor, setIceCreamFlavor] = useState("");
    const {handleSubmit, register} = useForm({
        mode: "onChange"
    });

    function onFormSubmit(data) {
        console.log(data);
    }

    useEffect(() => {
        async function getIceCreamFlavor() {
            try {
                const result = await
                    axios.get("http://localhost:8080/open/icecreamflavors");
                setIceCreamFlavor(result.data);
            } catch (error) {
                console.error(error);
            }
        }

        getIceCreamFlavor();
    }, []);


    return (
        <>
            {iceCreamFlavor &&
                iceCreamFlavor.map((iceCream) => {
                    return (
                        <div className="flavor-container" key={iceCream.name}>
                            <input
                                onSubmit={handleSubmit(onFormSubmit)}
                                className="flavor-checkbox"
                                type="checkbox"
                                {...register(
                                    "flavors",
                                    {
                                        value: iceCream.name
                                    })}
                            />
                            <label className="flavor-label">
                                {iceCream.name}
                            </label>
                        </div>
                    );
                })
            }
        </>
    );
}

export default IceCream;

