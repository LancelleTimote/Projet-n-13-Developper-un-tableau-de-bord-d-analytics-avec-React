import { getUserData, getUserActivity, getUserAverageSession } from "./callApi";
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
            const transformedData = averageSessionData.data.sessions.map((session) => ({
                ...session,
                day: dayOfTheWeek[session.day - 1],
            }));

            return transformedData;
        } else {
            return [];
        }
    } catch (error) {
        console.error("Erreur lors de la récupération des données de sessions moyennes", error);
        return [];
    }
};

