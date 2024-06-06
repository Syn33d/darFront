import "./Contact.css";
import Footer from "../Footer/Footer.tsx";
import Navbar from "../Navbar/Navbar.tsx";

function Contact() {
    return (
        <>
            <Navbar />
            <div className="contact-form-container">
                <h1>Formulaire de Contact</h1>
                <p>Pour toutes informations, contactez l'équipe DAR via le formulaire ci-dessous.</p>
                <form action="#" method="post" className="contact-form">
                    <div className="name-fields">
                        <div className="field-group">
                            <label htmlFor="prenom">VOTRE PRÉNOM <span className="required">*</span></label>
                            <input type="text" id="prenom" name="prenom" required />
                        </div>
                        <div className="field-group">
                            <label htmlFor="nom">VOTRE NOM <span className="required">*</span></label>
                            <input type="text" id="nom" name="nom" required />
                        </div>
                    </div>
                    <div className="field-group">
                        <label htmlFor="email">VOTRE EMAIL <span className="required">*</span></label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="field-group">
                        <label htmlFor="objet">OBJET DE VOTRE MESSAGE <span className="required">*</span></label>
                        <input type="text" id="objet" name="objet" required />
                    </div>
                    <div className="field-group">
                        <label htmlFor="message">VOTRE MESSAGE <span className="required">*</span></label>
                        <textarea id="message" name="message" required></textarea>
                    </div>
                    <button type="submit">Envoyer</button>
                </form>
            </div>
            <Footer />
        </>
    );
}

export default Contact;
