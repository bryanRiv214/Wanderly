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
                            <span className="activity-card-activity-type">Activity Type</span>

                            <span className="activity-card-tag-break">|</span>

                            <span className="activity-card-weather">Weather</span>

                            <span className="activity-card-tag-break">|</span>

                            <span className="activity-card-price">Price</span>

                            <span className="activity-card-tag-break">|</span>

                            <span className="activity-card-duration">Duration</span>
                        </div>
                    </div>

                    <div className="activity-card-btns">
                        <Link to={`/${post.post_id}`}>
                            <button className="open-post-btn">
                                <img className="arrow-right-image" src="/arrow-right.svg" alt="arrow to the right"></img>
                            </button>
                        </Link>

                        <button className="activity-card-likes-btn">Likes ##</button>
                    </div>
                </div>
            : ""}
        </div>
    )
}

export default ActivityCard;