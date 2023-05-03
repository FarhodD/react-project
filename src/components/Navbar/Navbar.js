import React from 'react';
import n from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={n.menu}>
        <a href="#ere" className={n.menu__item}>Profiles</a>
        <a href="#ef" className={n.menu__item}>Messages</a>
        <a href="#rtrt" className={n.menu__item}>News</a>
        <a href="#trt" className={n.menu__item}>Music</a>
        <a href="#drer" className={n.menu__item}>Settings</a>
      </nav>
  )
}

export default Navbar;