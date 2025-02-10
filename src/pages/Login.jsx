

import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router';
import { createUser, login } from '../services/apiUsers';
import './Login.css'

const Login = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()
    const isUserExist = await login(name,password)
    console.log(isUserExist);
    
    if(isUserExist){
      navigate('/appLoyout')
    }else{
      alert('Your are not logged in. please create and acount')
    }
  }

  return (
    <div className='form-container'>
      <NavLink to='/appLoyout'>main</NavLink>
      <NavLink to='/'>intro</NavLink>

          <form id='addForm' onSubmit={handleSubmit}>
            <h1 className='form-title'>Login</h1>
            <div>
              <input
                type='text'
                placeholder='Name'
                required
                onChange={(e) => setName(e.target.value)}
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
