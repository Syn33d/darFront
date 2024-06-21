import "./Footer.css"

// Composant pour afficher le footer
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
                
                <div className="footer-side">
                    <p>&copy; 2024-DAR.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;