import Logo from "../../assets/images/logo.svg";
import "./Header.scss";

function Header() {
    return (
        <header className="header">
            <img className="header_logo" src={Logo} alt="Logo de la startup SportSee" />
        </header>
    );
}

export default Header;
