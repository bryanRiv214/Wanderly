import React from 'react';
import ActivitiesTable from '../components/ActivitiesTable';
import SearchBar from '../components/SearchBar';
import '../styles/Homepage.css';
import Logout from '../components/Logout';

// Starting page

const HomePage = ({userName, location, setToken}) => {

  return (
    <div className='Homepage'>

      <Logout setToken={setToken}/>

      <h1 className='good-morning-msg'>Good Morning, {userName}</h1>

      <SearchBar/>

      <h2>What can you do today?</h2>

      <ActivitiesTable/>

      {/* Replace with a better image, this image was taken from FontAwesome.com */}
      <img className='arrow-down-img' src='arrow-down-solid.svg' alt=''></img>

    </div>
  );
}

export default HomePage;