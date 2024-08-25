import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import CustomModal from '../components/ModalProfile'
import fpProfile from '../assets/img/fpProfile.png';
import iconEdit from '../assets/svg/icon-edit.svg';
import iconAdd from '../assets/svg/icon-add.svg';
import iconEdit2 from '../assets/svg/icon-edit-2.svg';
import iconDelete from '../assets/svg/icon-delete.svg';

function ProfilePage () {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showNewModal, setShowNewModal] = useState(false);

  const handleShowEditModal = () => setShowEditModal(true);
  const handleCloseEditModal = () => setShowEditModal(false);

  const handleShowNewModal = () => setShowNewModal(true);
  const handleCloseNewModal = () => setShowNewModal(false);
  return (
    <div className='profile-page d-flex flex-column'>
      <div className='navbar-container mb-5'>
        <Navbar />
      </div>
      <div className='profile-container container d-flex align-items-center mb-3'>
        <div className='fp-profile'>
          <img src={fpProfile} alt='Profile' />
        </div>
        <div className='d-flex flex-column ms-5'>
          <p className='text-blue-100 fw-bold fs-4 mb-0'>Fadhlan Firdaus <span>(11990316)</span></p>
          <p className='text-blue-100 fs-6'>Divisi Layanan Umum</p>
        </div>
        <form className="d-flex mx-auto" role="search">
          <input className="form-control ms-5" type="search" placeholder="Search" aria-label="Search"></input>
        </form>
        <div className='ms-auto'>       
          <button className='btn border-blue-300 text-blue-200 fs-6' onClick={handleShowEditModal}>
            <img className='me-1' src={iconEdit} alt='Edit'/>Edit User
          </button>
          <button className='btn border-blue-200 text-white fs-6 ms-3' onClick={handleShowNewModal}>
            <img className='me-1' src={iconAdd} alt='Add'/>New</button>
        </div>
      </div>
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

      {/* Modal Edit */}
      <CustomModal 
        show={showEditModal} 
        handleClose={handleCloseEditModal}
        namaPengguna="Update Data Pengguna"
        fotoprofile={fpProfile}
        btnName="Ubah Foto"
        btnHapus={"Hapus Foto"}
        Close={"Tutup"}
        simpanPerubahan={"Simpan Perubahan"}
      >
        <div className='d-flex flex-column'>
          <p className='fw-bold fs-4 mb-0'>Fadhlan Firdaus <span>(11990316)</span></p>
          <p className='fs-6 mb-0'>Divisi Layanan Umum</p>
        </div>
        <hr />
        <div className='d-flex align-items-center mb-0'>
          <label className='fw-bold fs-6 required'>Nama</label>
          <input className='valueInput ms-2' type='text' placeholder='Masukkan Nama' value={"Muhammad Ryadh"}/>
          <label className='fw-bold fs-6 required ms-4'>NIPP</label>
          <input className='valueInput ms-2' type='text' placeholder='Masukkan NIPP' value={"11990316"}/>
        </div>
        <hr />
        <div className='select-container mb-0'>
          <label className='fw-bold fs-6 required'>Hak Akses</label>
          <select className='dropdown btn btn-primary ms-2'>
            <option>Admin</option>
            <option>User</option>
          </select>
        </div>
        <hr />
        <div className='select-container mb-0'>
          <label className='fw-bold fs-6 required'>Divisi</label>
          <select className='dropdown btn btn-primary ms-5'>
            <option>SDMU</option>
            <option>Area Jakarta</option>
            <option>Area Surabaya</option>
            <option>Area Makassar</option>
            <option>Area Medan</option>
            <option>PIP</option>
            <option>PLY</option>
            <option>SSA</option>
            <option>SKR</option>
            <option>IAD</option>
          </select>
        </div>
        <hr />
        <div className='d-flex align-items-center mb-0'>
          <label className='fw-bold fs-6 required'>Password Lama</label>
          <input className='form-control ms-2' type='password' placeholder='Masukkan Password'/>
        </div>
        <hr />
        <div className='d-flex align-items-center mb-0'>
          <label className='fw-bold fs-6 required'>Password Baru</label>
          <input className='form-control ms-2' type='password' placeholder='Buat Password Baru'/>
        </div>
      </CustomModal>

      {/* Modal New */}
      <CustomModal 
        show={showNewModal} 
        handleClose={handleCloseNewModal}
        namaPengguna="Tambah Data Pengguna"
        fotoprofile={fpProfile}
        btnName="Upload Foto"
        btnHapus={"Hapus Foto"}
        Close={"Tutup"}
        simpanPerubahan={"Simpan"}
      >
        <div className='d-flex align-items-center mb-0'>
          <label className='fw-bold fs-6 required'>Nama</label>
          <input className='form-control ms-2' type='text' placeholder='Masukkan Nama'/>
          <label className='fw-bold fs-6 required ms-4'>NIPP</label>
          <input className='form-control ms-2' type='text' placeholder='Masukkan NIPP'/>
        </div>
        <hr />
        <div className='select-container mb-0'>
          <label className='fw-bold fs-6 required'>Hak Akses</label>
          <select className='dropdown btn btn-primary ms-2'>
            <option>Hak Akses</option>
            <option>Admin</option>
            <option>User</option>
          </select>
        </div>
        <hr />
        <div className='select-container mb-0'>
          <label className='fw-bold fs-6 required'>Divisi</label>
          <select className='dropdown btn btn-primary ms-5'>
            <option>Divisi</option>
            <option>Area Jakarta</option>
            <option>Area Surabaya</option>
            <option>Area Makassar</option>
            <option>Area Medan</option>
            <option>PIP</option>
            <option>PLY</option>
            <option>SSA</option>
            <option>SDMU</option>
            <option>SKR</option>
            <option>IAD</option>
          </select>
        </div>
        <hr />
        <div className='d-flex align-items-center mb-0'>
          <label className='fw-bold fs-6 required'>Password</label>
          <input className='form-control ms-5' type='password' placeholder='Masukkan Password'/>
        </div>
        <hr />
        <div className='d-flex align-items-center mb-0'>
          <label className='fw-bold fs-6 required'>Konfirmasi Password</label>
          <input className='form-control ms-2' type='password' placeholder='Konfirmasi Password'/>
        </div>
      </CustomModal>
    </div>
  )
}

export default ProfilePage
