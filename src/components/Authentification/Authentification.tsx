import { useState } from 'react';
import './Authentification.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// Vérifie si le mot de passe est fort
function isPasswordStrong(password: string) {
  const minLength = 12;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecialChar = /[!@#$%^&*]/.test(password);

  return password.length >= minLength && hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar;
}

// Vérifie si l'email est valide
function isEmailValid(email: string) {
  const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  return isValid;
}

// Composant pour l'authentification
function Authentification() {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  // Fonction pour gérer le clic sur le bouton de connexion
  const handleLoginClick = () => {
    setIsLogin(true);
    const loginElement = document.getElementById('login') as HTMLInputElement;
    if (loginElement) {
      loginElement.checked = true;
    }
  };

  // Fonction pour gérer le clic sur le bouton d'inscription
  const handleSignupClick = () => {
    setIsLogin(false);
    const signupElement = document.getElementById('signup') as HTMLInputElement;
    if (signupElement) {
      signupElement.checked = true;
    }
  };

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Vérifie si l'utilisateur essaie de se connecter
    if (isLogin) {
      try {
        // Envoie la requête pour se connecter
        const response = await axios.post('https://api.dar-site.com/auth/login', {
          username,
          password
        });
        // Stocke le token dans le localStorage
        localStorage.setItem('token', response.data.access_token);
        alert('Login successful');
        setTimeout(() => {
          navigate("/Home");
        }, 3000);
      } catch (error) {
        console.error(error);
        alert('Login failed');
      }
    } else {
      // Vérifie si les mots de passe correspondent
      if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
      }

      // Vérifie si l'email est valide
      if (!isEmailValid(username)) {
        alert('Email is not valid');
        return;
      }
      
      // Vérifie si le mot de passe est fort
      if (!isPasswordStrong(password)) {
        alert('Le mot de passe doit contenir au moins 12 caractères, une lettre majuscule, une lettre minuscule, un chiffre et un caractère spécial.');
        return;
      }

      try {
        // Envoie la requête pour créer un nouvel utilisateur
        const response = await axios.post('https://api.dar-site.com/auth/register', {
          username,
          password
        });
        // Stocke le token dans le localStorage
        localStorage.setItem('token', response.data.access_token);
        alert('Signup successful');
        setTimeout(() => {
          navigate("/Home");
        }, 3000);
      } catch (error) {
        console.error(error);
        alert('Signup failed');
      }
    }
  };

  return (
    <>
    <Helmet>
      <body className="test-authentification-page" />
    </Helmet> 
    <div className="mainAuthPage">
      <section className='form'>
        <div className="form_wrapper">
          <input type="radio" className="radio" name="radio" id="login" defaultChecked />
          <input type="radio" className="radio" name="radio" id="signup" />
          <div className="tile">
            <h3 className="login">Login Form</h3>
            <h3 className="signup">Signup Form</h3>
          </div>

          <label className="tab login_tab" htmlFor="login" onClick={handleLoginClick}>
            Login
          </label>

          <label className="tab signup_tab" htmlFor="signup" onClick={handleSignupClick}>
            Signup
          </label>
          <span className="shape"></span>
          <form className="form_wrap" onSubmit={handleSubmit}>
            <div className="form_fild login_form">
              <div className="input_group">
                <input type="email" className="input" placeholder="email" value={username} onChange={(e) => setUsername(e.target.value)} />
              </div>
              <div className="input_group">
                <input type="password" className="input" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>

              <a href="/Forgot" className="forgot">Forgot password?</a>

              <input type="submit" className="btn" value="Login" />

              <div className="not_mem">
                <label htmlFor="signup">Not a member? <a href="#" onClick={handleSignupClick}> Signup now</a></label>
              </div>
            </div>

            <div className="form_fild signup_form ">
              <div className="input_group">
                <input type="email" className="input" placeholder="Email Address" value={username} onChange={(e) => setUsername(e.target.value)} />
              </div>
              <div className="input_group">
                <input type="password" className="input" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>

              <div className="input_group">
                <input type="password" className="input" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
              </div>

              <input type="submit" className="btn" value="Signup" />
            </div>

          </form>
        </div>
      </section>
      </div>
    </>
  );
}

export default Authentification;
