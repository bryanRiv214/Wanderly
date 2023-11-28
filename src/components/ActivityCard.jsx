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
                <div className="activity-content-container">
                    <img className="activity-card-img" alt={activity.location} src={activity.image}></img>

                    <div className="activity-info-container">
                        <h2 className="activity-card-title">{activity.title}</h2>

                        <div className="activity-tags-container">
                            <p className="activity-card-activity-type">Activity Type</p>

                            <span className="activity-card-tag-break">|</span>

                            <p className="activity-card-weather">Weather</p>

                            <span className="activity-card-tag-break">|</span>

                            <p className="activity-card-price">Price</p>

                            <span className="activity-card-tag-break">|</span>

                            <p className="activity-card-duration">Duration</p>
                        </div>
                    </div>

                    <Link to={`/${post.post_id}`}><button className="open-post-btn">→</button></Link>
                </div>
            : ""}
        </div>
    )
}

export default ActivityCard;