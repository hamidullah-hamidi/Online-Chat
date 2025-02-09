import './App.css';
import AppLoyout from './pages/AppLoyout';
import { CreateUserProvider } from './contexts/CreateUser';
import Login from './pages/Login';
import { BrowserRouter, Route, Routes } from 'react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';



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
            <Route path='/' element={<IntroPage/>} />
            <Route path='/login' element={<Login />} />
            <Route path='appLoyout' element={<AppLoyout />} />
          </Routes>
        </BrowserRouter>
      </CreateUserProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
