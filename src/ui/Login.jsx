// src/ResponsiveForm.js
import React, { useState } from 'react';
import styles from '../styles/Login.css';

const Login = () => {
    function handleSubmit(){
        console.log('submit');
    }

    return (
        <div className={styles.formContainer}>
            <h2>Create Acount</h2>
            <form onSubmit={handleSubmit}>
                <div className='formGroup'>
                    <label htmlFor="name">Name</label>
                    <input type="text" required/>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div>
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" v rows="4" required />
                </div>
                <div>
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" name="phone" required />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Login;
