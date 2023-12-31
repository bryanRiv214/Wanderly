import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";
import ActivitiesTable from "../components/ActivitiesTable";
import SearchBar from "../components/SearchBar";
import "../styles/Homepage.css";

// Starting page

const HomePage = ({userName, location}) => {
  const [city, setCity] = useState();

  // function to record city selected
  const handleCitySelect = (city) => {
      setCity(city);
      console.log("Homepage:" + city);
  }

  return (
    <div className="Homepage">
      <h1 className="good-morning-msg">Good Morning, {userName}</h1>
      
      <SearchBar onCitySelect={handleCitySelect}/>

      <h2>What can you do today?</h2>
      
      {/* Searchbar has a callback function to record city name */}
      <ActivitiesTable selectedCity={city}/>

      {/* Replace with a better image. This image was taken from FontAwesome.com */}
      <img className='arrow-down-img' src='arrow-down-solid.svg' alt=''></img>
    </div>
  );
}

export default HomePage; 