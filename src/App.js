import "./App.css";
import {Switch, Route} from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Admin from "./pages/admin/Admin";
import OrderConfirmation from "./pages/orderConfirmation/OrderConfirmation";
import Payment from "./pages/payment/Payment";
import Pickup from "./pages/pickup/Pickup";
import Products from "./pages/products/Products";
import ProductOptions from "./pages/productOptions/ProductOptions";
import ShoppingCart from "./pages/shoppingCart/ShoppingCart";
import Profile from "./pages/profile/Profile";
import SignUpSuccess from "./pages/signupSuccess/SignUpSuccess";
import ProductOptions2 from "./pages/productOptions/ProductOptions2";


function App() {


    return (
        <div className="app">
            <Header/>

            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/products">
                    <Products/>
                </Route>
                <Route path="/shopping-cart">
                    <ShoppingCart/>
                </Route>
                <Route path="/payment">
                    <Payment/>
                </Route>
                <Route path="/order-confirmation">
                    <OrderConfirmation/>
                </Route>
                <Route path="/admin">
                    <Admin/>
                </Route>
                <Route path="/options/:productId">
                    <ProductOptions2/>
                </Route>
                <Route path="/pickup">
                    <Pickup/>
                </Route>
                <Route path="/profile">
                    <Profile/>
                </Route>
                <Route path="/signup-success">
                    <SignUpSuccess/>
                </Route>
            </Switch>
        </div>
    );
}

export default App;
