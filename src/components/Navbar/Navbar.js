import React from 'react';
import { NavLink } from 'react-router-dom';
import n from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={n.menu}>
        <NavLink to="/profile" className={n.menu__item}>Profiles</NavLink>
        <NavLink to="/dialogs" className={n.menu__item}>Messages</NavLink>
        <a href="#rtrt" className={n.menu__item}>News</a>
        <a href="#trt" className={n.menu__item}>Music</a>
        <a href="#drer" className={n.menu__item}>Settings</a>
      </nav>
  )
}

export default Navbar;