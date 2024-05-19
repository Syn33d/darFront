import { useEffect, useState } from "react";
import "./NavBar.css";
import logo from "/logo.png";

const Navbar = () => {

    const [isMediumOrSmaller, setIsMediumOrSmaller] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMediumOrSmaller(window.innerWidth <= 920); // Définissez la largeur limite pour les écrans mobiles
        };

        handleResize(); // Vérifiez la taille de l'écran lors du montage du composant

        window.addEventListener('resize', handleResize); // Ajoutez un écouteur d'événements pour redimensionner la fenêtre

        return () => {
            window.removeEventListener('resize', handleResize); // Nettoyez l'écouteur d'événements lors du démontage du composant
        };
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            {/* Affiche la navbar normalement sur les écrans plus larges */}
            {!isMediumOrSmaller && (
                <nav className="navbar">
                    <div className="wrapper">
                        <div className="top__wrapper">
                            <div className="logo">
                                <img src={logo} alt="logo" />
                            </div>


                            <div className="social-icons">
                                <a href="#" className="social-icon"><i className="fab fa-pinterest"></i></a>
                                <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
                                <a href="#" className="social-icon"><i className="fab fa-tiktok"></i></a>
                                <a href="#" className="social-icon"><i className="fab fa-x"></i></a>
                            </div>
                        </div>
                        <div className="nav-group">
                            <ul className="nav-menu">
                                <li className="nav-menu__item">
                                    <a href="#" className="nav-menu__link">
                                        <span className="text">Magazine</span>
                                    </a>
                                </li>

                                <li className="nav-menu__item">
                                    <a href="#" className="nav-menu__link">
                                        <span className="text">Evènement</span>
                                    </a>
                                </li>

                                <li className="nav-menu__item">
                                    <a href="#" className="nav-menu__link">
                                        <span className="text">Abonnements</span>
                                    </a>
                                </li>

                                <li className="nav-menu__item">
                                    <a href="#" className="nav-menu__link">
                                        <span className="text">Contact</span>
                                    </a>
                                </li>
                            </ul>

                            <a href="#" className="nav-menu__account">
                                <span className="text">Mon Compte</span>
                            </a>
                        </div>
                    </div>
                </nav>
            )}

            {/* Affiche le bouton du menu burger uniquement sur les écrans mobiles */}
            {isMediumOrSmaller && (
                <button className={`menu-toggle ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <div className="burger"></div>
                    <div className="burger"></div>
                    <div className="burger"></div>
                </button>
            )}

            {/* Affiche le contenu du menu burger sur les écrans mobiles lorsqu'il est ouvert */}
            {isMediumOrSmaller && isOpen && (
                <div className="mobile-menu">
                    <div className="logo">
                        <img src={logo} alt="logo" />
                    </div>
                    <ul className="nav-menu">
                        <li className="nav-menu__item">
                            <a href="#" className="nav-menu__link">
                                <span className="text">Magazine</span>
                            </a>
                        </li>

                        <li className="nav-menu__item">
                            <a href="#" className="nav-menu__link">
                                <span className="text">Evènement</span>
                            </a>
                        </li>

                        <li className="nav-menu__item">
                            <a href="#" className="nav-menu__link">
                                <span className="text">Abonnements</span>
                            </a>
                        </li>

                        <li className="nav-menu__item">
                            <a href="#" className="nav-menu__link">
                                <span className="text">Contact</span>
                            </a>
                        </li>
                    </ul>
                    <div className="social-icons">
                        <a href="#" className="social-icon"><i className="fab fa-pinterest"></i></a>
                        <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
                        <a href="#" className="social-icon"><i className="fab fa-tiktok"></i></a>
                        <a href="#" className="social-icon"><i className="fab fa-x"></i></a>
                    </div>
                </div>
            )}
        </>
    );
}

export default Navbar;

