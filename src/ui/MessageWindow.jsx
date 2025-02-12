import { useEffect, useState } from 'react';
import './messageWindow.css';
import Message from './Message';
import { createChat, getChats } from '../services/apiChats';

const ChatWindow = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  async function sendMessageHandler() {
     await createChat(newMessage);
    setNewMessage('')
  }
  
  useEffect(() => {
    async function getAllUsers() {
      const data = await getChats();
      setMessages(data);
    }
    getAllUsers();
  }, [newMessage]);
  

  return (
    <div className='chat-window'>
      <h2>Chat Page</h2>
      <ul className='messages'>
        {messages.map((message) => {          
          return <Message message={message} key={message.id} />;
        })}
      </ul>

      <div className='input-container'>
        <input
          type='text'
          placeholder='Message...'
          className='message-input'
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={sendMessageHandler}>Send</button>
      </div>
    </div>
  );
};

export default ChatWindow;
