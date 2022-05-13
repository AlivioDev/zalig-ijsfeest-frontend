import "./ShoppingCart.css"
import Cart from "../../components/cart/Cart";
import {useParams} from "react-router-dom";

export default function ShoppingCart() {
    const {username} = useParams();



    return(
        <Cart/>
    )
}
