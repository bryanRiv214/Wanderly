import ActivitiesTable from "./components/ActivitiesTable";
import WeatherPage from "./components/WeatherPage";

// Starting page
const Homepage = ({userName, location}) => {
  return (
    <div className="Homepage">
       <WeatherPage/>

      <h2>What can you do today?</h2>
      
      <ActivitiesTable />

      {/* Replace with a better image. This image was taken from FontAwesome.com */}
      <img className='arrow-down-img' src='arrow-down-solid.svg' alt=''></img>

    </div>
  );
}

export default Homepage;
