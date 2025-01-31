import './App.css'
import AppLoyout from './pages/AppLoyour';
import { CreateUserProvider } from './contexts/CreateUser';
import Login from './pages/Login';

function App() {
  //route handler
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
