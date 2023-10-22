import "../styles/ActivityCard.css";

const ActivityCard = ({title, location, time, imageURL, tags, weather, type}) => {
    return (
        <div className="ActivityCard">
            <div className="activity-content">
                <small className="activity-card-timestamp">24 October 2023</small>
                <h2 className="activity-card-title">{title}</h2>

                <img className="activity-card-img" alt={location} src={imageURL}></img>

                <p className="activity-card-location">📍 {location}</p>

                <p className="activity-card-weather">Weather: {weather}</p>

                <div className="activity-card-tags-container">
                    <h3>Tags: </h3>
                    <ul className="activity-card-tags-list">
                        {tags.map(tag => <li>#{tag}</li>)}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ActivityCard;