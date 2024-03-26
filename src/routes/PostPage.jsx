import React, { Component, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import supabase from "../config/supabaseClient";

const PostPage = () => {
    const [postDetails, setDetails] = useState(null);
    const params = useParams();

    useEffect(() => {
        const getPostInfo = async () => {
            console.log(parseInt(params.id)); //
            const {data} = await supabase
            .from("Posts")
            .select(`
            post_id, 
            user_id, 
            title, 
            description, 
            created_at, 
            Cities (city_id, city_name), 
            Weather (weather_id, weather_name), 
            ActivityType (activity_type_id, activity_type_name), 
            Duration (duration_id, duration), 
            price, 
            likes
            `)
            .eq('post_id', 22);

            console.log(data); //

            setDetails({
                "title": data[0].title, 
                "description" : data[0].description, 
                "city": data[0].Cities.city_name, 
                "weather": data[0].Weather.weather_name,
                "activityType": data[0].ActivityType.activity_type_name,
                "duration": data[0].Duration.duration
            });
        };
        getPostInfo();
    }, [params])
    
    console.log(postDetails)

    return(
        <div className="complete-activity-card">
            <div className="activity-info-container">
                {/* <h2 className="activity-card-title">{postDetails.title}</h2> */}
            </div>
            <div className="activity-content-container">
                <img className="activity-card-img" alt="Activity thumbnail" src="https://res.cloudinary.com/the-infatuation/image/upload/c_fill,w_828,ar_4:3,g_center,f_auto/cms/media/reviews/katzs-deli/banners/Theophilus-_252B-Katzs-019_0"></img>
            </div>
        </div>
    )
}

export default PostPage;