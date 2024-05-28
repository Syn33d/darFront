import { useState } from 'react';
import './testAuthentification.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { Helmet } from 'react-helmet';

function Authentification() {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleLoginClick = () => {
    setIsLogin(true);
    const loginElement = document.getElementById('login') as HTMLInputElement;
    if (loginElement) {
      loginElement.checked = true;
    }
  };

  const handleSignupClick = () => {
    setIsLogin(false);
    const signupElement = document.getElementById('signup') as HTMLInputElement;
    if (signupElement) {
      signupElement.checked = true;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isLogin) {
      try {
        const response = await axios.post('http://localhost:3000/auth/login', {
          username,
          password
        });
        localStorage.setItem('token', response.data.access_token);
        alert('Login successful');
        setTimeout(() => {
          navigate("/Account");
        }, 3000);
      } catch (error) {
        console.error(error);
        alert('Login failed');
      }
    } else {
      if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
      }
      try {
        const response = await axios.post('http://localhost:3000/auth/register', {
          username,
          password
        });
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('userId', response.data.userId);
        alert('Signup successful');
        setTimeout(() => {
          navigate("/Account");
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
                <input type="username" className="input" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} />
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
                <input type="username" className="input" placeholder="username Address" value={username} onChange={(e) => setUsername(e.target.value)} />
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
