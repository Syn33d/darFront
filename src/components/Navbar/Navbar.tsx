import "./test.css";
import logo from "/logo.png";

function Navbar() {
    return (
        <>
            <nav className="navbar">
                <div className="wrapper">
                    <div className="top__wrapper">
                        <div className="logo">
                            <img src={logo} alt="logo" />
                        </div>
                        <div className="nav-group">
                            <ul className="nav-menu">

                                <li className="nav-menu__item">
                                    <a href="#" className="nav-menu__link">
                                        <span className="material-symbols-outlined">home</span>
                                        <span className="text">Mon compte</span>
                                    </a>
                                </li>

                                <li className="nav-menu__item">
                                    <a href="#" className="nav-menu__link">
                                        <span className="material-symbols-outlined">newspaper</span>
                                        <span className="text">Magazine</span>
                                    </a>
                                </li>

                                <li className="nav-menu__item">
                                    <a href="#" className="nav-menu__link">
                                        <span className="material-symbols-outlined">star</span>
                                        <span className="text">Evènement</span>
                                    </a>
                                </li>

                                <li className="nav-menu__item">
                                    <a href="#" className="nav-menu__link">
                                        <span className="material-symbols-outlined">subscriptions</span>
                                        <span className="text">Abonnements</span>
                                    </a>
                                </li>

                                <li className="nav-menu__item">
                                    <a href="#" className="nav-menu__link">
                                        <span className="material-symbols-outlined">alternate_email</span>
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
                        <hr className="navbar-underline" />
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;