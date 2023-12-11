import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import "./UserActivity.scss";
import { format } from "date-fns";

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
    return (
        <div className="userActivity_container">
            <h2 className="userActivity_container_title">{graphTitle}</h2>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    data={data}
                    margin={{
                        top: 30,
                        right: 25,
                        left: 40,
                        bottom: 30,
                    }}
                    barSize={8}
                    barGap={10}
                >
                    <CartesianGrid strokeDasharray="2" vertical={false} />
                    <XAxis dataKey="day" tickLine={false} axisLine={true} fontSize={14} stroke="#9B9EAC" tickMargin={15} tickFormatter={(tick) => format(new Date(tick), "d")} />
                    <YAxis yAxisId="kilogram" orientation="right" tickLine={false} axisLine={false} fontSize={14} stroke="#9B9EAC" tickMargin={25} domain={["dataMin -8", "dataMax +15"]} />
                    <YAxis yAxisId="calories" hide domain={["dataMin -160", "dataMax +50"]} />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend
                        verticalAlign="top"
                        align="right"
                        iconType="circle"
                        iconSize={8}
                        height={75}
                        fontSize={14}
                        wrapperStyle={{
                            top: 25,
                            right: 0,
                            fontSize: "14px",
                        }}
                        formatter={(value) => <span style={{ color: "#74798C", marginLeft: "10px", marginRight: "30px" }}>{value}</span>}
                    />
                    {/* <text x={40} y={35} fill="black" textAnchor="left" dominantBaseline="left" fontSize={15} style={{ fontWeight: 600 }}>
                        {graphTitle}
                    </text> */}
                    <Bar dataKey="kilogram" fill="#000000" name="Poids (kg)" radius={[50, 50, 0, 0]} yAxisId="kilogram" />
                    <Bar dataKey="calories" fill="#ff0101" name="Calories brûlées (kCal)" radius={[50, 50, 0, 0]} yAxisId="calories" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default UserActivity;
