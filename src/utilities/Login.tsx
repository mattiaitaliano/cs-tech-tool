import React, { useState } from 'react';

interface LoginProps {
  onLoginSuccess: () => void;
}

const Login: React.FC<LoginProps> = ({ onLoginSuccess }) => {
  const [password, setPassword] = useState<string>('');

  const handleSubmit = () => {
    if (password === 'CSTech23') {
      onLoginSuccess();
    } else {
      alert('Incorrect password!');
    }
  };

  return (
    <div>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter Password"
      />
      <button onClick={handleSubmit}>Login</button>
    </div>
  );
}

export default Login;
