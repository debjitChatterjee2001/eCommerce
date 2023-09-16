import React, { useState } from 'react';
import '../stylesheet/Login.css';
import { Link } from 'react-router-dom';
import PasswordResetForm from './PasswordResetForm';

function Login() {
  const [showResetForm, setShowResetForm] = useState(false);
  const [resetSuccess, setResetSuccess] = useState(false);

  const handleResetSuccess = () => {
    setResetSuccess(true);
  };

  return (
    <div className="login-container">
      <h1>Login Page</h1>
      <form>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button>Login</button>
      </form>
      <button>Forgot Password</button>
      <button onClick={() => setShowResetForm(true)}>Reset Password</button>
      {showResetForm && !resetSuccess && (
        <PasswordResetForm onReset={handleResetSuccess} />
      )}
      {resetSuccess && <p>Password reset successfully!</p>}
      <p className="register-link">
        Don't have an account? <Link to="/registration">Register</Link>
      </p>
    </div>
  );
}

export default Login;
