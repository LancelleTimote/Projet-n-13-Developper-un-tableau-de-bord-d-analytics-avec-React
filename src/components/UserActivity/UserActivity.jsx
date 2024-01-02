import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import "./UserActivity.scss";
import { format } from "date-fns";
import PropTypes from "prop-types";

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className="barChart_toolTip">
                <p className="barChart_toolTip_kg">{`${payload[0].value}kg`}</p>
                <p>{`${payload[1].value}Kcal`}</p>
            </div>
        );
    }
    return null;
};

function UserActivity({ data, graphTitle }) {
    const barSize = window.innerWidth <= 1070 ? 5 : 8;
    const barGap = window.innerWidth <= 1070 ? 6 : 10;

    const chartProps = {
        data: data,
        margin: { top: 30, right: 25, left: 40, bottom: 30 },
        barSize,
        barGap,
    };

    const wrapperStyle = window.innerWidth <= 1070 ? { top: 25, right: 0, fontSize: "10px" } : { top: 25, right: 0, fontSize: "14px" };
    const height = window.innerWidth <= 1070 ? 55 : 75;

    const legend = {
        verticalAlign: "top",
        align: "right",
        iconType: "circle",
        iconSize: 8,
        height,
        fontSize: 14,
        wrapperStyle,
    };

    return (
        <div className="userActivity_container">
            <h2 className="userActivity_container_title">{graphTitle}</h2>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart {...chartProps}>
                    <CartesianGrid strokeDasharray="2" vertical={false} />
                    <XAxis dataKey="day" tickLine={false} axisLine={true} fontSize={14} stroke="#9B9EAC" tickMargin={15} tickFormatter={(tick) => format(new Date(tick), "d")} />
                    <YAxis yAxisId="kilogram" orientation="right" tickLine={false} axisLine={false} fontSize={14} stroke="#9B9EAC" tickMargin={25} domain={["dataMin -8", "dataMax +15"]} />
                    <YAxis yAxisId="calories" hide domain={["dataMin -160", "dataMax +50"]} />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend {...legend} formatter={(value) => <span style={{ color: "#74798C", marginLeft: "10px", marginRight: "30px" }}>{value}</span>} />
                    <Bar dataKey="kilogram" fill="#000000" name="Poids (kg)" radius={[50, 50, 0, 0]} yAxisId="kilogram" />
                    <Bar dataKey="calories" fill="#ff0101" name="Calories brûlées (kCal)" radius={[50, 50, 0, 0]} yAxisId="calories" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

UserActivity.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            day: PropTypes.string.isRequired,
            kilogram: PropTypes.number.isRequired,
            calories: PropTypes.number.isRequired,
        }),
    ).isRequired,
    graphTitle: PropTypes.string.isRequired,
};

export default UserActivity;
