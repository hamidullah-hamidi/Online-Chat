// src/ResponsiveForm.js
import { useState } from 'react';
import './Login.css';
import { useCreateAccount } from '../../contexts/CreateUser';

const Login = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [lastName, setLastName] = useState('');

  const [isShow, setIsShow] = useState(false);
  const { setAccounts } = useCreateAccount();

  function handleSubmit(e) {
    e.preventDefault();
    setAccounts((accounts) => [...accounts, { name, lastName, email, job }]);
    setIsShow(false);
  }

  return (
    <div>
      <button onClick={() => setIsShow(true)} className='create-btn'>Create Account</button>
      <div id='myModal' className={`modal ${isShow ? '' : 'hidden'}`}>
        <div className='modal-content'>
          <span className='close'>&times;</span>
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
                type='email'
                placeholder='Email'
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className='input-container'>
              <button type='submit' className='btn-register'>
                Register
              </button>
              <button
                type='button'
                className='btn-register'
                onClick={() => setIsShow(false)}
              >
                Close
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
