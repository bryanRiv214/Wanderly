import { useEffect, useState } from "react";
import "../styles/ActivityCard.css";
import { Link } from "react-router-dom";

const ActivityCard = ({post}) => {
    const [activity, setActivity] = useState(post);
    const [date, setDate] = useState("")

    useEffect(() => {
        if (!post) {
            setActivity(post);
            
            let date = post.timestamp;
            setDate(date.toLocaleDateString());
        }
        
        else if (post && date) {
            const timestamp = new Date(post.timestamp);
            const formattedDate = timestamp.toLocaleString();
            setDate(formattedDate);
        }
    }, [post, date]);
    
    return (
        <div className="ActivityCard">
            {post? 
                <div className="activity-content">
                    <small className="activity-card-timestamp">{date}</small>
                    <h2 className="activity-card-title">{activity.title}</h2>

                    <img className="activity-card-img" alt={activity.location} src={activity.image}></img>

                    <p className="activity-card-location">📍 {activity.location}</p>

                    <p className="activity-card-weather">Weather: {activity.weather}</p>

                    <div className="activity-card-tags-container">
                        <h3>Tags: </h3>
                        <ul className="activity-card-tags-list">
                            {activity.tags.map(tag => <li key={tag}>#{tag}</li>)}
                        </ul>
                    </div>

                    <Link to={`/${post.post_id}`}><button className="open-post-btn">Open Post →</button></Link>
                </div>
            : ""}
        </div>
    )
}

export default ActivityCard;