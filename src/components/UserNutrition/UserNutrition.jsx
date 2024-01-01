import "./UserNutrition.scss";
import PropTypes from "prop-types";

function UserNutrition({ color, image, descriptionImage, data, acronym, energy }) {
    return (
        <div className="userNutrition_container">
            <div className="userNutrition_container_iconBox" style={{ backgroundColor: color }}>
                <img src={image} alt={descriptionImage} />
            </div>
            <div className="userNutrition_container_text">
                <span className="userNutrition_container_text_data">
                    {data}
                    {acronym}
                </span>
                <span className="userNutrition_container_text_energy">{energy}</span>
            </div>
        </div>
    );
}

UserNutrition.propTypes = {
    color: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    descriptionImage: PropTypes.string.isRequired,
    data: PropTypes.number.isRequired,
    acronym: PropTypes.string.isRequired,
    energy: PropTypes.string.isRequired,
};

export default UserNutrition;
