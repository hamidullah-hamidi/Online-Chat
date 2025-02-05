import { useState } from 'react';
import './messageWindow.css';
import Message from './Message';
import { createChat } from '../services/apiChats';

const ChatWindow = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  function sendMessageHanlder() {
    setMessages((messages) => [...messages, inputMessage]);
    setInputMessage('');
    createChat(inputMessage)
  }

  return (
    <div className='chat-window'>
      <h2>Chat Page</h2>
      <ul className='messages'>
        {messages.map((message) => {
          return <Message message={message} key={message} />;
        })}
      </ul>

      <div className='input-container'>
        <input
          type='text'
          placeholder='Message...'
          className='message-input'
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
        />
        <button onClick={sendMessageHanlder}>Send</button>
      </div>
    </div>
  );
};

export default ChatWindow;
