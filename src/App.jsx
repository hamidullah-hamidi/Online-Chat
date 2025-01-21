import { useState } from 'react'
import './styles/App.css'
import Sidebar from './ui/SideBar';
import ChatWindow from './ui/ChatWindow';

function App() {
   return (
    <div className="app">
      <div className="main">
        <Sidebar />
        <ChatWindow />
      </div>
    </div>
  );
}

export default App
