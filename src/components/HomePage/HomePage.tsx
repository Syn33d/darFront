import './HomePage.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Homepage = () => {
  const articles = [
    { theme: 'THÈME', title: 'Nom de l\'article', color: '#EED5E4' },
    { theme: 'THÈME', title: 'Nom de l\'article', color: '#F39B8E' },
    { theme: 'THÈME', title: 'Nom de l\'article', color: '#F3C14A' },
    { theme: 'THÈME', title: 'Nom de l\'article', color: '#EA5923' },
  ];

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
            <h1>Magazine édition 1</h1>
            <div className="button-container">
              <button className="button-block">Acheter maintenant</button>
              <button className="button-block">Devenir membre</button>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. luctus nec ullamcorper mattis, pulvinar dapibus leo</p>
          </div>
        </div>

        <div className="articles-container">

          <div className="articles-header">
            <h2 className="articles-title">Les articles</h2>
            <button className="articles-button">Découvrir tous les articles</button>
          </div>

          <div className="articles-row">
            {articles.map((article, index) => (
              <div key={index} className="article-card">
                <div className="article-image" style={{ backgroundColor: article.color }}></div>
                <div className="article-content">
                  <p className="article-theme">{article.theme}</p>
                  <h2 className="article-title">{article.title}</h2>
                  <p className="article-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Ut elit tellus</strong>, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            <button className="event-button">Réserver mes billets</button>
          </div>
        </div>

        <div className="latest-edition-container">
          <div className="latest-edition-left">
            <h1 className="latest-edition-title">Dernière édition</h1>
            <p className="latest-edition-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Loremdipiscing elit.
            </p>
            <button className="latest-edition-button">Magazine</button>
          </div>
          <div className="latest-edition-content">
            <div className="latest-edition-images">
              <img src="logo.png" alt="Magazine Cover" className="main-image" />
              <img src="logo.png" alt="Magazine Cover" className="secondary-image" />
            </div>
            <p className="latest-edition-price">PRIX À L'UNITÉ SANS ABONNEMENT : 22 €</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Homepage;
