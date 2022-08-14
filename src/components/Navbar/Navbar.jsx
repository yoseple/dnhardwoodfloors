import React, {useState} from 'react';
// This is the icons
import { RiMenuLine, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
// importing logo
import logo from '../../Assets/images/logo.png';

// BEM -> Block element Modifer css style...

const Menu = () => (
    <>
          <p><a href = "#Home"> Home</a></p>
          <p><a href = "#About">About</a></p>
          <p><a href = "#Services"> Services </a></p>
          <p><a href = "#Projects"> Projects </a></p>
          <p><a href = "#Contact"> Contact </a></p>
    </>
)

const Navbar = () => {
  // This is for the mobile application. Menu wont be seen so we set it to false first so that the menu wont pop up.
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className='dnhardwood__navbar'>
      <div className='dnhardwood__navbar-links'>
        <div className='dnhardwood__navbar-links_logo'>
          <img src = {logo} alt = "logo"/>
          <div className='dnhardwood__navbar-title'>
            <h3>D-N Hardwood</h3>
            <h4>Flooring Services</h4>
          </div>
          {/* Need to add Dn Hardwood next to the logo maybe go into photoshop and add it to the logo image.  */}
        </div>
        {/* The actual links on the navbar.  */}
        <div className='dnhardwood__navbar-links_container'>
            <Menu/>
        </div>

      </div>
      {/* This will be the menu.. */}
      <div className="dnhardwood__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenuLine color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="dnhardwood__navbar-menu_container scale-up-center">
          <div className="dnhardwood__navbar-menu_container-links">
              <p><a href = "#Home"> Home </a></p>
              <p><a href = "#About"> About Us </a></p>
              <p><a href = "#Services"> Services </a></p>
              <p><a href = "#Projects"> Projects </a></p>
              <p><a href = "#Contact"> Contact </a></p>
          </div>
        </div>
        )}
      </div>
    </div>
  )
}

export default Navbar