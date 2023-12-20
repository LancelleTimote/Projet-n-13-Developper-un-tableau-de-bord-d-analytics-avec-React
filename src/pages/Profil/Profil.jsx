import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./Profil.scss";
import UserActivity from "../../components/UserActivity/UserActivity";
import UserAverageSession from "../../components/UserAverageSession/UserAverageSession";
import UserPerformance from "../../components/UserPerformance/UserPerformance";
import { getUserDataAPI, getUserActivityDataAPI, getUserAverageSessionDataAPI, getUserPerformanceDataAPI, getUserScoreDataAPI } from "../../services/dataApi";
import { getUserDataMock, getUserActivityDataMock, getUserAverageSessionDataMock, getUserPerformanceDataMock, getUserScoreDataMock } from "../../services/dataMock";
import UserScore from "../../components/UserScore/UserScore";

function Profil() {
    const [firstName, setFirstName] = useState("");
    const [userActivityData, setUserActivityData] = useState({});
    const [userAverageSessionData, setUserAverageSessionData] = useState([]);
    const [userPerformanceData, setUserPerformanceData] = useState([]);
    const [userScoreData, setUserScoreData] = useState(0);
    const { id } = useParams();
    const useMockData = true;
    const graphUserActivityTitle = "Activité quotidienne";
    const graphUserAverageSessionTitle = "Durée moyenne des sessions";
    const graphUserScoreTitle = "Score";

    useEffect(() => {
        const fetchData = async () => {
            setFirstName(useMockData ? getUserDataMock(id) : await getUserDataAPI(id));
            setUserActivityData(useMockData ? getUserActivityDataMock(id) : await getUserActivityDataAPI(id));
            setUserAverageSessionData(useMockData ? getUserAverageSessionDataMock(id) : await getUserAverageSessionDataAPI(id));
            setUserPerformanceData(useMockData ? getUserPerformanceDataMock(id) : await getUserPerformanceDataAPI(id));
            const scoreData = useMockData ? getUserScoreDataMock(id) : await getUserScoreDataAPI(id);
            setUserScoreData(scoreData);
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
                                <UserPerformance data={userPerformanceData} />
                                <UserScore data={userScoreData} graphTitle={graphUserScoreTitle} />
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
