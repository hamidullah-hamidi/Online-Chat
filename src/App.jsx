import { useState } from 'react'
import './styles/App.css'
import Sidebar from './ui/SideBar';
import ChatList from './ui/ChatWindow';

function App() {
   return (
    <div className="app">
      <div className="main">
        <Sidebar />
        <ChatList />
      </div>
    </div>
  );
}

export default App
