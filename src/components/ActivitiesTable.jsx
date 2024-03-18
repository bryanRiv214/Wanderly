import ActivityCard from "./ActivityCard";
import "../styles/ActivitiesTable.css";
import supabase from "../config/supabaseClient.js";
import { useState, useEffect } from "react";

function sortActivities(activities, setActivities, sortOrder) {
    console.log('here')
    // Clone the activities array to avoid mutating the original state
    const sortedActivities = [...activities];
    // using insertion sort
    if(sortOrder === 'Popular') {
        for(let x = 1; x < sortedActivities.length; x++) {
            let act = sortedActivities[x];
            let i = x - 1;
            while(i >= 0 && act.likes > sortedActivities[i].likes) {
                sortedActivities[i+1] = sortedActivities[i];
                i--;
            }
            sortedActivities[i+1] = act;
        }
    }
    else if(sortOrder === 'Price') {
        for(let x = 1; x < sortedActivities.length; x++) {
            let act = sortedActivities[x];
            let i = x - 1;
            while(i >= 0 && act.price < sortedActivities[i].price) {
                sortedActivities[i+1] = sortedActivities[i];
                i--;
            }
            sortedActivities[i+1] = act;
        }
    }
    else if(sortOrder === 'Alphabetical') {
        for(let x = 1; x < sortedActivities.length; x++) {
            let act = sortedActivities[x];
            let i = x - 1;
            while(i >= 0 && act.title < sortedActivities[i].title) {
                sortedActivities[i+1] = sortedActivities[i];
                i--;
            }
            sortedActivities[i+1] = act;
        }
    }
    else if(sortOrder === 'Newest') {
        for(let x = 1; x < sortedActivities.length; x++) {
            let act = sortedActivities[x];
            let i = x - 1;
            while(i >= 0 && act.created_at < sortedActivities[i].created_at) {
                sortedActivities[i+1] = sortedActivities[i];
                i--;
            }
            sortedActivities[i+1] = act;
        }
    }
    // Update the state with the sorted activities
    setActivities(sortedActivities);
}



const ActivitiesTable = ({selectedCity, sortOrder}) => {
    const [fetchError, setFetchError] = useState(null);
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        // Order activies based on chosen sort order
        sortActivities(activities, setActivities, sortOrder);
    }, [activities, sortOrder]);

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
                // setActivities(data);
                sortActivities(data, setActivities, sortOrder);
                setFetchError(null);
            }
        }

        fetchActivities();
    }, [selectedCity]) // I left activities out of the dependencies because I dont think we need this effect to execute if sortOrder changes

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