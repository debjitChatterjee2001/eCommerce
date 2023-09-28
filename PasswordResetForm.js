import React, { useState, useEffect } from 'react';

function PasswordResetForm({ onReset }) {
  const [username, setUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(false); // Initially set to false

  useEffect(() => {
    // Enable the button only when both passwords match
    if (newPassword === confirmPassword && newPassword !== '' && confirmPassword !== '') {
      setPasswordsMatch(true);
    } else {
      setPasswordsMatch(false);
    }
  }, [newPassword, confirmPassword]);

  const handleReset = () => {
    if (passwordsMatch) {
      // Passwords match, reset the password
      onReset(newPassword);
    }
  };

  return (
    <div className="reset-password-form">
      <h2>Reset Password</h2>
      <form>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {!passwordsMatch && <p className="error-message">Passwords do not match</p>}
        <button onClick={handleReset} disabled={!passwordsMatch}>
          Reset Password
        </button>
      </form>
    </div>
  );
}

export default PasswordResetForm;
