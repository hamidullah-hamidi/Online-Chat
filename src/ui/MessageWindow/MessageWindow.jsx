import { useState } from 'react';
import '../styles/ChatWindow.css'
import Message from '../Message'

const ChatWindow = () => {
  const [messages,setMessages] = useState([])
  const [inputMessage,setInputMessage] = useState('')   

  function sendMessageHanlder (){
    setMessages(messages => [...messages, inputMessage]); 
}

  return (
    <div className="chat-window">
      <h2> window</h2>
      <ul className="messages">
            {
              messages.map((message)=>{
                return <Message message={message} key={message}/>
              })
            }
      </ul>

        <div className='input-container'>
        <input type="text" placeholder="write your message" className='message-input' onChange={(e)=>setInputMessage(e.target.value)}/>
        <button onClick={sendMessageHanlder}>Send</button>
        </div>
    </div>
  );
};

export default ChatWindow;
