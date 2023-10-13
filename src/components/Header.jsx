import { Link } from "react-router-dom"

// Navigation bar
const Header = () => {
    return (
        <nav className="Header">
            <div className='website-title-container'>
            {/* This is just a placeholder for our logo. Replace with an image or SVG once we have the logo */}
            <div className='logo'></div>
            <h2 className='wanderly-title'>Wanderly</h2>
        </div>

        <div className="navbar-links-container">
            <ul className="navbar-links-list">
                {/* Paste links to other pages when we are done creating them */}
                {/* They have to match the paths. See index.js */}
                <Link to='/' className="navbar-link">Home</Link>
                <Link to='/map' className="navbar-link">Map</Link>
                <Link to='/' className="navbar-link">Profile</Link>
            </ul>
        </div>
    </nav>
    )
}

export default Header