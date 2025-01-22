import './styles/App.css'
import Sidebar from './ui/sidebar/SideBar';
import MessageWindow from './ui/messageWindow/MessageWindow';

function App() {
   return (
    <div className="app">
      <div className="main">
        <Sidebar />
        <MessageWindow />
      </div>
    </div>
  );
}

export default App
