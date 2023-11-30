import "./UserAverageSession.scss";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className="lineChart_toolTip">
                <p>{`${payload[0].value} min`}</p>
            </div>
        );
    }
    return null;
};

function UserAverageSession({ data, graphTitle }) {
    return (
        <div className="userAverageSession_container">
            <h2 className="userAverageSession_container_title">{graphTitle}</h2>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    data={data}
                    margin={{
                        top: 30,
                        right: 0,
                        left: 0,
                        bottom: 50,
                    }}
                >
                    <XAxis dataKey="day" axisLine={false} tickLine={false} tickMargin={40} tick={{ fill: "#ff8181", fontSize: 12 }} padding={{ left: 20, right: 20 }} />
                    <YAxis axisLine={false} tickLine={false} type="number" domain={["dataMin", "dataMax + 30"]} hide="true" />
                    <Tooltip content={<CustomTooltip />} />
                    <Line type="natural" dataKey="sessionLength" stroke="#ff8181" strokeWidth={2} dot={false} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

export default UserAverageSession;
