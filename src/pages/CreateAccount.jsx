import { useState } from 'react';
import './CreateAccount.css';
import { NavLink, useNavigate } from 'react-router';
import { createUser, checkUserEmail } from '../services/apiUsers';

const CreateAccount = () => {
  console.log('Wellcome');
  
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()
     const isEmail = await checkUserEmail(email)
     if(!isEmail){
        createUser(name,password,lastName,email)
        navigate('/appLoyout')
     }else{
         alert('This account is already exist, try another email!');
     }
          

  }

  return (
    <div className='form-container'>
      <NavLink to='/appLoyout'>main</NavLink>
      <NavLink to='/'>intro</NavLink>

          <form id='addForm' onSubmit={handleSubmit}>
            <h1 className='form-title'>User Create Account</h1>
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