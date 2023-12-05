import { useState, useEffect } from "react";
import supabase from "../config/supabaseClient.js";
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import WeatherPanel from "./WeatherPanel";
import '../styles/SearchBar.css';

const SearchBar = () => {
    const OPENWEATHER_API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY;

    const [listOfCities, setListOfCities] = useState([]);
    const [fetchError, setFetchError] = useState(null);
    const [input, setInput] = useState("");
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        const fetchCities = async () => {
            const { data, error } = await supabase
                .from("Cities")
                .select(`
                    city_id,
                    city_name, 
                    latitude, 
                    longitude, 
                    States (state_id, abbreviation)
                `)

            if (error) {
                setFetchError("Could not fetch the cities.");
                setListOfCities([]);
                console.error(fetchError);
            }
        
            if (data) {
                const uniqueCities = data.map((city) => ({
                    id: city.city_id, // Assuming city_id is available
                    name: `${city.city_name}, ${city.States.abbreviation}`,
                    ...city,
                }));

                setListOfCities(uniqueCities);
                setFetchError(null);
            }
        };
        
        fetchCities();

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
        setInput(item.city_name);
        getWeatherData(item.latitude, item.longitude);
    }

    const getWeatherData = async (lat, lng) => {
        const weatherDataURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=imperial&appid=${OPENWEATHER_API_KEY}`;
        const weatherResponse = await fetch(weatherDataURL);
        const weatherData = await weatherResponse.json();
        console.log(weatherData);
        setWeatherData(weatherData);
    }

    // This function returns each search result as a formatted span
    const formatSearchResults = (result) => {
        return (
            <div key={result.id} className="searchResult">
                <span className="search-result">{result.name}</span>
            </div>
        );
    };

    return (
        <div className="main-div">
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
            <div className="weather-panel-div">
                {weatherData && <WeatherPanel weatherJSON={weatherData} />}
            </div>
        </div>

    )
}

export default SearchBar;