import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./Home.scss";
import { Link } from "react-router-dom";

function HomePage() {
    return (
        <div className="homePage">
            <Header />
            <div className="homePage_mid">
                <Footer />
                <div className="homePage_mid_text">
                    <span className="homePage_mid_text_welcome">Page d'accueil</span>
                    <p className="homePage_mid_text_user">Accéder à la page profil d'un utilisateur :</p>
                    <Link to={`/profil/user/12`}>Utilisateur Karl</Link>
                    <Link to={`/profil/user/18`}>Utilisateur Cecilia</Link>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
