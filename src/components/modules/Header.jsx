import React from 'react';

import Donations from './Donations';
import LoginForm from './LoginForm';

import Logo from 'assets/logo.png';
import { useLogin } from 'context/LoginContext';

const Header = () => {
  const { isLoggedIn } = useLogin();

  return (
    <header className="header-module flex-row">
      <div className="logo-container flex-row">
        <img src={Logo} alt="Logo" />
        <h1>Cuidados com Animais</h1>
      </div>
      <div className="form-container">{isLoggedIn && <Donations />}</div>
      <LoginForm />
    </header>
  );
};

export default Header;
