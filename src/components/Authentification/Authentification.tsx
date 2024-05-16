import * as Tabs from '@radix-ui/react-tabs';
import './styles.css';

//Ce document gèrera le login, le register et la modification du profile

//TODO
//Mettre un if pour les utilisateurs connectés

function Authentification() {

    function modifMotDePasse() {
        return (
            <Tabs.Root className="TabsRoot" defaultValue="tab1">
                <Tabs.List className="TabsList" aria-label="Manage your account">
                    <Tabs.Trigger className="TabsTrigger" value="tab1">
                        Account
                    </Tabs.Trigger>
                    <Tabs.Trigger className="TabsTrigger" value="tab2">
                        Password
                    </Tabs.Trigger>
                </Tabs.List>
                <Tabs.Content className="TabsContent" value="tab1">
                    <p className="Text">Make changes to your account here. Click save when you're done.</p>
                    <fieldset className="Fieldset">
                        <label className="Label" htmlFor="name">
                            Name
                        </label>
                        <input className="Input" id="name" defaultValue="Pedro Duarte" />
                    </fieldset>
                    <fieldset className="Fieldset">
                        <label className="Label" htmlFor="username">
                            Username
                        </label>
                        <input className="Input" id="username" defaultValue="@peduarte" />
                    </fieldset>
                    <div style={{ display: 'flex', marginTop: 20, justifyContent: 'flex-end' }}>
                        <button className="Button green">Save changes</button>
                    </div>
                </Tabs.Content>
                <Tabs.Content className="TabsContent" value="tab2">
                    <p className="Text">Change your password here. After saving, you'll be logged out.</p>
                    <fieldset className="Fieldset">
                        <label className="Label" htmlFor="currentPassword">
                            Current password
                        </label>
                        <input className="Input" id="currentPassword" type="password" />
                    </fieldset>
                    <fieldset className="Fieldset">
                        <label className="Label" htmlFor="newPassword">
                            New password
                        </label>
                        <input className="Input" id="newPassword" type="password" />
                    </fieldset>
                    <fieldset className="Fieldset">
                        <label className="Label" htmlFor="confirmPassword">
                            Confirm password
                        </label>
                        <input className="Input" id="confirmPassword" type="password" />
                    </fieldset>
                    <div style={{ display: 'flex', marginTop: 20, justifyContent: 'flex-end' }}>
                        <button className="Button green">Change password</button>
                    </div>
                </Tabs.Content>
            </Tabs.Root>
        );
    }

    function login() {
        return (
            <Tabs.Root className="TabsRoot" defaultValue="tab1">
                <Tabs.List className="TabsList" aria-label="Login">
                    <Tabs.Trigger className="TabsTrigger" value="tab1">
                        Login
                    </Tabs.Trigger>
                    <Tabs.Trigger className="TabsTrigger" value="tab2">
                        Register
                    </Tabs.Trigger>
                </Tabs.List>
                <Tabs.Content className="TabsContent" value="tab1">
                    <p className="Text">Connectez-vous à votre compte ici.</p>

                    <form>
                        <fieldset className="Fieldset">
                            <label className="Label" htmlFor="identifiant">
                                identifiant
                            </label>
                            <input className="Input" id="identifiant" />
                        </fieldset>
                        <fieldset className="Fieldset">
                            <label className="Label" htmlFor="password">
                                Password
                            </label>
                            <input className="Input" id="password" type="password" />
                        </fieldset>
                        <div style={{ display: 'flex', marginTop: 20, justifyContent: 'flex-end' }}>
                            <button className="Button green">Se connecter</button>
                        </div>
                    </form>
                </Tabs.Content>

                <Tabs.Content className="TabsContent" value="tab2">
                    <p className="Text">Rejoignez la communauté DAR ici.</p>

                    <form>
                        <fieldset className="Fieldset">
                            <label className="Label" htmlFor="nom">
                                Nom
                            </label>
                            <input className="Input" id="nom" />
                        </fieldset>

                        <fieldset className="Fieldset">
                            <label className="Label" htmlFor="prenom">
                                Prénom
                            </label>
                        </fieldset>

                        <fieldset className="Fieldset">
                            <label className="Label" htmlFor="email">
                                Email
                            </label>
                            <input className="Input" id="email" />
                        </fieldset>

                        <fieldset className="Fieldset">
                            <label className="Label" htmlFor="adresse">
                                Adresse
                            </label>
                            <input className="Input" id="adresse" />
                        </fieldset>

                        <fieldset className="Fieldset">
                            <label className="Label" htmlFor="ville">
                                Ville
                            </label>
                            <input className="Input" id="ville" />
                        </fieldset>

                        <fieldset className="Fieldset">
                            <label className="Label" htmlFor="Code Postal">
                                Code Postal
                            </label>
                            <input className="Input" id="Code Postal" />
                        </fieldset>

                        <fieldset className="Fieldset">
                            <label className="Label" htmlFor="password">
                                Password
                            </label>
                            <input className="Input" id="password" type="password" />
                        </fieldset>

                        <div style={{ display: 'flex', marginTop: 20, justifyContent: 'flex-end' }}>
                            <button className="Button green">Créer son compte</button>
                        </div>
                    </form>
                </Tabs.Content>
            </Tabs.Root>
        )
    }
}

export default Authentification;