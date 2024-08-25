import React from 'react';
import bglogin from '../assets/img/bglogin.png';
import logoAset from '../assets/img/logo-aset.png';
import logo from '../assets/img/logo-psd.png';
import Login from '../components/login';
import { useNavigate } from 'react-router-dom';

function PageLogin () {
    const navigate = useNavigate();

    const handleSignUp = () => {
        navigate('/signup');
    };
    return (
        <section className='page-login p-5 '>
            <img className='logo mb-3' src={logo} alt='Logo PSD' />
            <div className='d-flex align-items-center'>
                <div className='d-flex flex-column'>
                    <img className='logoAset mb-3' src={logoAset} alt='Logo Aset' />
                    <p className='text-white fs-3 text-tentang mb-3'>"Solusi manajemen aset terintegrasi untuk memaksimalkan efisiensi operasional dan meningkatkan value dengan teknologi terkini dan layanan profesional terpercaya."</p>
                    <button type='submit' className='btn btn-primary btn-login fs-5 fw-bold mt-1' onClick={handleSignUp}>Sign Up</button>
                </div>
                <Login />
            </div>
            <hr className='my-8' style={{height: '4px', background: '#D9D9D9', marginTop: '5rem'}}/>
            <p className='text-white'>Copyright © 2021</p>
        </section>
    );
}

export default PageLogin;