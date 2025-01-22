import React from 'react';
import './Sidebar.css'
import Login from '../login/Login';

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
      <Login />
    </div>
  );
};

export default Sidebar;
