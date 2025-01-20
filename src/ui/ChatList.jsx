import React from 'react';

const ChatList = () => {
  const chats = ['چت ۱', 'چت ۲', 'چت ۳', 'چت ۴'];

  return (
    <div className="chat-list">
      {chats.map((chat, index) => (
        <div key={index} className="chat-item">
          {chat}
        </div>
      ))}
    </div>
  );
};

export default ChatList;
