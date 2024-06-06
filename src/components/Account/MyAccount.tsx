import { useEffect, useState } from 'react';
import axios from 'axios';
import './MyAccount.css';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import Navbar from '../Navbar/Navbar';


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

    const [userId, setUserId] = useState(0); // Remplacez 'userId' par le nom réel de la propriété
    const navigate = useNavigate();
    const [isEditingPassword, setIsEditingPassword] = useState(false);
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, ] = useState(false);


    // Vérifiez si le token est présent dans le localStorage
    const token = localStorage.getItem('token');

    useEffect(() => {

        if (!token) {
            // Si le token n'est pas présent, redirigez vers la page de connexion
            navigate('/Authentification');
        } else {
            const decodedToken = jwtDecode(token);
            setUserId(Number(decodedToken.sub)); // Remplacez 'userId' par le nom réel de la propriété


            const fetchUser = async () => {
                try {
                    const response = await axios.get(`https://api.dar-site.com/user/${userId}`, {
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    });
                    console.log(response.data);
                    setFormData({
                        firstName: response.data.firstName,
                        lastName: response.data.lastName,
                        email: response.data.email,
                        password: '', // Ne jamais pré-remplir le mot de passe pour des raisons de sécurité
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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleNewPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewPassword(e.target.value);
    };

    const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(e.target.value);
    };

    const handleEditPasswordClick = () => {
        setIsEditingPassword(true);
    };

    const handleSubmit = async () => {
        try {
            await axios.patch(`https://api.dar-site.com/user/${userId}`, formData, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            alert('User information updated successfully');

            if (isEditingPassword) {
                if (newPassword && newPassword === confirmPassword) {
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

    //   if (!user) {
    //     return <div>Loading...</div>;
    //   }

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
