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
import UserNutrition from "../../components/UserNutrition/UserNutrition";
import iconCalories from "../../assets/icons/calories.svg";
import iconProteins from "../../assets/icons/proteins.svg";
import iconCarbohydrates from "../../assets/icons/carbohydrates.svg";
import iconLipids from "../../assets/icons/lipids.svg";

function Profil() {
    const [firstName, setFirstName] = useState("");
    const [userActivityData, setUserActivityData] = useState([]);
    const [userAverageSessionData, setUserAverageSessionData] = useState([]);
    const [userPerformanceData, setUserPerformanceData] = useState([]);
    const [userScoreData, setUserScoreData] = useState(0);
    const [nutritionData, setNutritionData] = useState({});
    const { id } = useParams();
    const useMockData = false;

    useEffect(() => {
        const fetchData = async () => {
            const userData = useMockData ? getUserDataMock(id) : await getUserDataAPI(id);
            setFirstName(userData.userInfos.firstName);
            setNutritionData(userData.keyData);
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
                            <UserActivity data={userActivityData} graphTitle="Activité quotidienne" />
                            <div className="profil_container_middle_content_graphics_squares">
                                <UserAverageSession data={userAverageSessionData} graphTitle="Durée moyenne des sessions" />
                                <UserPerformance data={userPerformanceData} />
                                <UserScore data={userScoreData} graphTitle="Score" />
                            </div>
                        </div>
                        <div className="profil_container_middle_content_graphics_right">
                            {Object.keys(nutritionData).length > 0 && (
                                <>
                                    <UserNutrition color="#fbeaea" image={iconCalories} descriptionImage="Logo des Calories" data={nutritionData.calorieCount} acronym="kCal" energy="Calories" />
                                    <UserNutrition color="#e9f4fb" image={iconProteins} descriptionImage="Logo des Proteines" data={nutritionData.proteinCount} acronym="g" energy="Proteines" />
                                    <UserNutrition color="#faf6e5" image={iconCarbohydrates} descriptionImage="Logo des Glucides" data={nutritionData.carbohydrateCount} acronym="g" energy="Glucides" />
                                    <UserNutrition color="#fbeaef" image={iconLipids} descriptionImage="Logo des Lipides" data={nutritionData.lipidCount} acronym="g" energy="Lipides" />
                                </>
                            )}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default Profil;
