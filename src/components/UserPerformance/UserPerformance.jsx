import "./UserPerformance.scss";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from "recharts";

function UserPerformance({ data }) {
    const originalKinds = ["Cardio", "Energie", "Endurance", "Force", "Vitesse", "Intensité"];
    const kinds = ["Intensité", "Vitesse", "Force", "Endurance", "Energie", "Cardio"];

    const reorderData = (originalData, originalOrder, newOrder) => {
        const newData = newOrder.map((newKind) => {
            const originalIndex = originalOrder.indexOf(newKind);
            return { kind: newKind, value: data?.data ? data.data[originalIndex]?.value : data?.[originalIndex]?.value };
        });
        return newData;
    };

    const dataRadar = reorderData(data, originalKinds, kinds);

    return (
        <div className="userPerformance_container">
            <ResponsiveContainer width="100%" height={233}>
                <RadarChart outerRadius={"65%"} data={dataRadar}>
                    <PolarGrid radialLines={false} stroke="#fff" />
                    <PolarAngleAxis dataKey="kind" tickLine={false} axisLine={false} tickSize={10} stroke="#fff" fontSize={12} />
                    <Radar dataKey="value" fill="#FF0101" fillOpacity={0.6} legendType="none" />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default UserPerformance;
