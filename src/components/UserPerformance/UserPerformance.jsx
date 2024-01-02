import "./UserPerformance.scss";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from "recharts";
import PropTypes from "prop-types";

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

    const outerRadius = window.innerWidth <= 1070 ? 50 : 70;

    const chartProps = {
        data: dataRadar,
        outerRadius,
    };

    const tickSize = window.innerWidth <= 1070 ? 8 : 12;
    const fontSize = window.innerWidth <= 1070 ? 8 : 12;

    const angleAxisProps = {
        dataKey: "kind",
        tickLine: false,
        axisLine: false,
        tickSize,
        stroke: "#fff",
        fontSize,
    };

    return (
        <div className="userPerformance_container">
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart {...chartProps}>
                    <PolarGrid radialLines={false} stroke="#fff" />
                    <PolarAngleAxis {...angleAxisProps} />
                    <Radar dataKey="value" fill="#FF0101" fillOpacity={0.8} legendType="none" />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    );
}

UserPerformance.propTypes = {
    data: PropTypes.oneOfType([
        PropTypes.arrayOf(
            PropTypes.shape({
                value: PropTypes.number.isRequired,
                kind: PropTypes.number.isRequired,
            }),
        ),
        PropTypes.shape({
            data: PropTypes.arrayOf(
                PropTypes.shape({
                    value: PropTypes.number.isRequired,
                    kind: PropTypes.number.isRequired,
                }),
            ).isRequired,
        }),
    ]).isRequired,
};

export default UserPerformance;
