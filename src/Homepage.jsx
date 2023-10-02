import ActivitiesTable from "./components/ActivitiesTable";
import WeatherInfoTable from "./components/WeatherInfoTable";

// Starting page
const Homepage = ({userName, location}) => {
  return (
    <div className="Homepage">
      <h1 className="good-morning-msg">Good Morning, {userName}</h1>

      <div className="location-info-container">
        <h2 className="location-name">{location}</h2>

        <div className="todays-forecast-container">
          <div className="weather-img-container">
            {/* Make this a prop when we have the map and weather API working*/}
            <h3>Sunny</h3>
            {/* Replace by an image */}
            <p className="weather-img">☀️</p>
          </div>
          <WeatherInfoTable />
        </div>
      </div>

      <h2>What can you do today?</h2>
      
      <ActivitiesTable />

      {/* Replace with a better image. This image was taken from FontAwesome.com */}
      <img className='arrow-down-img' src='arrow-down-solid.svg' alt=''></img>

    </div>
  );
}

export default Homepage;
