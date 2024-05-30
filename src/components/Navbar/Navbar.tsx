import { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "/logo.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {

    const [isMediumOrSmaller, setIsMediumOrSmaller] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isConnected, setIsConnected] = useState(!!localStorage.getItem('token'));
    const Navigate = useNavigate();

    const handleLogout = () => {
        // Supprimer le token du localStorage
        localStorage.removeItem('token');

        // Mettre à jour l'état isConnected
        setIsConnected(false);

        // Rediriger l'utilisateur vers la page de connexion
        window.location.href = '/Authentification';
    }

    const handleLogoClick = () => {
        Navigate('/');
    };

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
                            <div className="logo" onClick={handleLogoClick}>
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
                                    <a href="/Presentation" className="nav-menu__link">
                                        <span className="textNavBar">DAR</span>
                                    </a>
                                </li>

                                <li className="nav-menu__item">
                                    <a href="/Pricing" className="nav-menu__link">
                                        <span className="textNavBar">Magazine</span>
                                    </a>
                                </li>

                                <li className="nav-menu__item">
                                    <a href="#" className="nav-menu__link">
                                        <span className="textNavBar">Evènement</span>
                                    </a>
                                </li>

                                <li className="nav-menu__item">
                                    <a href="/Pricing" className="nav-menu__link">
                                        <span className="textNavBar">Abonnements</span>
                                    </a>
                                </li>

                                <li className="nav-menu__item">
                                    <a href="/Magazine" className="nav-menu__link">
                                        <span className="textNavBar">Articles</span>
                                    </a>
                                </li>

                                <li className="nav-menu__item">
                                    <a href="/Contact" className="nav-menu__link">
                                        <span className="textNavBar">Contact</span>
                                    </a>
                                </li>
                            </ul>

                            {isConnected ? (
                                <ul className="nav-menu">
                                    <li>
                                        <a href="/Account" className="nav-menu__link">
                                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAj0lEQVR4nNXQQQ7BUBSF4W/UGelc7YgQa5K29oMZXUYtQC0ACzC5Ztr0xYQ/uZP7cv578vhVMuxwQ4c6dqOpsccMBQ6oUgRdBN/MY/eV4JoiqKJ2EeEjyhRBFpIuLpepn7hEg2fMGYux4RItVpjErHHBdszlFvmHtzwkg02auNzHBqchwSMq9zHFfUjwh7wAHuEdJZUq+i0AAAAASUVORK5CYII=" />
                                        </a>
                                    </li>

                                    <li>
                                        <a href="/Account" className="nav-menu__link" onClick={(e) => {
                                            e.preventDefault();
                                            const confirmLogout = window.confirm("Voulez-vous vraiment vous déconnecter ?");
                                            if (confirmLogout) {
                                                // Appeler la fonction pour déconnecter l'utilisateur et supprimer le token
                                                handleLogout();
                                            }
                                        }}>
                                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAkklEQVR4nM3SMQ4BYRDF8R8Jij2AXq3CabgHjXIlGqVK4gRCwzW4iC002tUo9/smoeAlr5rknzczj3/SDBXqhG8Y5AAVRolZCyW2OUAdJCyiBHUAmGCP7qeADo64oJcD9DHHosFLPHCIACXWDd7gGQFyK5xwjlZIaYjdN0csojfeMU7M2lhFRZq+IakqX6MEv9ELzC0sGDfwfb0AAAAASUVORK5CYII=" />
                                        </a>
                                    </li>
                                </ul>
                            ) : (
                                <a href="/Authentification" className="nav-menu__link">
                                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAj0lEQVR4nNXQQQ7BUBSF4W/UGelc7YgQa5K29oMZXUYtQC0ACzC5Ztr0xYQ/uZP7cv578vhVMuxwQ4c6dqOpsccMBQ6oUgRdBN/MY/eV4JoiqKJ2EeEjyhRBFpIuLpepn7hEg2fMGYux4RItVpjErHHBdszlFvmHtzwkg02auNzHBqchwSMq9zHFfUjwh7wAHuEdJZUq+i0AAAAASUVORK5CYII=" />
                                </a>
                            )}
                        </div>
                    </div>
                </nav>
            )}

            {/* Affiche le bouton du menu burger uniquement sur les écrans mobiles */}
            {isMediumOrSmaller && (
                <div className="menu">
                    <input type="checkbox" id="hamburger" onClick={toggleMenu} />
                    <label htmlFor="hamburger" id="hamburger-logo">☰</label>
                    <nav className={isOpen ? "active" : ""}>
                        <div className="wrapper">
                            <div className="top__wrapper">
                                <div className="logo" onClick={handleLogoClick}>
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
                                        <a href="/Presentation" className="nav-menu__link">
                                            <span className="textNavBar">DAR</span>
                                        </a>
                                    </li>

                                    <li className="nav-menu__item">
                                        <a href="/Pricing" className="nav-menu__link">
                                            <span className="textNavBar">Magazine</span>
                                        </a>
                                    </li>

                                    <li className="nav-menu__item">
                                        <a href="#" className="nav-menu__link">
                                            <span className="textNavBar">Evènement</span>
                                        </a>
                                    </li>

                                    <li className="nav-menu__item">
                                        <a href="/Pricing" className="nav-menu__link">
                                            <span className="textNavBar">Abonnements</span>
                                        </a>
                                    </li>

                                    <li className="nav-menu__item">
                                        <a href="/Magazine" className="nav-menu__link">
                                            <span className="textNavBar">Articles</span>
                                        </a>
                                    </li>

                                    <li className="nav-menu__item">
                                        <a href="/Contact" className="nav-menu__link">
                                            <span className="textNavBar">Contact</span>
                                        </a>
                                    </li>
                                </ul>

                                {isConnected ? (
                                    <ul className="nav-menu">
                                        <li>
                                            <a href="/Account" className="nav-menu__link">
                                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAj0lEQVR4nNXQQQ7BUBSF4W/UGelc7YgQa5K29oMZXUYtQC0ACzC5Ztr0xYQ/uZP7cv578vhVMuxwQ4c6dqOpsccMBQ6oUgRdBN/MY/eV4JoiqKJ2EeEjyhRBFpIuLpepn7hEg2fMGYux4RItVpjErHHBdszlFvmHtzwkg02auNzHBqchwSMq9zHFfUjwh7wAHuEdJZUq+i0AAAAASUVORK5CYII=" />
                                            </a>
                                        </li>

                                        <li>
                                            <a href="/Account" className="nav-menu__link" onClick={(e) => {
                                                e.preventDefault();
                                                const confirmLogout = window.confirm("Voulez-vous vraiment vous déconnecter ?");
                                                if (confirmLogout) {
                                                    // Appeler la fonction pour déconnecter l'utilisateur et supprimer le token
                                                    handleLogout();
                                                }
                                            }}>
                                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAkklEQVR4nM3SMQ4BYRDF8R8Jij2AXq3CabgHjXIlGqVK4gRCwzW4iC002tUo9/smoeAlr5rknzczj3/SDBXqhG8Y5AAVRolZCyW2OUAdJCyiBHUAmGCP7qeADo64oJcD9DHHosFLPHCIACXWDd7gGQFyK5xwjlZIaYjdN0csojfeMU7M2lhFRZq+IakqX6MEv9ELzC0sGDfwfb0AAAAASUVORK5CYII=" />
                                            </a>
                                        </li>
                                    </ul>
                                ) : (
                                    <a href="/Authentification" className="nav-menu__link">
                                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAj0lEQVR4nNXQQQ7BUBSF4W/UGelc7YgQa5K29oMZXUYtQC0ACzC5Ztr0xYQ/uZP7cv578vhVMuxwQ4c6dqOpsccMBQ6oUgRdBN/MY/eV4JoiqKJ2EeEjyhRBFpIuLpepn7hEg2fMGYux4RItVpjErHHBdszlFvmHtzwkg02auNzHBqchwSMq9zHFfUjwh7wAHuEdJZUq+i0AAAAASUVORK5CYII=" />
                                    </a>
                                )}
                            </div>
                        </div>
                    </nav>
                    <div id="overlay"></div>
                </div>
            )}
        </>
    );
}

export default Navbar;