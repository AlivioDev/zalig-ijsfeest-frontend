import "./App.css";
import {Switch, Route} from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Admin from "./pages/admin/Admin";
import OrderConfirmation from "./pages/orderconfirmation/OrderConfirmation";
import Payment from "./pages/payment/Payment";
import Pickup from "./pages/pickup/Pickup";
import Products from "./pages/products/Products";
import Selection from "./pages/selection/Selection";
import ShoppingCart from "./pages/shoppingcart/ShoppingCart";
import Profile from "./pages/profile/Profile";
import SignUpSuccess from "./pages/signupsuccess/SignUpSuccess";

function App() {
    return (
    <div>
            <Header/>

                    <Switch>
                        <Route exact path="/">
                            <Home/>
                        </Route>
                        <Route path="/products">
                            <Products/>
                        </Route>
                        <Route path="/shoppingcart">
                            <ShoppingCart/>
                        </Route>
                        <Route path="/payment">
                            <Payment/>
                        </Route>
                        <Route path="/orderconfirmation">
                            <OrderConfirmation/>
                        </Route>
                        <Route path="/admin">
                            <Admin/>
                        </Route>
                        <Route path="/selection">
                            <Selection/>
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
