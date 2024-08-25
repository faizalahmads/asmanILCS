import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import logo from '../assets/img/logo-psd.png';
import iconLogout from '../assets/svg/icon-logout.svg';

function Navbar() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('');

  useEffect(() => {
    setActiveTab(location.pathname);
  }, [location.pathname]);

  return (
    <div className='container pt-4'>
      <div className='d-flex'>
        <label className='fw-bold text-white fs-64px'>| Aset Management ILCS</label>
        <img className='logo ms-auto' src={logo} alt='Logo PSD' />
      </div>
      <nav className='navbar navbar-expand-lg'>
        <label className='navbar-brand text-white' href='/'>Menu Navigation</label>
        <label className='text-white'>|</label>
        <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <a className={`nav-link text-white ${activeTab === '/profile' ? 'active-tab' : 'hover-tab'}`} href='/profile'>Profile</a>
            </li>
            <li className='nav-item'>
              <a className={`nav-link text-white ${activeTab === '/kode' ? 'active-tab' : 'hover-tab'}`} href='/kode'>Kode</a>
            </li>
            <li className='nav-item dropdown'>
              <a 
                className={`nav-link dropdown-toggle text-white ${activeTab === '/inventaris' ? 'active-dropdown' : 'hover-dropdown'}`} 
                href='#' 
                id='navbarDropdown' 
                role='button' 
                data-bs-toggle='dropdown' 
                aria-expanded='false'
              >
                Inventaris
              </a>
              <ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
                <li><a className='dropdown-item custom-dropdown-item text-white' href='#'>Action</a></li>
                <li><a className='dropdown-item custom-dropdown-item text-white' href='#'>Another action</a></li>
                <li><a className='dropdown-item custom-dropdown-item text-white' href='#'>Something else here</a></li>
              </ul>
            </li>
            <li className='nav-item dropdown'>
              <a 
                className={`nav-link dropdown-toggle text-white ${activeTab === '/rekapitulasi' ? 'active-dropdown' : 'hover-dropdown'}`} 
                href='#' 
                id='navbarDropdown' 
                role='button' 
                data-bs-toggle='dropdown' 
                aria-expanded='false'
              >
                Rekapitulasi
              </a>
              <ul className='dropdown-menu text-white' aria-labelledby='navbarDropdown'>
                <li><a className='dropdown-item custom-dropdown-item text-white' href='#'>Action</a></li>
                <li><a className='dropdown-item custom-dropdown-item text-white' href='#'>Another action</a></li>
                <li><a className='dropdown-item custom-dropdown-item text-white' href='#'>Something else here</a></li>
              </ul>
            </li>
            <li className='nav-item'>
              <a className='nav-link border-red-100 fw-bold' href='/'>
                Logout <img className='ms-1' src={iconLogout} alt='Icon Logout' />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
