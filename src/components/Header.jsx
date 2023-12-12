import { Link } from "react-router-dom";
import "../styles/Header.css";
import Logout from "../components/Logout.jsx";

// Navigation bar
const Header = () => {
    return (
        <nav className="Header">
            <div className='website-title-container'>
            {/* This is just a placeholder for our logo. Replace with an image or SVG once we have the logo */}
            <img className='logo' src='logo.png' alt="wanderly logo"></img>
            <h2 className='wanderly-title'>Wanderly</h2>
        </div>

        <div className="navbar-links-container">
            <ul className="navbar-links-list">
                {/* Paste links to other pages when we are done creating them */}
                {/* They have to match the paths. See index.js */}
                <Link to='/homepage' className="navbar-link">Home</Link>
                <Link to='/map' className="navbar-link">Map</Link>
                <Link to='/profile' className="navbar-link">Profile</Link>
                <Logout />
            </ul>
        </div>
    </nav>
    )
}

export default Header