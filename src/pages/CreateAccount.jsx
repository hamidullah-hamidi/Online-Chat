import { useState } from 'react';
import './Login.css';
import { NavLink, useNavigate } from 'react-router';
import { createUser } from '../services/apiUsers';
import './CreateAccount.css'

const CreateAccount = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    createUser(name,password,lastName,email)
    navigate('/appLoyout')
  }

  return (
    <div className='form-container'>
      <NavLink to='/appLoyout'>main</NavLink>
      <NavLink to='/'>intro</NavLink>

          <form id='addForm' onSubmit={handleSubmit}>
            <h1 className='form-title'>CreateAccount</h1>
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
                    <input
                type='email'
                placeholder='email'
                required
                onChange={(e) => setEmail(e.target.value)}
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

export default CreateAccount;
