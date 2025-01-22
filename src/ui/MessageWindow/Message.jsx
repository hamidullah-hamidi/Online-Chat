
import '../styles/ChatWindow.css'

const Message = ({message}) => {
  console.log(message);
  return (
        <li>{message}</li>
  );
};

export default Message;
