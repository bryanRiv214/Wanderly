import ActivitiesTable from "../components/ActivitiesTable";
import SearchBar from "../components/SearchBar";
import "../styles/Homepage.css";

// Starting page

const Homepage = ({userName, location}) => {
  return (
    <div className="Homepage">
      <h1 className="good-morning-msg">Good Morning, {userName}</h1>

      <SearchBar />

      <h2>What can you do today?</h2>
      
      <ActivitiesTable />

      {/* Replace with a better image. This image was taken from FontAwesome.com */}
      <img className='arrow-down-img' src='arrow-down-solid.svg' alt=''></img>

    </div>
  );
}

export default Homepage;
