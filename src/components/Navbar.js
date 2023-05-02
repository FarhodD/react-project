import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className='menu'>
        <a href="#ere" className="menu__item">Profiles</a>
        <a href="#ef" className="menu__item">Messages</a>
        <a href="#rtrt" className="menu__item">News</a>
        <a href="#trt" className="menu__item">Music</a>
        <a href="#drer" className="menu__item">Settings</a>
      </nav>
  )
}

export default Navbar;