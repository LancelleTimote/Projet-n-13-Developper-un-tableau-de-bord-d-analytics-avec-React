import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

function UserActivity({ data }) {
    return (
        <ResponsiveContainer width="100%" height={300}>
            <BarChart
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                barSize={10}
                barGap={10}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis orientation="right" tickLine={false} />
                <Tooltip />
                <Legend verticalAlign="top" align="right" iconType="circle" height={76} />
                <Bar dataKey="kilogram" fill="black" name="Poids (kg)" radius={[10, 10, 0, 0]} />
                <Bar dataKey="calories" fill="red" name="Calories brûlées (kCal)" radius={[10, 10, 0, 0]} />
            </BarChart>
        </ResponsiveContainer>
    );
}

export default UserActivity;
