import "./Header.css";
import {Route, useHistory} from "react-router-dom";
import Logo from "../logo/Logo";
import Button from "../button/Button";
import Home from "../../pages/home/Home";
import Profile from "../../pages/profile/Profile";

function Header() {
    const history = useHistory();

    return (
        <>
            <header className="header-outer-container">


                <div className="header-inner-container">


                    <nav>
                        <ul className="header-navigation">
                            <li>
                                <Button
                                    type="button"
                                    onClick={Home}
                                    description="Home"
                                    />
                            </li>
                            <li>
                                <Button
                                    type="button"
                                    onClick={() => history.goBack()}
                                    description="Vorige pagina"
                                />
                            </li>
                            <li>
                                <Button
                                    type="button"
                                    onClick={Profile}
                                    description="Mijn Profiel"
                                />
                            </li>
                            <li>
                                <Button
                                    type="button"
                                    // onClick={logout}
                                    description="Uitloggen"
                                />
                            </li>
                        </ul>
                    </nav>
                    <div
                        className="header-logo">
                        <Route path="/" component={Logo}/>
                    </div>
                </div>
            </header>

        </>
    );
}

export default Header;