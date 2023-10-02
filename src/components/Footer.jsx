const Footer = () => {
    return (
        <footer className="Footer">
            <div className="footer-row-container">
                <h3 className="slogan">
                    Explore the world <br></br>
                    with <span className="wanderly-beige">Wanderly</span>
                </h3>

                <div className="social-media-icons-container">
                    <img src='linkedin.svg' className="social-media-icon" alt='linked-in logo'></img>
                    <img src='twitter.svg' className="social-media-icon" alt='twitter logo'></img>
                    <img src='square-instagram.svg' className="social-media-icon" alt='instagram logo'></img>
                    <img src='facebook.svg' className="social-media-icon" alt='facebook logo'></img>
                </div>
            </div>

            <div className="footer-row-container">
                <p>wanderly@domain.com</p>

                <div className="terms-and-privacy-container">
                    <p>Terms & Conditions</p>
                    <p>Privacy Statement</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;