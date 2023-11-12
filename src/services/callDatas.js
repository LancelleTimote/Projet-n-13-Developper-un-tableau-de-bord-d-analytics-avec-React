const fetchUserDataMock = (id) => {
       const user = mockData.USER_MAIN_DATA.find((user) => user.id === Number(id));
        return user;
   
};

const fetchUserActivityData = async (useMockData) => {
    if (useMockData) {
        const userActivity = mockData.USER_ACTIVITY.find((user) => user.userId === Number(id));
        if (userActivity && userActivity.sessions) {
            setUserActivityData(userActivity.sessions);
            console.log(userActivity.sessions);
        }
    } else {
        try {
            const activityData = await getUserActivity(id);
            if (activityData && activityData.sessions) {
                setUserActivityData(activityData.sessions);
            }
        } catch (error) {
            console.error("Erreur lors de la récupération des données d'activité", error);
        }
    }
};