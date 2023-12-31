import ActivityCard from "./ActivityCard";
import "../styles/ActivitiesTable.css";
import supabase from "../config/supabaseClient.js";
import { useState, useEffect } from "react";

const ActivitiesTable = ({selectedCity}) => {
    const [fetchError, setFetchError] = useState(null);
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        // Get activies based on search
        const fetchActivities = async () => {
            //get list of city ids (only one at a time for now)
            let cityQuery = supabase
            .from('Cities')
            .select();
            if(selectedCity){
                cityQuery = cityQuery.eq('city_name', selectedCity);
            }
            const {data: cities} = await cityQuery;

            const cityIdList = cities.map(city => city.city_id);

            let postQuery = supabase
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
            //if cityIdList more than one (city clicked in searchbar) modify query to only have posts with matching city_id
            if(cityIdList.length > 0){
                postQuery = postQuery.in('city_id', cityIdList);
            }
            const {data, error} = await postQuery;

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