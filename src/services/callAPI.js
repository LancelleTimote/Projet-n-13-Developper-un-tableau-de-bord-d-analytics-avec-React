import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000';

const callAPI = async (url, method, data = null) => {
    try {
        const response = await axios({
        method,
        url: `${API_BASE_URL}${url}`,
        data,
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getUserData = async (userId) => {
    return callAPI(`/user/${userId}`, 'GET');
};

export const getUserActivity = async (userId) => {
    return callAPI(`/user/${userId}/activity`, 'GET');
};

export const getUserAverageSession = async (userId) => {
    return callAPI(`/user/${userId}/average-sessions`, 'GET');
};

export const getUserPerformance = async (userId) => {
    return callAPI(`/user/${userId}/performance`, 'GET');
};
