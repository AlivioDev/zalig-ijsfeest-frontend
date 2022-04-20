import Icon from "../../assets/549-ice-cream-scoops-flat.gif";
import "./Logo.css"

function preLoader() {
    return (
        <div className="preloader">
            <img src={Icon} className="preloader" alt="preloader" width={75} height={75}/>
            <p>Loading...</p>
        </div>
    )
}

export default preLoader;