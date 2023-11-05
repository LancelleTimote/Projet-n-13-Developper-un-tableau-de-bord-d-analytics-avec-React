import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Importez useParams
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { getUserData } from "../../services/callAPI";
import "./Profil.scss";
import UserActivity from "../../components/UserActivity/UserActivity";
import mockData from "../../mock/mockData.json";

function Profil() {
    const [firstName, setFirstName] = useState("");
    const { id } = useParams();

    useEffect(() => {
        const useMockData = true;

        const fetchUserData = async () => {
            if (useMockData) {
                const user = mockData.USER_MAIN_DATA.find((user) => user.id === Number(id));
                if (user && user.userInfos && user.userInfos.firstName) {
                    setFirstName(user.userInfos.firstName);
                }
            } else {
                try {
                    const userData = await getUserData(id);
                    if (userData && userData.data && userData.data.userInfos) {
                        setFirstName(userData.data.userInfos.firstName);
                    }
                } catch (error) {
                    console.error("Erreur lors de la récupération des données de l'utilisateur", error);
                }
            }
        };

        fetchUserData();
    }, [id]);

    return (
        <div>
            <Header />
            <div>
                <Footer />
                <div>
                    <h1>Bonjour {firstName}</h1>
                    <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
                    <UserActivity />
                </div>
            </div>
        </div>
    );
}

export default Profil;
