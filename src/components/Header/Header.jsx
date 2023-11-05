import Logo from "../../assets/images/logo.svg";
import "./Header.scss";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="header">
            <div className="header_logo">
                <img className="header_logo_img" src={Logo} alt="Logo de la startup SportSee" />
                <span className="header_logo_txt">SportSee</span>
            </div>
            <nav className="header_nav">
                <ul className="header_nav_list">
                    <li>
                        <Link to={`/`}>Accueil</Link>
                    </li>
                    <li>
                        <Link to={`/profil/user/:id`}>Profil</Link>
                    </li>
                    <li>
                        <Link to={`/setting`}>Réglage</Link>
                    </li>
                    <li>
                        <Link to={`/community`}>Communauté</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
