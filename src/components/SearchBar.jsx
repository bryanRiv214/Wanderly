import { useState, useEffect } from "react";
import axios from 'axios';
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import '../styles/SearchBar.css';

const SearchBar = () => {
    const AIRLABS_API_KEY = process.env.REACT_APP_AIRLABS_API_KEY;
    const API_URL = `https://airlabs.co/api/v9/cities?country_code=US&api_key=${AIRLABS_API_KEY}`;

    const [listOfCities, setListOfCities] = useState([]);
    const [input, setInput] = useState("");

    // For now, our program will  include all cities from the US. Feel free to replace the url with 
    // https://airlabs.co/api/v9/cities?api_key=${AIRLABS_API_KEY} 
    // to get all cities in the world

    useEffect(() => {
        axios.get(API_URL)
        .then((response) => {
            // Process the json so that each city has an ID number (IT'S REQUIRED BY REACT AUTOCOMPLETE SEARCH)
            const citiesWithIds = response.data.response.map((city, index) => ({
                id: index,
                name: city.name,
                // Include other fields from API results as needed (for now I only included name and ID)
            }));

            setListOfCities(citiesWithIds);
        })
        .catch((error) => {
            console.log(error);
        });
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    // Console.log the search item and all results
    const handleOnSearch = (string, results) => {
        console.log(string, results);
    }
    
    // Console.log the item hovered
    const handleOnHover = (result) => {
        console.log(result);
    }
    
    // Console.log the item selected from the list
    const handleOnSelect = (item) => {
        setInput(item.name);
        alert(item.name)
    }

    // This function returns each search result as a formatted span
    const formatSearchResults = (result) => {
        return (
            <div className="searchResult">
                <span className="search-result">{result.name}</span>
            </div>
        )
    }

    return (
        <div className="SearchBar">
            <ReactSearchAutocomplete
                items={listOfCities}
                onSearch={handleOnSearch}
                onHover={handleOnHover}
                onSelect={handleOnSelect}
                autoFocus
                formatResult={formatSearchResults}
            />
        </div>
    )
}

export default SearchBar;