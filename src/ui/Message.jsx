import './MessageWindow.css';

//main window
const Message = ({ message }) => {
  let date = new Date(message.created_at);
  return <li>{message.chat} <span className='time'>{date.getSeconds()}:{date.getMinutes()}</span></li>;
};

export default Message;
