
import "../styles/MyPostsCard.css";
import supabase from "../config/supabaseClient.js";
import { useState, useEffect } from "react";
import MyPostsCard from "./MyPostsCard.jsx"

const MyPostsTable = () => {
    // need ti set for errors 
    const [fetchError, setFetchError] = useState(null);
    // Get ALL activities for now - CHANGE BASED ON SEARCH
    const [posts, setPosts] = useState([])
    //const userId = 'f47cf9b1-0f92-40fa-a77a-fbbe1a3637dc' // for now only using my user ID but eventually it will be the sessions userId


    useEffect(() => {
        let uuid = JSON.parse(sessionStorage.getItem('token')).user.id;
        const fetchUsersPosts = async () => {
            const { data, error } = await supabase
                .from('Posts') // check
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
            .eq('user_id', uuid)

                
                if (error) {
                    console.log("error")
                }
                if (data) {
                
                    setPosts(data)
                    console.log(data)
                }    
        }
        fetchUsersPosts()
        
    }, [])

    return (
        <div className="PostContainer">
            {fetchError && (<p>{fetchError}</p>)}

            {posts && (
                <div className="Post">
                    {posts.map(activity => (
                        <MyPostsCard 
                            key={activity.post_id}
                            post={activity}
                        />
                    ))}
                </div>
            )}
                
        </div>
    )
}

export default MyPostsTable;