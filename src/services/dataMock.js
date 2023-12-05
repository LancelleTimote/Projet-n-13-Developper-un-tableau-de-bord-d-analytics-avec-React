import mockData from "../mock/mockData.json";
import { dayOfTheWeek } from "./constants";

export const getUserDataMock = (id) => {
    const user = mockData.USER_MAIN_DATA.find((user) => user.id === Number(id));
    return user && user.userInfos && user.userInfos.firstName ? user.userInfos.firstName : '';
};

export const getUserActivityDataMock = (id) => {
    const userActivity = mockData.USER_ACTIVITY.find((user) => user.userId === Number(id));
    return userActivity && userActivity.sessions ? userActivity.sessions : {};
};

export const getUserAverageSessionDataMock = (id) => {
    const userAverageSession = mockData.USER_AVERAGE_SESSIONS.find((data) => data.userId === Number(id));

    if (userAverageSession && userAverageSession.sessions) {
        let transformedData = userAverageSession.sessions.map((session) => ({
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
};