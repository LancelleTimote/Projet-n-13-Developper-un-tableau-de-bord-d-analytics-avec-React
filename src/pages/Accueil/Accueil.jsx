import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./Accueil.scss";
import { Link } from "react-router-dom";

function AccueilPage() {
    return (
        <div className="accueilPage">
            <Header />
            <div className="accueilPage_mid">
                <Footer />
                <div className="accueilPage_mid_text">
                    <span className="accueilPage_mid_text_welcome">Page d'accueil</span>
                    <p className="accueilPage_mid_text_user">Accéder à la page profil d'un utilisateur :</p>
                    <Link to={`/profil/user/12`}>Utilisateur Karl</Link>
                    <Link to={`/profil/user/18`}>Utilisateur Cecilia</Link>
                </div>
            </div>
        </div>
    );
}

export default AccueilPage;
