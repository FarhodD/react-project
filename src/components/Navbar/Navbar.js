import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import n from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={n.menu}>
      <NavLink to="/profile" className={n.menu__item} >Profiles</NavLink>
      <NavLink to="/dialogs" className={n.menu__item}>Messages</NavLink>
      <NavLink to="/users" className={n.menu__item}>Users</NavLink>
      <NavLink to="/news" className={n.menu__item}>News</NavLink>
      <NavLink to="/music" className={n.menu__item}>Music</NavLink>
      <NavLink to="/settings" className={n.menu__item}>Settings</NavLink>
      <Sidebar />
    </nav>
  )
}

export default Navbar;