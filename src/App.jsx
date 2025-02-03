import './App.css'
import AppLoyout from './pages/AppLoyout';
import { CreateUserProvider } from './contexts/CreateUser';
import Login from './pages/Login';
import { BrowserRouter, Route, Routes } from 'react-router';

function App() {
  //route handler
   return (
    <div className="app">
         <CreateUserProvider>
        <BrowserRouter>
          <Routes>
           <Route path = '/' element = {<Login/>}/>
           <Route path = 'appLoyout' element = {<AppLoyout/>}/>
          </Routes>
        </BrowserRouter>
        </CreateUserProvider>
    </div>
  );
}

export default App
