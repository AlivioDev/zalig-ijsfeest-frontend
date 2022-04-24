import "./Flavors.css";
import React, {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import axios from "axios";


function Sorbet() {
    const [sorbetFlavor, setSorbetFlavor] = useState([]);

    const {register} = useForm();

    useEffect(() => {
        async function getSorbetFlavor() {
            try {
                const result = await
                    axios.get("http://localhost:8080/open/sorbetflavors");
                console.log(result.data);
                setSorbetFlavor(result.data);
            } catch (error) {
                console.error(error);
            }
        }
        getSorbetFlavor();
    }, []);


    return (
        <>
            {sorbetFlavor &&
                sorbetFlavor.map((sorbet) => {
                    return (
                        <div className="flavor-container" key={sorbet.name}>
                            <input
                                className="flavor-checkbox"
                                type="checkbox"
                                {...register
                                ("smaak")}
                            />
                            <label className="flavor-label">
                                {sorbet.name}
                            </label>
                        </div>
                    );
                })
            }
        </>
    );
}

export default Sorbet;