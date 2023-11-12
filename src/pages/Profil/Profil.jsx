import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { getUserData, getUserActivity } from "../../services/callAPI";
import "./Profil.scss";
import UserActivity from "../../components/UserActivity/UserActivity";
import mockData from "../../mock/mockData.json";

function Profil() {
    const [firstName, setFirstName] = useState("");
    const [userActivityData, setUserActivityData] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const useMockData = true;

        const fetchUserData = async () => {
            if (useMockData) {
                const user = mockData.USER_MAIN_DATA.find((user) => user.id === Number(id));
                if (user && user.userInfos && user.userInfos.firstName) {
                    setFirstName(user.userInfos.firstName);
                    console.log(user.userInfos.firstName);
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

        // setFirstName( useMockData ? await getUserDataMock(id) : await getUserData(id));
        // setUserActivityData( useMockData ? await fetchUserActivityDataMock(id) : await fetchUserActivityData(id));

        const fetchUserActivityData = async () => {
            if (useMockData) {
                const userActivity = mockData.USER_ACTIVITY.find((user) => user.userId === Number(id));
                if (userActivity && userActivity.sessions) {
                    setUserActivityData(userActivity.sessions);
                    console.log(userActivity.sessions);
                }
            } else {
                try {
                    const activityData = await getUserActivity(id);
                    if (activityData && activityData.sessions) {
                        setUserActivityData(activityData.sessions);
                    }
                } catch (error) {
                    console.error("Erreur lors de la récupération des données d'activité", error);
                }
            }
        };

        fetchUserData();
        fetchUserActivityData();
    }, [id]);

    return (
        <div>
            <Header />
            <div>
                <Footer />
                <div>
                    <h1>Bonjour {firstName}</h1>
                    <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
                    <UserActivity data={userActivityData} />
                </div>
            </div>
        </div>
    );
}

export default Profil;
