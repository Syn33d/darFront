import './Magazine.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import handleBuyNowClick from '../Payment/HandleBuyNowClick';

// Liste simulée des magazines
const magazines = [
  {
    id: 1,
    image: '../../Image ArticleFree1.png',
    title: 'Magazine 1',
    description: 'Description of Magazine 1',
    season: 'Winter',
    date: '2023-01-15',
    articles: [
      { theme: 'Theme 1', title: 'Article 1', isFree: true },
      { theme: 'Theme 2', title: 'Article 2', isFree: false },
    ],
  },
  {
    id: 2,
    image: '../../Image ArticleFree2.png',
    title: 'Magazine 2',
    description: 'Description of Magazine 2',
    season: 'Spring',
    date: '2023-04-10',
    articles: [
      { theme: 'Theme 3', title: 'Article 3', isFree: true },
      { theme: 'Theme 4', title: 'Article 4', isFree: false },
    ],
  },
  {
    id: 3,
    image: '../../Image ArticleFree3.png',
    title: 'Magazine 3',
    description: 'Description of Magazine 3',
    season: 'Summer',
    date: '2023-07-20',
    articles: [
      { theme: 'Theme 5', title: 'Article 5', isFree: true },
      { theme: 'Theme 6', title: 'Article 6', isFree: false },
    ],
  },
  {
    id: 4,
    image: '../../Image ArticleFree4.png',
    title: 'Magazine 4',
    description: 'Description of Magazine 4',
    season: 'Fall',
    date: '2023-10-05',
    articles: [
      { theme: 'Theme 7', title: 'Article 7', isFree: true },
      { theme: 'Theme 8', title: 'Article 8', isFree: false },
    ],
  },
  {
    id: 5,
    image: '../../Image ArticleFree5.png',
    title: 'Magazine 5',
    description: 'Description of Magazine 5',
    season: 'Winter',
    date: '2022-12-15',
    articles: [
      { theme: 'Theme 9', title: 'Article 9', isFree: true },
      { theme: 'Theme 10', title: 'Article 10', isFree: false },
    ],
  },
  {
    id: 6,
    image: '../../Image ArticleFree6.jpeg',
    title: 'Magazine 6',
    description: 'Description of Magazine 6',
    season: 'Spring',
    date: '2023-03-22',
    articles: [
      { theme: 'Theme 11', title: 'Article 11', isFree: true },
      { theme: 'Theme 12', title: 'Article 12', isFree: false },
    ],
  },
  {
    id: 7,
    image: '../../Image ArticleFree1.png',
    title: 'Magazine 7',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    season: 'Summer',
    date: '2023-08-14',
    articles: [
      { theme: 'Theme 13', title: 'Article 13', isFree: true },
      { theme: 'Theme 14', title: 'Article 14', isFree: false },
    ],
  },
  {
    id: 8,
    image: '../../Image ArticleFree2.png',
    title: 'Magazine 8',
    description: 'Description of Magazine 8',
    season: 'Fall',
    date: '2023-11-02',
    articles: [
      { theme: 'Theme 15', title: 'Article 15', isFree: true },
      { theme: 'Theme 16', title: 'Article 16', isFree: false },
    ],
  },
  {
    id: 9,
    image: '../../Image ArticleFree3.png',
    title: 'Magazine 9',
    description: 'Description of Magazine 9',
    season: 'Winter',
    date: '2023-01-05',
    articles: [
      { theme: 'Theme 17', title: 'Article 17', isFree: true },
      { theme: 'Theme 18', title: 'Article 18', isFree: false },
    ],
  },
  {
    id: 10,
    image: '../../Image ArticleFree4.png',
    title: 'Magazine 10',
    description: 'Description of Magazine 10',
    season: 'Spring',
    date: '2023-04-30',
    articles: [
      { theme: 'Theme 19', title: 'Article 19', isFree: true },
      { theme: 'Theme 20', title: 'Article 20', isFree: false },
    ],
  },
  {
    id: 11,
    image: '../../Image ArticleFree5.png',
    title: 'Magazine 11',
    description: 'Description of Magazine 11',
    season: 'Summer',
    date: '2023-07-10',
    articles: [
      { theme: 'Theme 21', title: 'Article 21', isFree: true },
      { theme: 'Theme 22', title: 'Article 22', isFree: false },
    ],
  },
  {
    id: 12,
    image: '../../Image ArticleFree6.jpeg',
    title: 'Magazine 12',
    description: 'Description of Magazine 12',
    season: 'Fall',
    date: '2023-10-20',
    articles: [
      { theme: 'Theme 23', title: 'Article 23', isFree: true },
      { theme: 'Theme 24', title: 'Article 24', isFree: false },
    ],
  },
];

// Composant pour afficher les magazines
const Magazine = () => {
  const [selectedMagazine, setSelectedMagazine] = useState<any>(null);
  const [filteredMagazines, setFilteredMagazines] = useState(magazines);
  const [season, setSeason] = useState('');
  const [name, setName] = useState('');
  const Navigate = useNavigate();


  useEffect(() => {
    applyFilters();
  }, [season, name]);

  //Composant pour le bouton "Ouvrir l'article" ou "S'abonner/Acheter"
  const ArticleButton = ({ article }: { article: any }) => {
    const Navigate = useNavigate();
  
    //Fonction pour gérer le clic sur le bouton "Ouvrir l'article" ou "S'abonner/Acheter"
    const handleButtonClick = () => {
      if (article.isFree) {
        Navigate("/ArticleFree")
      } else {
        Navigate("/Pricing");
      }
    };
  
    return (
      <button onClick={handleButtonClick}>
        {/* Remplacez "Open Article" par "S'abonner/Acheter" si l'article n'est pas gratuit */}
        {article.isFree ? 'Open Article' : 'Subscribe/Buy'}
      </button>
    );
  };

  //Fonction pour gérer le clic sur un magazine
  const handleMagazineClick = (magazine: any) => {
    setSelectedMagazine(magazine);
  };

  //Fonction pour fermer la modal
  const handleCloseModal = () => {
    setSelectedMagazine(null);
  };
  
  //Fonction pour gérer le clic sur le bouton "Devenir membre"
  const handleBecomeMemberClick = () => {
    Navigate("/Pricing"); 
  };

  //Fonction pour filtrer les magazines par saison
  const filterBySeason = (magazineList: any) => {
    if (!season) {
      return magazineList;
    }
    return magazineList.filter((magazine: any) => magazine.season === season);
  };

  //Fonction pour filtrer les magazines par nom
  const filterByName = (magazineList: any) => {
    if (!name) {
      return magazineList;
    }
    return magazineList.filter((magazine: any) => magazine.title.toLowerCase().includes(name.toLowerCase()));
  };

  //Fonction pour appliquer les filtres
  const applyFilters = () => {
    const magazinesToDisplay = filterByName(filterBySeason(magazines));
    setFilteredMagazines(magazinesToDisplay);
  };

  return (
    <>
      <Navbar />
      {/* Ajout de la classe 'darkened' pour assombrir l'arrière-plan lorsqu'une modal est ouverte */}
      <div className={`magazine-container ${selectedMagazine ? 'darkened' : ''}`}> 
        <div className="filters">
          <select value={season} onChange={(e) => setSeason(e.target.value)}>
            <option value="">All Seasons</option>
            <option value="Winter">Winter</option>
            <option value="Spring">Spring</option>
            <option value="Summer">Summer</option>
            <option value="Fall">Fall</option>
          </select>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Search by name"
          />
          <button className="subscribe-button" onClick={handleBecomeMemberClick}>M'abonner</button>
        </div>
        <div className="magazine-grid">
          {filteredMagazines.map((magazine) => (
            <div key={magazine.id} className="magazine-item">
              <img
                src={magazine.image}
                style={{width: '50%', height: '50%'}}
                alt={magazine.title}
                onClick={() => handleMagazineClick(magazine)}
              />
              <h3 onClick={() => handleMagazineClick(magazine)}>
                {magazine.title}
              </h3>
              <button className='buyMagazine' onClick={handleBuyNowClick}>Buy</button>
            </div>
          ))}
        </div>

        {/* Affiche la modal si un magazine est sélectionné */}
        {selectedMagazine && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={handleCloseModal}>
                &times;
              </span>
              <h2>{selectedMagazine.title}</h2>
              <p>{selectedMagazine.description}</p>
              <div className="articles">
                {selectedMagazine.articles.map((article: any) => (
                  <div className="article" key={article.title}>
                    <img src="../../logo.png" className="article-image" />
                    <p>
                      <strong>Theme:</strong> {article.theme}
                    </p>
                    <p>
                      <strong>Title:</strong> {article.title}
                    </p>
                    <ArticleButton article={article} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Magazine;