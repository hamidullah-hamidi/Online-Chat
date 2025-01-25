import './App.css'
import Sidebar from './ui/sidebar/SideBar';
import MessageWindow from './ui/messageWindow/MessageWindow';
import { CreateUserProvider } from './contexts/CreateUser';

function App() {
   return (
    <div className="app">
        <CreateUserProvider>
        <Sidebar />
        <MessageWindow />
        </CreateUserProvider>
    </div>
  );
}

export default App
