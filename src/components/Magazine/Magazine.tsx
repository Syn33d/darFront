import './Magazine.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../toto/Footer';

const Magazine = () => {
    return (
        <>
            <Navbar />
            <div className="custom-page">
                <div className="header">
                    <h1 className="title">L'Élégance Poétique de Pandora : Artiste Peintre Inspirée par Biarritz</h1>
                    <img src="logo.png" alt="Centered" className="center-image" />
                </div>

                <div className="contentMagazine">
                    <div className="side-images">
                        <img src="logo.png" alt="Left 1" className="left-image" />
                        <img src="logo.png" alt="Left 2" className="left-image" />
                    </div>
                    <div className="text-section">
                        <p>« Depuis mon enfance, mes deux passions ont toujours été l'océan et le dessin. J'ai grandi près de la Côte des Basques à Biarritz, entourée par ma mère peintre et les vagues. À 16 ans, j'ai eu l'opportunité de voyager à travers le monde pour représenter l'esprit de mon sponsor Roxy. J'ai tourné des films de surf en Californie et en Australie, participé à des photoshoots à New York et à Hawaï. Parallèlement, j'ai collaboré avec eux en France sur divers projets artistiques. Cette vie incroyable m'a permis de surfer sur les plus belles vagues, de rencontrer de nombreux artistes et de croire en mon projet. Après un voyage en Australie en 2017, j'ai décidé de me consacrer entièrement à la peinture. Il m'a fallu deux ans de recherches et d'expérimentations pour trouver mon propre langage plastique. Je vis de ma peinture depuis trois ans, et c'est la plus belle forme de liberté. »
                            <br />
                            <br />
                            Pour cette collaboration, et à travers son œuvre, Pandora Decoster puise son inspiration dans sa région natale, ses couleurs et ses lieux favoris pour nous transporter dans son univers unique.
                            <br />
                            <br />
                            Le mocassin Vincennes, inspiré du modèle Paraboot Orsay, est léger, élégant et facile à porter, parfait pour un look chic après une session de surf ou pour une soirée estivale décontractée. Confectionné en cuir aux tons nude rappelant les couchers de soleil, avec une semelle couleur miel évoquant le sable chaud des plages océaniques, ce modèle est une ode à la beauté naturelle.
                        </p>
                    </div>
                </div>

                <img src="logo.png" alt="Full Width" className="full-width-image" />

                <div className="explore-section">
                    <h2>À explorer aussi..</h2>
                    <div className="grid-container">
                        <div className="grid-item">
                            <div className="thumbnail-content">
                                <img src="logo.png" alt="Thumbnail 1" className="thumbnail" />
                                    <div className="thumbnail-text">
                                        <h3>Satire de Société Contemporaine</h3>
                                        <p>"Mon art s'attache à explorer l'univers fascinant de la pop culture et des dynamiques de notre génération".</p>
                                    </div>
                            </div>
                        </div>
                        <div className="grid-item">
                            <div className="thumbnail-content">
                                <img src="logo.png" alt="Thumbnail 2" className="thumbnail" />
                                    <div className="thumbnail-text">
                                        <h3>Hommage coloré</h3>
                                        <p>Dans une explosion de couleurs vives et de formes audacieuses, une nouvelle série de peintures émerge..</p>
                                    </div>
                            </div>
                        </div>
                        <div className="grid-item">
                            <div className="thumbnail-content">
                                <img src="logo.png" alt="Thumbnail 3" className="thumbnail" />
                                    <div className="thumbnail-text">
                                        <h3>Rubrique 3</h3>
                                        <p>Description pour la troisième rubrique.</p>
                                    </div>
                            </div>
                        </div>
                        <div className="grid-item">
                            <div className="thumbnail-content">
                                <img src="logo.png" alt="Thumbnail 4" className="thumbnail" />
                                    <div className="thumbnail-text">
                                        <h3>Rubrique 4</h3>
                                        <p>Description pour la quatrième rubrique.</p>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Magazine;
