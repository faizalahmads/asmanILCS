import React from 'react'
import iconSignup from '../assets/img/icon-signup.png';
import logo from '../assets/img/logo-psd.png';
import SignUp from '../components/SignUp';

function SignUpPage () {
  return (
    <section className='d-flex'>
      <div className='page-signup icon-signup-container d-flex flex-column justify-content-center align-items-center p-5 me-5'>
        <img className='logo mb-5' src={logo} alt='Logo PSD' />
        <img className='icon-signup mb-3 align-items-center mt-5' src={iconSignup} alt='Icon' />
        <hr className='my-8' style={{height: '4px', width: '100%', background: '#D9D9D9', marginTop: '7rem'}}/>
        <p className='text-start text-white'>Copyright © 2021</p>
      </div>
      <div className='form-container d-flex flex-column align-items-auto justify-content-center ms-5'>
        <p className='text-link-login fs-5'>Sudah Punya Akun? <a href='/'>Masuk</a></p>
        <SignUp />
      </div>
    </section>
  )
}

export default SignUpPage;