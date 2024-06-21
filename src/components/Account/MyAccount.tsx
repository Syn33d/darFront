import { useEffect, useState } from 'react';
import axios from 'axios';
import './MyAccount.css';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import Navbar from '../Navbar/Navbar';

// Composant pour afficher les informations de l'utilisateur
const Account = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        street: '',
        town: '',
        postalCode: '',
        subscriptionPlan: '',
        subscriptionId: '',
    });

    const [userId, setUserId] = useState(0); 
    const navigate = useNavigate();
    const [isEditingPassword, setIsEditingPassword] = useState(false);
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, ] = useState(false);


    // Vérifie si le token est présent dans le localStorage
    const token = localStorage.getItem('token');

    useEffect(() => {

        if (!token) {
            // Si le token n'est pas présent, redirigez vers la page de connexion
            navigate('/Authentification');
        } else {
            // Si le token est présent, il se décode pour obtenir l'ID de l'utilisateur
            const decodedToken = jwtDecode(token);
            setUserId(Number(decodedToken.sub)); 

            // Récupère les informations de l'utilisateur
            const fetchUser = async () => {
                try {
                    // Envoie une requête pour obtenir les informations de l'utilisateur
                    const response = await axios.get(`https://api.dar-site.com/user/${userId}`, {
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    });
                    // Met à jour le formulaire avec les informations de l'utilisateur
                    setFormData({
                        firstName: response.data.firstName,
                        lastName: response.data.lastName,
                        email: response.data.email,
                        password: '', 
                        street: response.data.street,
                        town: response.data.town,
                        postalCode: response.data.postalCode,
                        subscriptionPlan: response.data.subscriptionPlan,
                        subscriptionId: response.data.subscriptionId,
                    });
                } catch (error) {
                    console.error('Error fetching user data:', error);
                }
            };

            fetchUser();
        }
    }, [userId, navigate]);

    // Met à jour le formulaire avec les informations de l'utilisateur
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // Met à jour le nouveau mot de passe
    const handleNewPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewPassword(e.target.value);
    };

    // Met à jour le mot de passe de confirmation
    const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(e.target.value);
    };

    // Active le mode d'édition du mot de passe
    const handleEditPasswordClick = () => {
        setIsEditingPassword(true);
    };

    // Met à jour les informations de l'utilisateur après la soumission du formulaire
    const handleSubmit = async () => {
        try {
            // Envoie une requête pour mettre à jour les informations de l'utilisateur
            await axios.patch(`https://api.dar-site.com/user/${userId}`, formData, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            alert('User information updated successfully');
            
            // Si l'utilisateur modifie son mot de passe, met à jour le mot de passe
            if (isEditingPassword) {
                // Vérifie si le nouveau mot de passe et le mot de passe de confirmation correspondent
                if (newPassword && newPassword === confirmPassword) {
                    // Envoie une requête pour mettre à jour le mot de passe
                    await axios.patch(`https://api.dar-site.com/user/${userId}/password`, { password: newPassword }, {
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    });
                    alert('Password updated successfully');
                } else {
                    alert('Passwords do not match');
                }
            }
        } catch (error) {
            console.error('Error updating user information:', error);
            alert('Failed to update user information');
        }
    };

    return (
        <>
            <Navbar /> 
            <div className="account-container">
                <h1 className="account-title">Mon Compte</h1>
                <div className="account-details">
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>Nom:</label>
                            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
                        </div>
                        <div>
                            <label>Prénom:</label>
                            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
                        </div>
                        <div>
                            <label>Email:</label>
                            <input type="email" name="email" value={formData.email} onChange={handleChange} />
                        </div>
                        <div>
                            <label>Mot de passe:</label>
                            {/* Si l'utilisateur est en mode d'édition du mot de passe, affichez les champs de mot de passe */}
                            {isEditingPassword ? (
                                <>
                                    <input type={showPassword ? "text" : "password"} name="newPassword" value={newPassword} onChange={handleNewPasswordChange} placeholder="Nouveau mot de passe" />
                                    <input type={showPassword ? "text" : "password"} name="confirmPassword" value={confirmPassword} onChange={handleConfirmPasswordChange} placeholder="Confirmer le nouveau mot de passe" />
                                </>
                            ) : (
                                <button onClick={handleEditPasswordClick}>Modifier le mot de passe</button>
                            )}
                        </div>
                        <div>
                            <label>Rue:</label>
                            <input type="text" name="street" value={formData.street} onChange={handleChange} />
                        </div>
                        <div>
                            <label>Ville:</label>
                            <input type="text" name="city" value={formData.town} onChange={handleChange} />
                        </div>
                        <div>
                            <label>Code postal:</label>
                            <input type="text" name="postalCode" value={formData.postalCode} onChange={handleChange} />
                        </div>
                        <div>
                            <label>Type de plan d'abonnement:</label>
                            <input type="text" name="subscriptionPlan" value={formData.subscriptionPlan} onChange={handleChange} readOnly />
                        </div>
                        <button type="submit">Mettre à jour</button>
                    </form>
                    <button onClick={() => window.location.href = "https://billing.stripe.com/p/login/3cs17K1ibgYHeCAfYY"}> Accéder au portail client Stripe</button>
                </div>
            </div>
        </>
    );
};

export default Account;
