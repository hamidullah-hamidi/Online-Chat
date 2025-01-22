import './App.css'
import Sidebar from './ui/sidebar/SideBar';
import MessageWindow from './ui/messageWindow/MessageWindow';
import {CreateUserPorvider} from './contexts/CreateUser';

function App() {
   return (
    <div className="app">
      <div className="main">
        <CreateUserPorvider>
        <Sidebar />
        <MessageWindow />
        </CreateUserPorvider>
      </div>
    </div>
  );
}

export default App
