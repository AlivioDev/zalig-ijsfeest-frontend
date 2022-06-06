import logo from "../../assets/Logo.jpg";
import "./Logo.css";

function Logo() {
    return (
        <div className="header-logo">
            <img src={logo} className="logo" alt="logo" width={75} height={75}/>
        </div>
    );
}

export default Logo;