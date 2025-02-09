import './MessageWindow.css';

//main window
const Message = ({ message }) => {
  let date = new Date(message.created_at);
  return <li>{message.chat} <span className='time'>{String(date.getHours()).padStart(2,0)}:{String(date.getMinutes()).padStart(2,0)}</span></li>;
};

export default Message;
