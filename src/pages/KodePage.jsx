import React from 'react'
import Navbar from '../components/Navbar'
import iconBarang from '../assets/svg/icon-kode-barang.svg';
import iconGedung from '../assets/svg/icon-kode-gedung.svg';
import iconRuangan from '../assets/svg/icon-kode-ruangan.svg';

function KodePage () {
  return (
    <div className='profile-page d-flex flex-column'>
      <div className='navbar-container mb-5'>
        <Navbar />
      </div>
      <div className='profile-container container mb-3'>
        <div className='d-flex align-items-center'>
          <div className='kode-barang d-flex align-items-center'>
            <img className='me-2' src={iconBarang} alt='Icon'/>
            <a className='text-black fs-6' href='/'>Kode Barang</a>
          </div>
          <div className='kode-gedung d-flex align-items-center ms-4'>
            <img className='me-2' src={iconGedung} alt='Icon'/>
            <a className='text-black fs-6' href='/'>Kode Gedung</a>
          </div>
          <div className='kode-gedung d-flex align-items-center ms-4'>
            <img className='me-2' src={iconRuangan} alt='Icon'/>
            <a className='text-black fs-6' href='/'>Kode Ruangan</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default KodePage
