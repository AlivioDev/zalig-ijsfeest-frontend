import iceCreamLoader from "../../assets/549-ice-cream-scoops-flat.gif";


function preLoader() {
    return (
        <div
            className="preloader">
            <img src={iceCreamLoader} alt="Pagina wordt geladen"/>
        </div>
    );
}

export default preLoader;