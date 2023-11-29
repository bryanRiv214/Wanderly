import { useEffect, useState } from "react";
import "../styles/MyPostsCard.css";
import { Link } from "react-router-dom";

const MyPostsCard = ({post}) => {
    const [activity, setActivity] = useState(post);
    useEffect(() => {
        if (!post) {
            setActivity(post);
        }
    }, [post]);
    
    return (
        <div className='PostCard'>
            {post?
                <div className='Post-content-container'>
                    <img className='Post-card-img' alt='Post thumbnail' src='https://res.cloudinary.com/the-infatuation/image/upload/c_fill,w_828,ar_4:3,g_center,f_auto/cms/media/reviews/katzs-deli/banners/Theophilus-_252B-Katzs-019_0'></img>
                    <div className='Post-info-container'>
                        <h2 className='Post-card-title'>{activity.title}</h2>
                        <div className='Post-tags-container'>
                            <span className='Post-card-activity-type'>{activity.ActivityType.activity_type_name
}</span>
                            <span className='Post-card-tag-break'>|</span>
                            <span className='Post-card-weather'>{activity.Weather.weather_name
}</span>
                            <span className='Post-card-tag-break'>|</span>
                            <span className='Post-card-price'>${activity.price}</span>
                            <span className='Post-card-tag-break'>|</span>
                            <span className='Post-card-duration'>{activity.Duration.duration}</span>
                        </div>
                    </div>
                    <div className='Post-card-btns'>
                        <Link to={`/${post.post_id}`}>
                            <button className='Post-open-post-btn'>
                                <img className='arrow-right-image' src='/arrow-right.svg' alt='arrow to the right'></img>
                            </button>
                        </Link>
                        <button className='Post-card-likes-btn'>Likes ##</button>
                    </div>
                </div>
            : ''}
        </div>
    )
}

export default MyPostsCard;