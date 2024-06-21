import { useState } from 'react';
import './PasswordReset.css';
import axios from 'axios';
import { Helmet } from 'react-helmet';

// Composant pour réinitialiser le mot de passe
function PasswordReset() {
  const [step, setStep] = useState('email'); // 'email' or 'reset'
  const [email, setEmail] = useState('');
  const [, setToken] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Fonction pour gérer la soumission de l'email
  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://api.dar-site.com/auth/reset-password', { email });
      setToken(response.data.token); // assuming the API returns a token
      setStep('reset');
      localStorage.setItem('token', response.data.token);
    } catch (error) {
      console.error(error);
      alert('Failed to send password reset link');
    }
  };

  // Fonction pour gérer la soumission du mot de passe
  const handlePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Vérifie si les mots de passe correspondent
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    try {
      // Récupère le token stocké dans le localStorage
      const token = localStorage.getItem('token');
      if (!token) {
        alert('No token found');
        return;
      }
      // Envoie la requête pour réinitialiser le mot de passe
      await axios.post('https://api.dar-site.com/auth/reset-password/confirm', { password, email, token });
      alert('Password reset successful');
    } catch (error) {
      console.error(error);
      alert('Failed to reset password');
    }
  };

  return (
    <>
    <Helmet>
        <body className="test-password-reset" />
    </Helmet>
      <div className='mainPasswordReset'>
        <section className="formReset">
          <div className="formReset_wrapper">
            {step === 'email' ? (
              <>
                <h3 className="title">Request Password Reset</h3>
                <form className="formReset_wrap" onSubmit={handleEmailSubmit}>
                  <div className="input_group">
                    <input
                      type="email"
                      className="input"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <input type="submit" className="btn" value="Send Reset Link" />
                </form>
              </>
            ) : (
              <>
                <h3 className="title">Reset Password</h3>
                <form className="formReset_wrap" onSubmit={handlePasswordSubmit}>
                  <div className="input_group">
                    <input
                      type="password"
                      className="input"
                      placeholder="New Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="input_group">
                    <input
                      type="password"
                      className="input"
                      placeholder="Confirm New Password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>
                  <input type="submit" className="btn" value="Reset Password" />
                </form>
              </>
            )}
          </div>
        </section>
      </div>
    </>
  );
}

export default PasswordReset;
