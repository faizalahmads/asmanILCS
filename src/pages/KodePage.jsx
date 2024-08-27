import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import CustomModal from '../components/ModalKode';
import iconBarang from '../assets/svg/icon-kode-barang.svg';
import iconGedung from '../assets/svg/icon-kode-gedung.svg';
import iconRuangan from '../assets/svg/icon-kode-ruangan.svg';
import iconAdd from '../assets/svg/icon-add.svg';
import iconEdit2 from '../assets/svg/icon-edit-2.svg';
import iconDelete from '../assets/svg/icon-delete.svg';
import iconExport from '../assets/svg/icon-export.svg';

function KodePage() {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showNewModal, setShowNewModal] = useState(false);

  const handleShowEditModal = () => setShowEditModal(true);
  const handleCloseEditModal = () => setShowEditModal(false);

  const handleShowNewModal = () => setShowNewModal(true);
  const handleCloseNewModal = () => setShowNewModal(false);
  const [activeTab, setActiveTab] = useState('barang');

  const renderTable = () => {
    switch (activeTab) {
      case 'barang':
        return (
          <div className="table-responsive table-container container">
            <table className="table">
              <thead>
                <tr>
                  <th className="text-blue-100 text-center fw-bold fs-6" style={{ width: '10%' }}>Action</th>
                  <th className="text-blue-100 text-center fw-bold fs-6" style={{ width: '5%' }}>No</th>
                  <th className="text-blue-100 text-center fw-bold fs-6" style={{ width: '15%' }}>Kode Barang</th>
                  <th className="text-blue-100 text-start fw-bold fs-6" style={{ width: '70%' }}>Nama Barang</th>
                </tr>
              </thead>
              <tbody>
                {/* Data barang */}
                <tr>
                  <td className="text-center fs-6 mb-1">
                    <img className="me-1" src={iconDelete} alt="Delete" />
                    <img className="ms-1" src={iconEdit2} alt="Edit" />
                  </td>
                  <td className="text-center fs-6">1</td>
                  <td className="text-center fs-6">D</td>
                  <td className="fs-6">TV, Kulkas, Meja</td>
                </tr>
                {/* Tambahkan data lainnya */}
              </tbody>
            </table>
          </div>
        );
      case 'gedung':
        return (
          <div className="table-responsive table-container container">
            <table className="table">
              <thead>
                <tr>
                  <th className="text-blue-100 text-center fw-bold fs-6" style={{ width: '10%' }}>Action</th>
                  <th className="text-blue-100 text-center fw-bold fs-6" style={{ width: '5%' }}>No</th>
                  <th className="text-blue-100 text-center fw-bold fs-6" style={{ width: '15%' }}>Kode Gedung</th>
                  <th className="text-blue-100 text-start fw-bold fs-6" style={{ width: '70%' }}>Nama Gedung</th>
                </tr>
              </thead>
              <tbody>
                {/* Data Gedung */}
                <tr>
                  <td className="text-center fs-6 mb-1">
                    <img className="me-1" src={iconDelete} alt="Delete" />
                    <img className="ms-1" src={iconEdit2} alt="Edit" />
                  </td>
                  <td className="text-center fs-6">1</td>
                  <td className="text-center fs-6">M</td>
                  <td className="fs-6">Pelindo Tower</td>
                </tr>
                {/* Tambahkan data lainnya */}
              </tbody>
            </table>
          </div>
        );
      case 'ruangan':
        return (
          <div className="table-responsive table-container container">
            <table className="table">
              <thead>
                <tr>
                  <th className="text-blue-100 text-center fw-bold fs-6" style={{ width: '10%' }}>Action</th>
                  <th className="text-blue-100 text-center fw-bold fs-6" style={{ width: '5%' }}>No</th>
                  <th className="text-blue-100 text-center fw-bold fs-6" style={{ width: '15%' }}>Kode Ruangan</th>
                  <th className="text-blue-100 text-start fw-bold fs-6" style={{ width: '70%' }}>Nama Ruangan</th>
                </tr>
              </thead>
              <tbody>
                {/* Data Ruangan */}
                <tr>
                  <td className="text-center fs-6 mb-1">
                    <img className="me-1" src={iconDelete} alt="Delete" />
                    <img className="ms-1" src={iconEdit2} alt="Edit" />
                  </td>
                  <td className="text-center fs-6">1</td>
                  <td className="text-center fs-6">01</td>
                  <td className="fs-6">Ruang Ex Pak Natal</td>
                </tr>
                {/* Tambahkan data lainnya */}
              </tbody>
            </table>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="profile-page d-flex flex-column">
      <div className="navbar-container mb-5">
        <Navbar />
      </div>
      <div className="kode-container container mb-3">
        {/*start::Tab kode */}
        <div className="tab-kode-container d-flex align-items-center">
          <div
            className={`kode-barang d-flex align-items-center ms-3 ${activeTab === 'barang' ? 'text-primary' : 'text-black'}`}
            onClick={() => setActiveTab('barang')}
            style={{ cursor: 'pointer' }}
          >
            <img className="me-2" src={iconBarang} alt="Icon" />
            <span className="fs-6">Kode Barang</span>
          </div>
          <div
            className={`kode-gedung d-flex align-items-center ms-4 ${activeTab === 'gedung' ? 'text-primary' : 'text-black'}`}
            onClick={() => setActiveTab('gedung')}
            style={{ cursor: 'pointer' }}
          >
            <img className="me-2" src={iconGedung} alt="Icon" />
            <span className="fs-6">Kode Gedung</span>
          </div>
          <div
            className={`kode-ruangan d-flex align-items-center ms-4 ${activeTab === 'ruangan' ? 'text-primary' : 'text-black'}`}
            onClick={() => setActiveTab('ruangan')}
            style={{ cursor: 'pointer' }}
          >
            <img className="me-2" src={iconRuangan} alt="Icon" />
            <span className="fs-6">Kode Ruangan</span>
          </div>
        </div>
        {/* end::Tab kode */}

        {/* start::Profile container */}
        <div className='profile-container container d-flex align-items-center mb-3'>
          <label className='text-black fw-bold fs-3 ms-2'>
            {activeTab === 'barang' && 'Lembarang Kode Barang'}
            {activeTab === 'gedung' && 'Lembarang Kode Gedung'}
            {activeTab === 'ruangan' && 'Lembarang Kode Ruangan'}
          </label>
          <form className="d-flex mx-auto" role="search">
            <input className="form-control ms-5" type="search" placeholder="Search" aria-label="Search"></input>
          </form>
          <div className='ms-auto'>       
            <button className='btn border-blue-300 text-blue-200 fw-bold fs-6' >
              <img className='me-1' src={iconExport} alt='Export'/>Export
            </button>
            <button className='btn border-blue-200 text-white fs-6 ms-3' onClick={handleShowEditModal}>
              <img className='me-1' src={iconAdd} alt='Add'/>
              New</button>
          </div>
        </div>
        {/* end::Profile container */}

        <CustomModal
          show={showEditModal}
          handleClose={handleCloseEditModal}
          namaKode={activeTab === 'barang' ? 'Tambah Kode Barang' : activeTab === 'gedung' ? 'Tambah Kode Gedung' : 'Tambah Kode Ruangan'}
        >
          <div className='d-flex flex-column align-items-center justify-content-center px-5 py-3'>
            <div className='kode-option d-flex flex-column align-items-center mb-5'>
              <label className='text-blue-100 fw-bold fs-6 mb-2'>Berikut Kode yang sudah digunakan</label>
              <select className='form-control text-start dropdown btn btn-primary'>
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
          </div>
          <div className='kode-input d-flex flex-column px-5'>
            <label className='kode-label-modal d-flex align-items-center fw-bold fs-6 px-3'>Masukkan Data Berikut</label>
            <div className='d-flex align-items-center mt-3 px-3'>
              <label className='text-blue-100 fw-bold fs-6' style={{ width: '150px' }}>Kode Barang</label>
              <input className='form-control ms-5' type='text' placeholder='Masukkan Kode Barang'/>
            </div>
            <div className='d-flex align-items-center mt-3 px-3'>
              <label className='text-blue-100 fw-bold fs-6' style={{ width: '150px' }}>Nama Barang</label>
              <input className='form-control ms-5' type='text' placeholder='Masukkan Nama Barang'/>
            </div>
          </div>
          <div className='kode-button d-flex align-items-center justify-content-center mt-4'>
            <button className='btn btn-light-100 fw-bold fs-6' onClick={handleCloseEditModal}>
              Tidak
            </button>
            <button className='btn btn-primary ms-3' onClick={handleCloseEditModal}>
              Simpan
            </button>
          </div>
        </CustomModal>
        {renderTable()}
      </div>
    </div>
  );
}

export default KodePage;
