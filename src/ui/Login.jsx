// src/ResponsiveForm.js
import React, { useState } from 'react';
import styles from '../styles/Login.css';

const Login = () => {

    const[isShow,setIsShow] = useState(false)

    function handleSubmit(){
        console.log('submit');
    }

    return (
        <div className={`formContainer${isShow ? 'hidden' : '' }`}>
            <h2>Create Acount</h2>
            <form onSubmit={handleSubmit}>
                <div className='formGroup'>
                    <label htmlFor="name">Name</label>
                    <input type="text" name = 'name'required/>
                </div>
                <div className='formGroup'>
                    <label htmlFor="lastName">lastName</label>
                    <textarea id="lastName" name="lastName" rows="4" required />
                </div>
                <div className='formGroup'>
                    <label htmlFor="phone">Phone Number</label>
                    <input type="number" id="phone" name="phone" required />
                </div>
                <div className='formGroup'>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Login;
