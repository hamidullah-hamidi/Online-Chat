import { useState } from 'react';
import './messageWindow.css';
import Message from './Message';

const ChatWindow = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  function sendMessageHanlder() {
    setMessages((messages) => [...messages, inputMessage]);
    setInputMessage('');
  }

  return (
    <div className='chat-window'>
      <h2>Chat Page</h2>
      <ul className='messages'>
        {messages.map((message) => {
          return <Message message={message} key={message} />;
        })}
      </ul>

      <form className='form-container'>
        <input
          type='text'
          placeholder='Message...'
          className='message-input'
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
        />
        <button onClick={sendMessageHanlder}>Send</button>
      </form>
    </div>
  );
};

export default ChatWindow;
