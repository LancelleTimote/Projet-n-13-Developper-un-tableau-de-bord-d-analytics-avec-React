import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./Home.scss";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="home">
            <Header />
            <div className="home_mid">
                <Footer />
                <div className="home_mid_text">
                    <span className="home_mid_text_welcome">Page d'accueil</span>
                    <p className="home_mid_text_user">Accéder à la page profil d'un utilisateur :</p>
                    <Link to={`/profil/user/12`}>Utilisateur Karl</Link>
                    <Link to={`/profil/user/18`}>Utilisateur Cecilia</Link>
                </div>
            </div>
        </div>
    );
}

export default Home;
