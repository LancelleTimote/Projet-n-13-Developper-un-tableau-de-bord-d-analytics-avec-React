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
    const useMockData = false;

    useEffect(() => {
        const fetchData = async () => {
            setFirstName(useMockData ? getUserDataMock(id) : await getUserDataAPI(id));
            setUserActivityData(useMockData ? getUserActivityDataMock(id) : await getUserActivityDataAPI(id));
        };

        fetchData();
    }, [id, useMockData]);

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
