import React, { useState } from 'react';

import style from '../static/utilities.module.scss';
import logo from '../static/img/CSlogo.png';

interface LoginProps {
  onLoginSuccess: () => void;
}

const Login: React.FC<LoginProps> = ({ onLoginSuccess }) => {
  const [password, setPassword] = useState<string>('');
  const [isIncorrectPassword, setIsIncorrectPassword] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'CSTech23') {
      onLoginSuccess();
    } else {
      setIsIncorrectPassword(true);
    }
  };

  return (
    <>
    <div className={style.loginBackground}></div>
    <div className={style.loginContainer}>
        <div className={style.loginLogo}>
            <img src={logo} width="230px" />
        </div>
        <form>
        <label>Enter the Tool's password: </label>
        <br />
        <br />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter Password"
      />
      <br />
      <br />
      <button type="submit" onClick={handleSubmit}>Login</button>
      {isIncorrectPassword && <p style={{ color: 'red' }}>Invalid Password. Try again.</p>}
      </form>
    </div>
    </>
  );
}

export default Login;
