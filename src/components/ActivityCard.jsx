import "../styles/ActivityCard.css";

const ActivityCard = (title, location, text, imageURL, tags, weather, type) => {
    return (
        <td className="ActivityCard">
            <div className="activity-content">
                <small className="activity-card-timestamp">24 October 2023</small>
                <h2 className="activity-card-title">Activity Title</h2>

                <img className="activity-card-img" alt="" src="https://media.cntraveler.com/photos/611fc78d9282cc5de31e9d87/16:9/w_2240,c_limit/Central%20Park,%20Manhattan,%20New%20York_GettyImages-528180834.jpg"></img>

                <p className="activity-card-location">📍 Location</p>

                <div className="activity-card-tags-container">
                    <h3>Tags: </h3>
                    <ul className="activity-card-tags-list">
                        <li>#outdoor</li>
                        <li>#walking</li>
                        <li>#nature</li>
                    </ul>
                </div>
            </div>
        </td>
    )
}

export default ActivityCard;