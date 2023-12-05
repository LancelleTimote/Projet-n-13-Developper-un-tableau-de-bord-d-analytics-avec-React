// Profil.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./Profil.scss";
import UserActivity from "../../components/UserActivity/UserActivity";
import { getUserDataAPI, getUserActivityDataAPI, getUserAverageSessionDataAPI } from "../../services/dataApi";
import { getUserDataMock, getUserActivityDataMock, getUserAverageSessionDataMock } from "../../services/dataMock";
import UserAverageSession from "../../components/UserAverageSession/UserAverageSession";
import UserPerformance from "../../components/UserPerformance/UserPerformance";

function Profil() {
    const [firstName, setFirstName] = useState("");
    const [userActivityData, setUserActivityData] = useState({});
    const [userAverageSessionData, setUserAverageSessionData] = useState([]);
    const { id } = useParams();
    const useMockData = false;
    const graphUserActivityTitle = "Activité quotidienne";
    const graphUserAverageSessionTitle = "Durée moyenne des sessions";

    useEffect(() => {
        const fetchData = async () => {
            setFirstName(useMockData ? getUserDataMock(id) : await getUserDataAPI(id));
            setUserActivityData(useMockData ? getUserActivityDataMock(id) : await getUserActivityDataAPI(id));
            setUserAverageSessionData(useMockData ? getUserAverageSessionDataMock(id) : await getUserAverageSessionDataAPI(id));
        };

        fetchData();
    }, [id, useMockData]);

    return (
        <div className="profil_container">
            <Header />
            <div className="profil_container_middle">
                <Footer />
                <div className="profil_container_middle_content">
                    <h1 className="profil_container_middle_content_greetings">
                        Bonjour <span className="profil_container_middle_content_greetings_name">{firstName}</span>
                    </h1>
                    <p className="profil_container_middle_content_cheer">Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
                    <section className="profil_container_middle_content_graphics">
                        <div>
                            <UserActivity data={userActivityData} graphTitle={graphUserActivityTitle} />
                            <div className="profil_container_middle_content_graphics_squares">
                                <UserAverageSession data={userAverageSessionData} graphTitle={graphUserAverageSessionTitle} />
                                <UserPerformance />
                            </div>
                        </div>
                        <div></div>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default Profil;
