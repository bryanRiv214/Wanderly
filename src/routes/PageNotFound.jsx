import "../styles/PageNotFound.css";
import { Link } from "react-router-dom";

// This component will contain info that we will show users if they access
// out website but with wrong link
const PageNotFound = () => {
    return (
        <div className="PageNotFound">
            <h1>Oops...</h1>
            <h2>You have wandered too far, we don't know what's beyond here...</h2>

            {/* Temporary image without transparent background - replace later */}
            <img alt='error 404 - page not found' className="error-404-image" src="error404.jpg"></img>

            <Link to='/homepage'><button className="back-to-homepage-btn">Back to Homepage</button></Link>
        </div>
    )
}

export default PageNotFound;