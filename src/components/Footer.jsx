import "../styles/Footer.css";

const Footer = () => {
    return (
        <footer className="Footer container-fluid">
            <div className="footer-row-container row">
                <h3 className="slogan col-sm-12 col-md-6">
                    Explore the world
                    with <span className="wanderly-beige">Wanderly</span>
                </h3>

                <div className="social-media-icons-container col-sm-12 col-md-6">
                    <img src='linkedin.svg' className="social-media-icon" alt='linked-in logo'></img>
                    <img src='twitter.svg' className="social-media-icon" alt='twitter logo'></img>
                    <img src='square-instagram.svg' className="social-media-icon" alt='instagram logo'></img>
                    <img src='facebook.svg' className="social-media-icon" alt='facebook logo'></img>
                </div>
            </div>

            <div className="website-info-container footer-row-container row col-sm-12 col-md-6">
                <p className="col-sm-12 col-md-6">wanderly@domain.com</p>

                <div className="terms-and-privacy-container col-sm-12 col-md-6 row">
                    <p className="col-sm-6">Terms & Conditions</p>
                    <p className="col-sm-6"> Privacy Statement</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;