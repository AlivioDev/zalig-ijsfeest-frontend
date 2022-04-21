import "./Header.css";
import {useHistory} from "react-router-dom";
import Logo from "../logo/Logo";
import Button from "../button/Button";
import {useContext} from "react";
import {AuthContext} from "../../context/AuthContext";

function Header() {
    const history = useHistory();
    const {isAuth, logout} = useContext((AuthContext));

    return (
        <>
            <header className="header-outer-container">
                <div className="header-inner-container">
                    <nav className="header-navigation">
                        {isAuth &&
                            <>
                                <Button
                                    onClick={() => history.push("/")}
                                    type="button"
                                    description="Home"
                                />

                                <Button
                                    onClick={() => history.goBack()}
                                    type="button"
                                    description="Vorige pagina"
                                />

                                <Button
                                    onClick={() => history.push("/profile")}
                                    type="button"
                                    description="Mijn Profiel"
                                />

                                <Button
                                    onClick={logout}
                                    type="button"
                                    description="Uitloggen"
                                />
                            </>
                        }
                    </nav>
                    <div
                        className="header-logo">
                        <Logo/>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;