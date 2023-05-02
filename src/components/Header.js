import React from 'react';
import h from './Header.module.css';

const Header = () => {
  return (
    <header className= {h.header}>
      <img className={h.logo} src="https://e7.pngegg.com/pngimages/615/494/png-clipart-logo-design-text-symbol.png" alt="Логотип" />
    </header>
  )
}

export default Header;