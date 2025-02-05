// src/ResponsiveForm.js
import { useState } from 'react';
import './Login.css';
import { useCreateAccount } from '../contexts/CreateUser';
import { NavLink, useNavigate } from 'react-router';
import { createUser } from '../services/apiUsers';
import { redirect } from 'react-router';

const Login = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // const { setAccounts } = useCreateAccount();

  function handleSubmit(e) {
    e.preventDefault();
    createUser(name, password, lastName);
    navigate('/appLoyout');
    // setAccounts((accounts) => [...accounts, { name, lastName, password }]);
  }

  return (
    <div className='form-container'>
      <NavLink to='appLoyout'>main</NavLink>
      <form id='addForm' onSubmit={handleSubmit}>
        <h1 className='form-title'>User Login</h1>
        <div>
          <input
            type='text'
            placeholder='Name'
            required
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type='text'
            placeholder='Last Name'
            required
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            type='string'
            placeholder='password'
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className='input-container'>
          <button type='submit' className='btn-register'>
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
