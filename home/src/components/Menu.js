import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { NavLink } from 'react-router-dom';
import '../style/Menu.css';

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
	setIsMenuOpen(!isMenuOpen);
  }

  return createPortal(
    <div className="menu-container">

      <div className={`menu-button ${isMenuOpen ? 'open':''}`} onClick={toggleMenu}>
        <div className="menu-bar bar1"></div>
        <div className="menu-bar bar2"></div>
        <div className="menu-frame"></div>
      </div>

      <div className={`menu ${isMenuOpen ? 'open':''}`}>
        <nav className="menu-list">
          <NavLink to='/' className='menu-item' activeClassName='active'>Top</NavLink>
          <NavLink to='/about' className='menu-item' activeClassName='active'>About</NavLink>
          <NavLink to='/skills' className='menu-item' activeClassName='active'>Skills</NavLink>
          <NavLink to='/portfolio' className='menu-item' activeClassName='active'>Portfolio</NavLink>
          <NavLink to='/blog' className='menu-item' activeClassName='active'>Blog</NavLink>
          <NavLink to='/contact' className='menu-item' activeClassName='active'>Contact</NavLink>
        </nav>
      </div>
    </div>,
    document.body
  );
}

export default Menu;