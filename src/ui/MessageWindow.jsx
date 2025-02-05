import { useEffect, useState } from 'react';
import './messageWindow.css';
import Message from './Message';
import { createChat, getChats } from '../services/apiChats';

const ChatWindow = () => {
  const [allMessages, setAllMessages] = useState([]);
  const [chat, setChat] = useState('');

  function sendMessageHanlder() {
    createChat(chat)
  }

  useEffect(()=>{
  async function getAllUsers() {
    const data = await getChats()
    setAllMessages(data)
  }
  getAllUsers()
  },[])

  return (
    <div className='chat-window'>
      <h2>Chat Page</h2>
      <ul className='allMessages'>
        {allMessages.map((message) => {          
          return <Message message={message} key={message.id} />;
        })}
      </ul>

      <div className='input-container'>
        <input
          type='text'
          placeholder='Message...'
          className='message-input'
          value={chat}
          onChange={(e) => setChat(e.target.value)}
        />
        <button onClick={sendMessageHanlder}>Send</button>
      </div>
    </div>
  );
};

export default ChatWindow;
