import "./UserAverageSession.scss";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

function UserAverageSession({ data, graphTitle }) {
    return (
        <div>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <text x={40} y={35} fill="black" textAnchor="left" dominantBaseline="left" fontSize={15} style={{ fontWeight: 600 }}>
                        {graphTitle}
                    </text>
                    <Line
                        type="natural"
                        dataKey="sessionLength"
                        stroke="#FFF"
                        strokeWidth={1}
                        dot={false}
                        activeDot={{
                            fill: "#FFF",
                            r: 5,
                            strokeWidth: 10,
                            strokeOpacity: 0.4,
                        }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

export default UserAverageSession;
