import ActivityCard from "./ActivityCard";
import "../styles/ActivitiesTable.css";
import { useState, useEffect } from "react";

const ActivitiesTable = () => {
    useEffect(()=>{
        getData();
    }, [])

    const [listOfPosts, setListOfPosts] = useState([]);

    const getData=()=>{
        fetch('sampledata.json',{
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        }
        )
        .then(function(response){
          return response.json();
        })
        .then(function(data) {
            setListOfPosts(data.posts);
            console.log(data.posts)
        });
    }

    return (
        <div className="ActivitiesContainer">
            {listOfPosts? 
                listOfPosts.map(post => 
                <ActivityCard 
                key={post.post_id} 
                title={post.title}
                location={post.location}
                imageURL={post.image}
                weather={post.weather} 
                tags={post.tags}
                />)
            : ""
            }
        </div>
    )
}

export default ActivitiesTable;