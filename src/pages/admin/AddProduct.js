import "./AddProduct.css";
import React, {useState} from "react";
import axios from "axios";
import {useForm} from "react-hook-form";
import PreLoader from "../../components/preloader/PreLoader";
import Button from "../../components/button/Button";
import FileUpload from "../../components/fileUpload/FileUpload";

function AddProduct() {
    const [loading, toggleLoading] = useState(false);
    const {register, handleSubmit} = useForm();

    async function addProduct(data) {
        toggleLoading(true);
        try {
            const response = await axios.post("http://localhost:8080/products",
                {
                    productName: data.productName,
                    numberOfPersonsOne: data.numberOfPersonsOne,
                    numberOfPersonsTwo: data.numberOfPersonsTwo,
                    numberOfPersonsThree: data.numberOfPersonsThree,
                    perPerson: data.perPerson,
                    priceOne: data.priceOne,
                    priceTwo: data.priceTwo,
                    priceThree: data.priceThree,
                });
            console.log(response);
        } catch (error) {
            console.error(error);
        }
        toggleLoading(false);
    }


    return (
        <div className="add-product-outer-container">
            {loading && <PreLoader/>}

            <form onSubmit={handleSubmit(addProduct)}>
                <div className="add-product-inner-container">
                    <input
                        type="text"
                        placeholder="product naam"
                        {...register(
                            "productName", {
                                required: true,
                                maxLength: 80
                            })}
                    />
                    <input
                        type="text"
                        placeholder="aantal personen - optie 1"
                        {...register(
                            "numberOfPersonsOne",
                            {
                                required: true,
                                maxLength: 100
                            })}
                    />
                    <input
                        type="number"
                        placeholder="prijs - optie 1"
                        {...register(
                            "priceOne",
                            {
                                required: true
                            })}
                    />
                    <input
                        type="text"
                        placeholder="aantal personen - optie 2"
                        {...register(
                            "numberOfPersonsTwo"
                        )}
                    />
                    <input
                        type="number"
                        placeholder="prijs - optie 2"
                        {...register(
                            "priceTwo"
                        )}
                    />
                    <input
                        type="text"
                        placeholder="aantal personen - optie 3"
                        {...register(
                            "numberOfPersonsThree"
                        )}
                    />
                    <input
                        type="number"
                        placeholder="prijs - optie 3"
                        {...register(
                            "priceTwo"
                        )}
                    />
                </div>

                <FileUpload/>

                <div className="add-product-button">
                    <Button
                        type="submit"
                        description="maak product aan"
                    />
                </div>
            </form>
        </div>
    );
}


export default AddProduct;