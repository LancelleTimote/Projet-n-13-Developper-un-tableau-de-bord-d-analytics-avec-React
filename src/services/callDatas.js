import mockData from "../mock/mockData.json";
import { getUserData, getUserActivity } from "./callAPI";

export const getUserDataWrapper = async (id, useMockData) => {
    if (useMockData) {
        const user = mockData.USER_MAIN_DATA.find((user) => user.id === Number(id));
        return user && user.userInfos && user.userInfos.firstName ? user.userInfos.firstName : '';
    } else {
        try {
            const userData = await getUserData(id);
            return userData && userData.data && userData.data.userInfos
                ? userData.data.userInfos.firstName
                : '';
        } catch (error) {
            console.error("Erreur lors de la récupération des données de l'utilisateur", error);
            return '';
        }
    }
};

export const getUserActivityDataWrapper = async (id, useMockData) => {
    if (useMockData) {
        const userActivity = mockData.USER_ACTIVITY.find((user) => user.userId === Number(id));
        return userActivity && userActivity.sessions ? userActivity.sessions : {};
    } else {
        try {
            const activityData = await getUserActivity(id);
            return activityData && activityData.data && activityData.data.sessions
                ? activityData.data.sessions
                : [];
        } catch (error) {
            console.error("Erreur lors de la récupération des données d'activité", error);
            return [];
        }
    }
};
