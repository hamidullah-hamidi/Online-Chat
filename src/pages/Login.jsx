

import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router';
import { createUser, login } from '../services/apiUsers';
import './Login.css'

const Login = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
<<<<<<< HEAD
  const navigate = useNavigate();

  // const { setAccounts } = useCreateAccount();

  function handleSubmit(e) {
    e.preventDefault();
    createUser(name, password, lastName);
    navigate('/appLoyout');
    // setAccounts((accounts) => [...accounts, { name, lastName, password }]);
=======
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
>>>>>>> c1416f78be41f27182ee8d8a0c93825cfdc34e53
  }

  return (
    <div className='form-container'>
<<<<<<< HEAD
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
=======
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
>>>>>>> c1416f78be41f27182ee8d8a0c93825cfdc34e53
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
