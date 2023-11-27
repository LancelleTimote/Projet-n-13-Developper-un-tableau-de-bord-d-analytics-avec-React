import mockData from "../mock/mockData.json";

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
    return userAverageSession && userAverageSession.sessions ? userAverageSession.sessions : [];
};