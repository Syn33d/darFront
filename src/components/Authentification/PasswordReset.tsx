import { useState } from 'react';
import './PasswordReset.css';
import axios from 'axios';
import { Helmet } from 'react-helmet';

function PasswordReset() {
  const [step, setStep] = useState('email'); // 'email' or 'reset'
  const [email, setEmail] = useState('');
  const [, setToken] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://172.232.36.169:3000/auth/reset-password', { email });
      setToken(response.data.token); // assuming the API returns a token
      setStep('reset');
      localStorage.setItem('token', response.data.token);
    } catch (error) {
      console.error(error);
      alert('Failed to send password reset link');
    }
  };

  const handlePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        alert('No token found');
        return;
      }

      await axios.post('http://172.232.36.169:3000/auth/reset-password/confirm', { password, email, token });
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
