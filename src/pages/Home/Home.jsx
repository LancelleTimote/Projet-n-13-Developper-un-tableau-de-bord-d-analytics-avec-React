import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { getUserData } from "../../services/callAPI";
import "./Home.scss";
import UserActivity from "../../components/UserActivity/UserActivity";
import mockData from "../../mock/mockData.json";

function Home() {
    const [firstName, setFirstName] = useState("");

    useEffect(() => {
        const userId = 12;
        const useMockData = true;

        const fetchUserData = async () => {
            if (useMockData) {
                const user = mockData.USER_MAIN_DATA.find((user) => user.id === userId);
                if (user && user.userInfos && user.userInfos.firstName) {
                    setFirstName(user.userInfos.firstName);
                }
            } else {
                try {
                    const userData = await getUserData(userId);
                    if (userData && userData.data && userData.data.userInfos) {
                        setFirstName(userData.data.userInfos.firstName);
                    }
                } catch (error) {
                    console.error("Erreur lors de la récupération des données de l'utilisateur", error);
                }
            }
        };

        fetchUserData();
    }, []);

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

export default Home;
