import Error from "../../components/Error/Error";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./ErrorPage.scss";

function ErrorPage() {
    return (
        <div className="errorPage">
            <Header />
            <div className="errorPage_mid">
                <Footer />
                <Error />
            </div>
        </div>
    );
}

export default ErrorPage;
