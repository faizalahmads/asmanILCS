import React from 'react'

function SignUp ({signup}) {
  return (
    <form className='signup-container d-flex flex-column mb-4'>
      <h1 className='text-center text-blue-100 fw-bold mb-4'>Buat Akun Untuk Melanjutkan</h1>
      <div className='row mb-4'>
        <div className='col-8'>
          <h2 className='fw-bold fs-2 text-blue-100'>Username</h2>
          <input className='form-control form-control-lg text-blue-100 border-blue-100' type='text' placeholder='Username' />
        </div>
        <div className='col-4'>
          <h2 className='fw-bold fs-2 required text-blue-100 required'>NIPP</h2>
          <input className='form-control form-control-lg text-blue-100 border-blue-100' type='text' placeholder='NIPP' />
        </div>
      </div>
      <div className='row mb-4'>
        <div className='col-12'>
          <h2 className='fw-bold fs-2 text-blue-100'>Divisi</h2>
          <select className='dropdown form-control form-control-lg text-blue-100 border-blue-100'>
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
      </div>
      <div className='row mb-4'>
        <div className='col-12'>
          <h2 className='fw-bold fs-2 text-blue-100'>Hak Akses</h2>
          <select className='dropdown form-control form-control-lg text-blue-100 border-blue-100'>
            <option>Hak Akses</option>
            <option>Admin</option>
            <option>User</option>
          </select>
        </div>
      </div>
      <div className='row mb-4'>
        <div className='col-6'>
          <h2 className='fw-bold fs-2 text-blue-100 required'>Password</h2>
          <input className='form-control form-control-lg text-blue-100 border-blue-100' type='password' placeholder='Password' />
        </div>
        <div className='col-6'>
          <h2 className='fw-bold fs-2 required text-blue-100 required'>Confirm Password</h2>
          <input className='form-control form-control-lg text-blue-100 border-blue-100' type='password' placeholder='Confirm Password' />
        </div>
      </div>
      <button type='submit' className='btn btn-primary btn-login fs-5 fw-bold mt-1' onClick={signup}>Daftar</button>
    </form>
  )
}

export default SignUp
