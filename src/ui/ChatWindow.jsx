import React from 'react';

const ChatWindow = () => {
  return (
    <div className="chat-window">
      <h2>عنوان چت</h2>
      <div className="messages">
        <div className="message">پیام ۱</div>
        <div className="message">پیام ۲</div>
      </div>
      <input type="text" placeholder="پیام خود را وارد کنید..." />
    </div>
  );
};

export default ChatWindow;
