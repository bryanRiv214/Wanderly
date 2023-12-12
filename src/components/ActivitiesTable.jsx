import ActivityCard from "./ActivityCard";
import "../styles/ActivitiesTable.css";
import supabase from "../config/supabaseClient.js";
import { useState, useEffect } from "react";

const ActivitiesTable = ({selectedCity}) => {
    const [fetchError, setFetchError] = useState(null);
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        // Get ALL activities for now - CHANGE BASED ON SEARCH
        const fetchActivities = async () => {
            console.log("Activity: " + selectedCity);
            let query = supabase
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
            `);
            if(selectedCity){
                query = query.eq('city_name', selectedCity);
            }
            const {data, error} = await query;

            if (error) {
                setFetchError("Could not fetch the activities.");
                setActivities(null);
            }

            if (data) {
                setActivities(data);
                setFetchError(null);
            }
        }

        fetchActivities();
    }, [selectedCity])

    return (
        <div className="ActivitiesContainer">
            {fetchError && (<p>{fetchError}</p>)}

            {activities && (
                <div className="activities">
                    {activities.map(activity => (
                        <ActivityCard 
                            key={activity.post_id}
                            post={activity}
                        />
                    ))}
                </div>
            )}
                
        </div>
    )
}

export default ActivitiesTable;