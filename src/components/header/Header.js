import "./Header.css";
import {useHistory} from "react-router-dom";
import Logo from "../logo/Logo";
import Button from "../button/Button";
import {useContext} from "react";
import {AuthContext} from "../../context/AuthContext";

function Header() {
    const history = useHistory();
    const {isAuth, user, logout} = useContext((AuthContext));

    return (
        <>
            <header className="header-outer-container">
                <div className="header-inner-container">
                    <nav className="header-navigation">
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
                        </>
                        {isAuth &&
                            <>
                                <Button
                                    onClick={() => history.push(`/products/${user.username}`)}
                                    type="button"
                                    description="IJstaarten"
                                />
                                <Button
                                    onClick={() => history.push(`/profile/${user.username}`)}
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