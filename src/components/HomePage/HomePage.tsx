import './HomePage.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { useNavigate } from 'react-router-dom';
import handleBuyNowClick from '../Payment/HandleBuyNowClick';

// Composant pour la page d'accueil
const Homepage = () => {
  const articles = [
    { theme: 'GÉNÉRAL', title: 'Découvrez les artistes émergents à suivre cette année', color: '#EED5E4', description: 'Plongez dans notre sélection des jeunes artistes prometteurs qui révolutionnent le monde de l\'art contemporain avec leurs œuvres innovantes et captivantes.' },
    { theme: 'PEINTURE', title: 'Techniques artistiques modernes : les tendances à ne pas manquer', color: '#F39B8E', description: 'Explorez les nouvelles techniques de peinture et les dernières tendances en art numérique qui redéfinissent les pratiques artistiques contemporaines.' },
    { theme: 'GÉNÉRAL', title: 'Critique d\'art contemporain : une analyse approfondie', color: '#F3C14A', description: 'Une analyse détaillée des œuvres les plus marquantes de la scène artistique actuelle, avec des critiques d\'experts et des insights passionnants.' },
    { theme: 'GÉNÉRAL', title: 'Les événements artistiques à ne pas manquer cette année', color: '#EA5923', description: 'Un guide complet des expositions d\'art contemporain et des foires internationales à venir, pour ne rien manquer des événements majeurs de la scène artistique.' },
  ];

  const Navigate = useNavigate();

  //Fonction pour gérer le clic sur le bouton "Devenir membre"
  const handleBecomeMemberClick = () => {
    Navigate("/Pricing"); 
  }

  //Fonction pour gérer le clic sur le bouton "Magazine"
  const handleMagazineClick = () => {
    Navigate(`/Magazine`); 
  };

  return (
    <>
      <Navbar />
      <div className="mainHomePage">
        <div className="gif">

          <div className="gif-section">
            <img src="/gif.gif" alt="Présentation Dar print" />
          </div>

          <div className="content-section">
            <p>DISPONIBLE EN ABONNEMENT <strong>DÈS MAINTENANT</strong></p>
            <h1>Édition 1 du magazine disponible à l'achat depuis le 1 juin</h1>
            <div className="homePage-button-container">
              <button className="button-block" onClick={handleBuyNowClick}>Acheter maintenant</button>
              <button className="button-block" onClick={handleBecomeMemberClick}>Devenir membre</button>
            </div>
            <p>Plongez dans notre première édition avec des articles exclusifs sur les artistes émergents, les techniques artistiques modernes et bien plus encore.</p>
          </div>
        </div>

        <div className="articles-container">

          <div className="articles-header">
            <h2 className="homepage-article-title">Les articles</h2>
            <button className="articles-button">Découvrir tous les articles</button>
          </div>

          <div className="articles-row">
            {articles.map((article, index) => (
              <div key={index} className="article-card">
                <div className="magazine-article-image" style={{ backgroundColor: article.color }}></div>
                <div className="article-content">
                  <p className="article-theme">{article.theme}</p>
                  <h2 className="homepage-article-title-row">{article.title}</h2>
                  <p className="article-description">
                  {article.description}  
                  </p>
                  <p className="article-footer">rédigé par DAR | JJ.MM.AA</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="sections">
          <div className="section" data-bg="photo">Photographie</div>
          <div className="section" data-bg="musique">Musique</div>
          <div className="section" data-bg="peinture">Peinture</div>
          <div className="section" data-bg="createurs">Créateurs</div>
          <div className="section-event">
            <div className="logos-container">
              <img src="Fleur.png" alt="Logo 1" className="small-logo" />
              <img src="Soleil.png" alt="Logo 2" className="small-logo" />
              <img src="Nuage.png" alt="Logo 3" className="small-logo" />
            </div>
            <h2>L'évènement 06.2024</h2>
            <p>Rejoignez-nous le 30 juin pour une soirée exceptionnelle dédiée aux artistes émergents, avec des performances en direct, des expositions interactives et des rencontres inoubliables. </p>
            <button className="event-button">Réserver mes billets</button>
          </div>
        </div>

        <div className="latest-edition-container">
          <div className="latest-edition-left">
            <h1 className="latest-edition-title">Dernière édition</h1>
            <p className="latest-edition-text">
            Découvrez notre dernière édition de DAR, où l'art contemporain prend vie ! Plongez dans un monde d'expressions artistiques innovantes avec nos articles captivants, critiques d'art approfondies et interviews exclusives. Que vous soyez un passionné d'art ou un artiste émergent en quête d'inspiration, ne manquez pas cette occasion de vous immerger dans la culture contemporaine.            
            </p>
            <button className="latest-edition-button" onClick={handleMagazineClick}>Magazine</button>
          </div>
          <div className="latest-edition-content">
            <div className="latest-edition-images">
              <img src="Accueil1.jpg" alt="Magazine Cover" className="main-image" />
              <img src="Accueil1.jpg" alt="Magazine Cover" className="secondary-image" />
            </div>
            <p className="latest-edition-price">PRIX À L'UNITÉ SANS ABONNEMENT : 19.90 €</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Homepage;
