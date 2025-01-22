import './App.css'
import Sidebar from './ui/sidebar/SideBar';
import MessageWindow from './ui/messageWindow/MessageWindow';
import { CreateUserProvider } from './contexts/CreateUser';

function App() {
   return (
    <div className="app">
      <div className="main">
        <CreateUserProvider>
        <Sidebar />
        <MessageWindow />
        </CreateUserProvider>
      </div>
    </div>
  );
}

export default App
