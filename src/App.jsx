import { useState } from 'react'
import './styles/App.css'
import Sidebar from './ui/SideBar';
import ChatList from './ui/ChatWindow';
import ChatWindow from './ui/ChatList';

function App() {
   return (
    <div className="app">
      <Sidebar />
      <div className="main">
        <ChatList />
        <ChatWindow />
      </div>
    </div>
  );
}

export default App
