import React from 'react';
import '../styles/Sidebar.css'
import Login from './login';
const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Telegram</h2>
      <ul className='chat-list'>
        <li>Ali</li>
        <li>Karim</li>
        <li>Farhad</li>
        <li>Ahmad</li>
      </ul>
      <Login/>
      <button>create account</button>
    </div>
  );
};

export default Sidebar;
