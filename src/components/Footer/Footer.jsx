import "./Footer.scss";
import iconMeditation from "../../assets/icons/meditation.svg";
import iconSwimming from "../../assets/icons/swimming.svg";
import iconRidingBike from "../../assets/icons/ridingBike.svg";
import iconBodybuilding from "../../assets/icons/bodybuilding.svg";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="footer">
            <nav className="footer_nav">
                <Link to={`/meditation`}>
                    <img src={iconMeditation} alt="Icône de méditation" />
                </Link>
                <Link to={`/swimming`}>
                    <img src={iconSwimming} alt="Icône de natation" />
                </Link>
                <Link to={`/ridingBike`}>
                    <img src={iconRidingBike} alt="Icône de vélo" />
                </Link>
                <Link to={`/bodybuilding`}>
                    <img src={iconBodybuilding} alt="Icône de musculation" />
                </Link>
            </nav>
            <span className="footer_copyright">Copiryght, SportSee 2020</span>
        </footer>
    );
}

export default Footer;
