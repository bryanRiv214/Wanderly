import { GoogleMap, useLoadScript} from "@react-google-maps/api";
import "../styles/MapPage.css";

const Map = () => {

    const { isLoaded } = useLoadScript ({googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,})
    if (!isLoaded) return <div>Loading...</div>
    return (<div className ="maps-container" >
            <h2>Whats in the area?</h2>
        <GoogleMap zoom={14} center={{lat: 40.7128, lng: -74.0060}} mapContainerClassName="google-maps"></GoogleMap>
          </div>
    )
}

export default Map;