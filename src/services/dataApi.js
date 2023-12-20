import { getUserData, getUserActivity, getUserAverageSession, getUserPerformance } from "./callApi";
import { dayOfTheWeek } from "./constants";

export const getUserDataAPI = async (id) => {
    try {
        const userData = await getUserData(id);
        return userData && userData.data && userData.data.userInfos ? userData.data.userInfos.firstName : '';
    } catch (error) {
        console.error("Erreur lors de la récupération des données de l'utilisateur", error);
        return '';
    }
};

export const getUserActivityDataAPI = async (id) => {
    try {
        const activityData = await getUserActivity(id);
        return activityData && activityData.data && activityData.data.sessions ? activityData.data.sessions : [];
    } catch (error) {
        console.error("Erreur lors de la récupération des données d'activité", error);
        return [];
    }
};

export const getUserAverageSessionDataAPI = async (id) => {
    try {
        const averageSessionData = await getUserAverageSession(id);

        if (averageSessionData && averageSessionData.data && averageSessionData.data.sessions) {
            let transformedData = averageSessionData.data.sessions.map((session) => ({
                ...session,
                day: dayOfTheWeek[session.day - 1],
            }));

            const firstDay = { ...transformedData[0], day: dayOfTheWeek[6] };
            const lastDay = { ...transformedData[transformedData.length - 1], day: dayOfTheWeek[0] };

            transformedData = [firstDay, ...transformedData, lastDay];

            return transformedData;
        } else {
            return [];
        }
    } catch (error) {
        console.error("Erreur lors de la récupération des données de sessions moyennes", error);
        return [];
    }
};

export const getUserPerformanceDataAPI = async (id) => {
    try {
        const performanceData = await getUserPerformance(id);
        return performanceData && performanceData.data ? performanceData.data : [];
    } catch (error) {
        console.error("Erreur lors de la récupération des données de performance", error);
        return [];
    }
};

export const getUserScoreDataAPI = async (id) => {
    try {
        const userData = await getUserData(id);
        return (userData && userData.data && userData.data.todayScore) ? userData.data.todayScore * 100 :
               (userData && userData.data && userData.data.score) ? userData.data.score * 100 : 0;
    } catch (error) {
        console.error("Erreur lors de la récupération des données du score de l'utilisateur", error);
        return 0;
    }
};
