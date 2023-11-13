import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./Profil.scss";
import UserActivity from "../../components/UserActivity/UserActivity";
import { getUserDataWrapper, getUserActivityDataWrapper } from "../../services/callDatas";

function Profil() {
    const [firstName, setFirstName] = useState("");
    const [userActivityData, setUserActivityData] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const useMockData = false;

        const fetchData = async () => {
            setFirstName(await getUserDataWrapper(id, useMockData));
            setUserActivityData(await getUserActivityDataWrapper(id, useMockData));
        };

        fetchData();
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
