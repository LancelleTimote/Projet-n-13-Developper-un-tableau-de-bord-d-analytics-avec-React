import "./UserScore.scss";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import PropTypes from "prop-types";

function UserScore({ data, graphTitle }) {
    data = [
        { name: "Score", value: data },
        { name: "Rest", value: 100 - data },
    ];

    const colors = ["#ff0000", "#FFF"];

    const innerRadius = window.innerWidth <= 1070 ? 50 : 70;
    const outerRadius = window.innerWidth <= 1070 ? 60 : 80;

    const chartProps = {
        data: data,
        cx: "50%",
        cy: "50%",
        innerRadius,
        outerRadius,
        cornerRadius: 50,
        fill: "#8884d8",
        paddingAngle: 0,
        dataKey: "value",
        startAngle: 90,
        endAngle: 450,
    };

    return (
        <div className="userScore_container">
            <h2 className="userScore_container_title">{graphTitle}</h2>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie {...chartProps}>
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
