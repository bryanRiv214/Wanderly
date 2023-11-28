import ActivityCard from "./ActivityCard";
import "../styles/ActivitiesTable.css";
import supabase from "../config/supabaseClient.js";
import { useState, useEffect } from "react";

const ActivitiesTable = () => {
    const [fetchError, setFetchError] = useState(null);
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        // Get ALL activities for now - CHANGE BASED ON SEARCH
        const fetchActivities = async () => {
            const {data, error} = await supabase
            .from("Posts")
            .select()

            if (error) {
                setFetchError("Could not fetch the activities.");
                setActivities(null);
                console.log(error);
            }

            if (data) {
                setActivities(data);
                setFetchError(null);
            }
        }

        fetchActivities();
    }, [])

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