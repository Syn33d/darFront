function contact() {
    return (
        <>
            <textarea>
                <h1>Formulaire de contact</h1>
                <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
            </textarea>

            <textarea>
                <form>
                    <fieldset className="Fieldset">
                        <label className="Label" htmlFor="nom">
                            VOTRE NOM
                        </label>
                        <input className="Input" id="nom" />
                    </fieldset>

                    <fieldset className="Fieldset">
                        <label className="Label" htmlFor="prenom">
                            VOTRE PRÉNOM
                        </label>
                    </fieldset>

                    <fieldset className="Fieldset">
                        <label className="Label" htmlFor="email">
                            VOTRE E-MAIL
                        </label>
                        <input className="Input" id="email" />
                    </fieldset>

                    <fieldset className="Fieldset">
                        <label className="Label" htmlFor="objet">
                            L'OBJET DE VOTRE MESSAGE
                        </label>
                        <input className="Input" id="adresse" />
                    </fieldset>

                    <fieldset className="Fieldset">
                        <label className="Label" htmlFor="message">
                            VOTRE MESSAGE
                        </label>
                        <input className="Input" id="ville" />
                    </fieldset>
                    <button className="Button green">Send</button>
                </form>
            </textarea>
        </>
    );
}

export default contact;