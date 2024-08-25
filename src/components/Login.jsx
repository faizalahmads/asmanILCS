import React from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
      navigate('/profile');
  };

  return (
    <form className='login-container d-flex flex-column align-items-center'>
        <h2 className='text-white fw-bold text-center fs-1 p-2 mb-5'>Masuk</h2>
        <div className='mb-4'>
          <h2 className='text-white fw-bold text-center fs-2'>Username</h2>
          <input className='input-login' type='text' placeholder='Username' />
        </div>
        <div className='mb-5' controlId='formBasicPassword'>
          <h2 className='text-white fw-bold text-center fs-2'>Password</h2>
          <input className='input-login' type='password' placeholder='Password' />
        </div>
        <button type='submit' className='btn btn-primary btn-login fs-5 fw-bold mt-1' onClick={handleLogin}>Login</button>
    </form>
  );
}

export default Login;
