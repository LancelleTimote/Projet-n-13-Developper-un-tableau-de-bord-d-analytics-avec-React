// Profil.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./Profil.scss";
import UserActivity from "../../components/UserActivity/UserActivity";
import { getUserDataAPI, getUserActivityDataAPI } from "../../services/dataApi";
import { getUserDataMock, getUserActivityDataMock } from "../../services/dataMock";

function Profil() {
    const [firstName, setFirstName] = useState("");
    const [userActivityData, setUserActivityData] = useState({});
    const { id } = useParams();
    const useMockData = true;
    const graphUserActivityTitle = "Activité quotidienne";

    useEffect(() => {
        const fetchData = async () => {
            setFirstName(useMockData ? getUserDataMock(id) : await getUserDataAPI(id));
            setUserActivityData(useMockData ? getUserActivityDataMock(id) : await getUserActivityDataAPI(id));
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
                    <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
                    <UserActivity data={userActivityData} graphTitle={graphUserActivityTitle} />
                </div>
            </div>
        </div>
    );
}

export default Profil;
