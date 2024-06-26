import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import './Presentation.css';
import handleBuyNowClick from "../Payment/HandleBuyNowClick";

const Presentation = () => {
    const Navigate = useNavigate();

    //Fonction pour gérer le clic sur le bouton "Devenir membre"
    const handleBecomeMemberClick = () => {
        Navigate("/Pricing"); // replace "/become-member" with your desired path
    }

    return (
        <>
            <Navbar />
            <div className="mainPresentationPage">
                <div className="HeaderPresentation">
                    <h1>À propos</h1>
                    <p>DAR est un média culturel français qui a pour but de promouvoir l'art, le travail et la passion de jeunes artiste émergents.</p>
                </div>

                <div className="contentPresentation">
                    <p>DAR est une expression française qui signifie “trop bien”. Ce terme est employé pour <strong>exprimer quelque chose de positif, de génial.</strong> Le concept de DAR est de <strong>mettre en lumière de jeunes artistes</strong> qui méritent de recevoir une visibilité, trop dar non ? <br />
                        Chaque saison, 4 nouvelles catégories d'artistes fait son apparition, et pour les représenter 5 artistes de chaque catégories sont mis en avant grâce à nos articles, magazines et nos évènements. DAR propose ainsi une <strong>vitrine exceptionnelle</strong> pour des talents émergents dans des domaines variés.<br />
                        Vous retrouvez en ligne une plateforme riche en contenu : des interviews exclusives, des critiques d'œuvres ainsi que des articles en tout genre. Le magazine saisonnier est quant à lui bien plus spécifique puisqu'il est directement liés au 20 artistes sélectionnés et permet à chaque artiste d'avoir au moins une page dédiée à leurs arts et productions.<br />
                        Les événements saisonniers organisés par DAR sont des moments forts où les artistes ont l'opportunité de rencontrer leur public et de partager leur passion en direct. Ces rencontres permettent de créer des ponts entre les créateurs et les amateurs d'art, enrichissant ainsi la scène culturelle locale.<br />

                        <strong>Avec DAR, chaque saison est une nouvelle occasion de découvrir et de célébrer les talents de demain.</strong>
                    </p>
                </div>

                <div className="gif">

                    <div className="content-section">
                        <h1>Abonne toi pour découvrir l'édition estival du magazine :</h1>
                        <div className="button-container">
                            <button className="button-block" onClick={handleBuyNowClick}>Acheter maintenant</button>
                            <button className="button-block" onClick={handleBecomeMemberClick}>Devenir membre</button>
                        </div>
                    </div>

                    <div className="gif-section">
                        <img src="/gif.gif" alt="Présentation Dar print" />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Presentation;