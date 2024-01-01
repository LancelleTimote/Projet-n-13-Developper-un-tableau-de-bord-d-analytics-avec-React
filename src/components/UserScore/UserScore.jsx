import "./UserScore.scss";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import PropTypes from "prop-types";

function UserScore({ data, graphTitle }) {
    data = [
        { name: "Score", value: data },
        { name: "Rest", value: 100 - data },
    ];

    const colors = ["#ff0000", "#FFF"];

    return (
        <div className="userScore_container">
            <h2 className="userScore_container_title">{graphTitle}</h2>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie data={data} cx="50%" cy="50%" innerRadius={70} outerRadius={80} cornerRadius={50} fill="#8884d8" paddingAngle={0} dataKey="value" startAngle={90} endAngle={450}>
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
            <p className="userScore_container_text">
                <span className="userScore_container_text_number">{data[0].value}%</span> <br />
                de votre <br />
                objectif
            </p>
        </div>
    );
}

UserScore.propTypes = {
    data: PropTypes.number.isRequired,
    graphTitle: PropTypes.string.isRequired,
};

export default UserScore;
