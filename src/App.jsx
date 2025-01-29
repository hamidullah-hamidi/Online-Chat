import './App.css'
import Sidebar from './ui/sidebar/SideBar';
import MessageWindow from './ui/messageWindow/MessageWindow';
import AppLoyout from './pages/AppLoyour';
import { CreateUserProvider } from './contexts/CreateUser';
import Login from './pages/Login';

function App() {
   return (
    <div className="app">
         <CreateUserProvider>
          <Routes>
           <route route = '/' component = {<Login/>}/>
           <route route = 'AppLoyout' component = {<AppLayout/>}/>
          </Routes>
      
        </CreateUserProvider>
    </div>
  );
}

export default App
