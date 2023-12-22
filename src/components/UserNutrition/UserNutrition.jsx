import "./UserNutrition.scss";

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

export default UserNutrition;
