import "./Footer.css"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h4>À PROPOS</h4>
                </div>

                <div className="footer-section">
                    <h4>CONTACT</h4>
                </div>

                <div className="footer-section">
                    <h4>PARTENAIRES</h4>
                </div>

                <div className="footer-section">
                    <h4>MENTIONS LÉGALES</h4>
                </div>

                <div className="footer-section">
                    <h4>CGU/CGV</h4>
                </div>

                <div className="footer-section">
                    <h4>PROTECTION DES DONNÉES</h4>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 DAR. Tous droits réservés.</p>
            </div>
        </footer>
    )
}

export default Footer;