import React, { useState, useEffect } from 'react';
import '../stylesheet/Login.css';
import { Link, useNavigate } from 'react-router-dom';
import PasswordResetForm from './PasswordResetForm';
import ForgetPasswordForm from './ForgetPasswordForm';

function Login() {
  const [showResetForm, setShowResetForm] = useState(false);
  const [resetSuccess, setResetSuccess] = useState(false);
  const [showForgetForm, setShowForgetForm] = useState(false);
  const [forgetSuccess, setForgetSuccess] = useState(false);
  const [otp, setOTP] = useState('');
  const [error, setError] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const userList = [
    { username: 'user1', password: 'password1', otp: '123456', isVerified: false },
    { username: 'user2', password: 'password2', otp: '654321', isVerified: false },
    // Add more user data as needed
  ];

  useEffect(() => {
    // Use a useEffect to automatically clear the success messages after 3 seconds
    if (resetSuccess || forgetSuccess) {
      const timer = setTimeout(() => {
        setResetSuccess(false);
        setForgetSuccess(false);
      }, 2000); // Adjust the delay (in milliseconds) as needed
      return () => clearTimeout(timer); // Clear the timer if the component unmounts
    }
  }, [resetSuccess, forgetSuccess]);


  const handleResetSuccess = () => {
    setResetSuccess(true);
    setShowResetForm(false); // Hide the Reset Password form upon success
  };

  const handleForgetSuccess = () => {
    setForgetSuccess(true);
    setShowForgetForm(false); // Hide the Forget Password form upon success
  };

  const handleVerifyOTP = () => {
    setError(''); // Clear previous errors

    // Find the user with the entered username
    const user = userList.find((u) => u.username === username);

    if (!user) {
      setError('User not found. Please register.');
      return;
    }

    if (user.otp === otp) {
      // If the entered OTP matches the stored OTP for the user, mark the user as verified
      user.isVerified = true;
      // Navigate to the home page upon successful OTP verification
      navigate('/home');
    } else {
      setError('Incorrect OTP. Please enter the correct OTP.');
    }
  };

  const handleLogin = () => {
    setError(''); // Clear previous errors

    // Find the user with the entered username and password
    const user = userList.find((u) => u.username === username && u.password === password);

    if (!user) {
      setError('Username or password is incorrect.');
      return;
    }

    // If the user is verified (OTP verified), navigate to the home page
    if (user.isVerified) {
      navigate('/home');
    } else {
      setError('Please verify your OTP.');
    }
  };

  return (
    <div className="login-container">
      <h1>Login Page</h1>
      {showForgetForm && !forgetSuccess ? (
        <ForgetPasswordForm onReset={handleForgetSuccess} />
      ) : showResetForm && !resetSuccess ? (
        <PasswordResetForm onReset={handleResetSuccess} />
      ) : (
        <form>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
          <button onClick={() => setShowForgetForm(true)}>Forget Password</button>
          <button onClick={() => setShowResetForm(true)}>Reset Password</button>
        </form>
      )}
      {resetSuccess && <p>Password reset successfully!</p>}
      {forgetSuccess && <p>Password changed successfully!</p>}
      {!userList.find((u) => u.username === username && u.isVerified) && (
        <div>
          <input
            type="text"
            placeholder="OTP"
            value={otp}
            onChange={(e) => setOTP(e.target.value)}
          />
          <button onClick={handleVerifyOTP}>Verify OTP</button>
        </div>
      )}
      {error && <p className="error">{error}</p>}
      <p className="register-link">
        Don't have an account? <Link to="/registration">Register</Link>
      </p>
    </div>
  );
}

export default Login;
