import React from 'react';
import { NavLink } from 'react-router-dom';
import h from './Header.module.css';

const Header = () => {
  return (
    <header className={h.header}>
      <img className={h.logo} src="https://e7.pngegg.com/pngimages/615/494/png-clipart-logo-design-text-symbol.png" alt="Логотип" />
      <div className={h.loginBlock}>
        <NavLink className={h.link} to={'/login'}>Login</NavLink>
      </div>
    </header>
  )
}

export default Header;