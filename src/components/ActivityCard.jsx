import { useEffect, useState } from "react";
import "../styles/ActivityCard.css";
import { Link } from "react-router-dom";

const ActivityCard = ({post}) => {
    const [activity, setActivity] = useState(post);
    useEffect(() => {
        if (!post) {
            setActivity(post);
        }
    }, []);
    
    return (
        <div className="ActivityCard">
            {post? 
                <div className="activity-content-container">
                    <img className="activity-card-img" alt="Activity thumbnail" src="https://res.cloudinary.com/the-infatuation/image/upload/c_fill,w_828,ar_4:3,g_center,f_auto/cms/media/reviews/katzs-deli/banners/Theophilus-_252B-Katzs-019_0"></img>

                    <div className="activity-info-container">
                        <h2 className="activity-card-title">{activity.title}</h2>

                        <div className="activity-tags-container">
                            <span className="activity-card-activity-type">{activity.activity_type_id
}</span>

                            <span className="activity-card-tag-break">|</span>

                            <span className="activity-card-weather">{activity.weather_id
}</span>

                            <span className="activity-card-tag-break">|</span>

                            <span className="activity-card-price">${activity.price}</span>

                            <span className="activity-card-tag-break">|</span>

                            <span className="activity-card-duration">{activity.duration_id}</span>
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