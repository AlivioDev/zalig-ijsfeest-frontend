import "./App.css";
import {Switch, Route} from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Admin from "./pages/admin/Admin";
import OrderConfirmation from "./pages/orderConfirmation/OrderConfirmation";
import Products from "./pages/products/Products";
import Profile from "./pages/profile/Profile";
import SignUpSuccess from "./pages/signupSuccess/SignUpSuccess";
import ProductOptions from "./pages/productOptions/ProductOptions";
import ShoppingCart from "./pages/shoppingCart/ShoppingCart";


function App() {


    return (
        <div className="app">
            <Header/>

            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/signup-success">
                    <SignUpSuccess/>
                </Route>
                <Route path="/profile/:username">
                    <Profile/>
                </Route>
                <Route path="/products/:username">
                    <Products/>
                </Route>
                <Route path="/options/:productId/:username">
                    <ProductOptions/>
                </Route>
                <Route path="/shopping-cart/:username">
                    <ShoppingCart/>
                </Route>
                <Route path="/order-confirmation/:username">
                    <OrderConfirmation/>
                </Route>
                <Route path="/admin">
                    <Admin/>
                </Route>
            </Switch>
        </div>
    );
}

export default App;
