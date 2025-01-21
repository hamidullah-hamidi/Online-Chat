import React, { useState } from 'react';
import '../styles/ChatWindow.css'
import ChatMessage from './chatMessage';

const ChatWindow = () => {
  const [messages,setMessages] = useState(['first message','second'])
  const [inputMessage,setInputMessage] = useState('')



  return (
    <div className="chat-window">
      <h2> window</h2>
      <ul className="messages">
            {
              messages.map(message=>{
                <ChatMessage message={message}/>
              })
            }
      </ul>
        <form>
        <input type="text" placeholder="write your message" className='message-input'/>
        <button onClick={sendMessageHanlder}>Send</button>
        </form>
    </div>
  );
};

export default ChatWindow;
