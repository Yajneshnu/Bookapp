
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { About } from '../pages/About';
import { RecommendationForm} from '../pages/Recomanded';


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleNavbar = () => setToggleMenu(!toggleMenu);

  return (
    <nav className='navbar' id="navbar">
      <div className='container navbar-content flex'>
        <div className='brand-and-toggler flex flex-sb'>
          <Link to="/" className='navbar-brand flex'>
            <span className='text-uppercase fw-7 fs-24 ls-1'>BookApp</span>
          </Link>
          <button type="button" className='navbar-toggler-btn' onClick={handleNavbar}>
            <HiOutlineMenuAlt3 size={35} style={{ color: toggleMenu ? "#fff" : "#010101" }} />
          </button>
        </div>

        <div className={toggleMenu ? "navbar-collapse show-navbar-collapse" : "navbar-collapse"}>
          <ul className="navbar-nav">
            <li className='nav-item'>
              <Link to="/about" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>About</Link>
            </li>
            {/* Add the "Recommend a Book" link */}
            <li className='nav-item'>
              <Link to="/RecommendationForm" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>RecVoice</Link>
              
            </li>
            <li className='nav-item'>
            <Link to="/Favorate" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>Favorate</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
