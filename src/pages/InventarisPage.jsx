import React , { useState } from 'react'
import Navbar from '../components/Navbar'
import iconExport from '../assets/svg/icon-export.svg';
import iconAdd from '../assets/svg/icon-add.svg';
import iconEdit2 from '../assets/svg/icon-edit-2.svg';
import iconDelete from '../assets/svg/icon-delete.svg';

function InventarisPage () {

  return (
    <div className='profile-page d-flex flex-column'>
      <div className='navbar-container mb-5'>
        <Navbar />
      </div>
      {/* start::Profile container */}
        <div className='profile-container container d-flex align-items-center mb-3'>
          <label className='text-black fw-bold fs-3 ms-2'> Lembaran Inventaris Utama
            {/* {activeTab === 'barang' && 'Lembarang Kode Barang'}
            {activeTab === 'gedung' && 'Lembarang Kode Gedung'}
            {activeTab === 'ruangan' && 'Lembarang Kode Ruangan'} */}
          </label>
          <form className="d-flex mx-auto" role="search">
            <input className="form-control ms-5" type="search" placeholder="Search" aria-label="Search"></input>
          </form>
          <div className='ms-auto'>       
            <button className='btn border-blue-300 text-blue-200 fw-bold fs-6' >
              <img className='me-1' src={iconExport} alt='Export'/>Export
            </button>
            <button className='btn border-blue-200 text-white fs-6 ms-3'>
              <img className='me-1' src={iconAdd} alt='Add'/>
              New</button>
          </div>
        </div>
        {/* end::Profile container */}

        {/* Table */}
        <div class="table-responsive table-container container">
            <table class="table">
                <thead>
                    <tr>
                    <th className='text-blue-100 text-center fw-bold fs-6 col-1'>Action</th>
                    <th className='text-blue-100 text-center fw-bold fs-6 col-1'>No</th>
                    <th className='text-blue-100 text-center fw-bold fs-6 col-1'>NIP</th>
                    <th className='text-blue-100 text-center fw-bold fs-6 col-3'>Full Name</th>
                    <th className='text-blue-100 text-center fw-bold fs-6 col-3'>Divisi</th>
                    <th className='text-blue-100 text-center fw-bold fs-6 col-2'>Hak Akses</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td className='text-center fs-6 mb-1'>
                        <img className='me-1' src={iconDelete} alt='Delete'/>
                        <img className='ms-1' src={iconEdit2} alt='Edit'/> 
                    </td>
                    <td className='text-center fs-6'>1</td>
                    <td className='text-center fs-6'>11990316</td>
                    <td className='text-center fs-6'>Muhammad Ryadh</td>
                    <td className='text-center fs-6'>Departemen Layanan Umum</td>
                    <td className='text-center fs-6'>Admin</td>
                    </tr>
                    <tr>
                    <td className='text-center fs-6'>
                        <img className='me-1' src={iconDelete} alt='Delete'/>
                        <img className='ms-1' src={iconEdit2} alt='Edit'/> 
                    </td>
                    <td className='text-center fs-6'>2</td>
                    <td className='text-center fs-6'>11990316</td>
                    <td className='text-center fs-6'>Muhammad Ryadh</td>
                    <td className='text-center fs-6'>Departemen Layanan Umum</td>
                    <td className='text-center fs-6'>Admin</td>
                    </tr>
                    <tr>
                    <td className='text-center fs-6'>
                        <img className='me-1' src={iconDelete} alt='Delete'/>
                        <img className='ms-1' src={iconEdit2} alt='Edit'/> 
                    </td>
                    <td className='text-center fs-6'>3</td>
                    <td className='text-center fs-6'>11990316</td>
                    <td className='text-center fs-6'>Muhammad Ryadh</td>
                    <td className='text-center fs-6'>Departemen Layanan Umum</td>
                    <td className='text-center fs-6'>Admin</td>
                    </tr>
                    <tr>
                    <td className='text-center fs-6'>
                        <img className='me-1' src={iconDelete} alt='Delete'/>
                        <img className='ms-1' src={iconEdit2} alt='Edit'/> 
                    </td>
                    <td className='text-center fs-6'>4</td>
                    <td className='text-center fs-6'>11990316</td>
                    <td className='text-center fs-6'>Muhammad Ryadh</td>
                    <td className='text-center fs-6'>Departemen Layanan Umum</td>
                    <td className='text-center fs-6'>Admin</td>
                    </tr>
                    <tr>
                    <td className='text-center fs-6'>
                        <img className='me-1' src={iconDelete} alt='Delete'/>
                        <img className='ms-1' src={iconEdit2} alt='Edit'/> 
                    </td>
                    <td className='text-center fs-6'>5</td>
                    <td className='text-center fs-6'>11990316</td>
                    <td className='text-center fs-6'>Muhammad Ryadh</td>
                    <td className='text-center fs-6'>Departemen Layanan Umum</td>
                    <td className='text-center fs-6'>Admin</td>
                    </tr>
                    <tr>
                    <td className='text-center fs-6'>
                        <img className='me-1' src={iconDelete} alt='Delete'/>
                        <img className='ms-1' src={iconEdit2} alt='Edit'/> 
                    </td>
                    <td className='text-center fs-6'>6</td>
                    <td className='text-center fs-6'>11990316</td>
                    <td className='text-center fs-6'>Muhammad Ryadh</td>
                    <td className='text-center fs-6'>Departemen Layanan Umum</td>
                    <td className='text-center fs-6'>Admin</td>
                    </tr>
                    <tr>
                    <td className='text-center fs-6'>
                        <img className='me-1' src={iconDelete} alt='Delete'/>
                        <img className='ms-1' src={iconEdit2} alt='Edit'/> 
                    </td>
                    <td className='text-center fs-6'>7</td>
                    <td className='text-center fs-6'>11990316</td>
                    <td className='text-center fs-6'>Muhammad Ryadh</td>
                    <td className='text-center fs-6'>Departemen Layanan Umum</td>
                    <td className='text-center fs-6'>Admin</td>
                    </tr>
                    <tr>
                    <td className='text-center fs-6'>
                        <img className='me-1' src={iconDelete} alt='Delete'/>
                        <img className='ms-1' src={iconEdit2} alt='Edit'/> 
                    </td>
                    <td className='text-center fs-6'>8</td>
                    <td className='text-center fs-6'>11990316</td>
                    <td className='text-center fs-6'>Muhammad Ryadh</td>
                    <td className='text-center fs-6'>Departemen Layanan Umum</td>
                    <td className='text-center fs-6'>Admin</td>
                    </tr>
                    <tr>
                    <td className='text-center fs-6'>
                        <img className='me-1' src={iconDelete} alt='Delete'/>
                        <img className='ms-1' src={iconEdit2} alt='Edit'/> 
                    </td>
                    <td className='text-center fs-6'>9</td>
                    <td className='text-center fs-6'>11990316</td>
                    <td className='text-center fs-6'>Muhammad Ryadh</td>
                    <td className='text-center fs-6'>Departemen Layanan Umum</td>
                    <td className='text-center fs-6'>Admin</td>
                    </tr>
                    <tr>
                    <td className='text-center fs-6'>
                        <img className='me-1' src={iconDelete} alt='Delete'/>
                        <img className='ms-1' src={iconEdit2} alt='Edit'/> 
                    </td>
                    <td className='text-center fs-6'>10</td>
                    <td className='text-center fs-6'>11990316</td>
                    <td className='text-center fs-6'>Muhammad Ryadh</td>
                    <td className='text-center fs-6'>Departemen Layanan Umum</td>
                    <td className='text-center fs-6'>Admin</td>
                    </tr>
                </tbody>
            </table>
        </div>
        {/* Table */}
    </div>
  )
}

export default InventarisPage
