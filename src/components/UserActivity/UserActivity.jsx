import React, { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { getUserActivity } from "../../services/callAPI";

function UserActivity() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const userId = 12;

        const fetchData = async () => {
            try {
                const userData = await getUserActivity(userId);
                if (userData && userData.sessions) {
                    const formattedData = userData.sessions.map((session) => ({
                        name: session.day,
                        calories: session.calories,
                    }));
                    setData(formattedData);
                }
            } catch (error) {
                console.error("Erreur lors de la récupération des données d'activité", error);
            }
        };

        fetchData();
    }, []);

    return (
        <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="calories" fill="#8884d8" />
            </BarChart>
        </ResponsiveContainer>
    );
}

export default UserActivity;
