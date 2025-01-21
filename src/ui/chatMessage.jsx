
import React, { useState } from 'react';
import '../styles/ChatWindow.css'

const ChatMessage = ({message}) => {
  return (
        <li>{message}</li>
  );
};

export default ChatMessage;
