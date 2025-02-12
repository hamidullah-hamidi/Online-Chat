import './App.css';
import AppLoyout from './pages/AppLoyout';
import { CreateUserProvider } from './contexts/CreateUser';
import Login from './pages/Login';
import { BrowserRouter, Route, Routes } from 'react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Intro from './pages/Intro';
import CreateAccount from './pages/CreateAccount';


function App() {
  const queryClint = new QueryClient({  defaultOptions :
    {
    queries:{
      //  cacheTime : 60 * 1000
      cacheTime : 0
    }
  }
  })

   return (
    <div className="app">
      <QueryClientProvider client={queryClint}>
        <ReactQueryDevtools initialIsOpen = {false}/>
        <CreateUserProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Intro />} />
            <Route path='/appLoyout' element={<AppLoyout />} />
            <Route path='/login' element={<Login />} />
            <Route path='/createAccount' element={<CreateAccount />} />
          </Routes>
        </BrowserRouter>
      </CreateUserProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
