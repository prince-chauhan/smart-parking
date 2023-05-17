import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GetStarted from './Pages/GetStarted';
import Login from './Pages/Login';
import Dashboard from './Pages/Home';

function App() {
  return (
    <div className='w-full flex justify-center bg-dark-bc'>
      <div className=' w-full max-w-sm bg-back-color'>
        <Routes>
          <Route path='/login/*' element={<Login />} />
          <Route path='/' element={<GetStarted />} />
          <Route path='/home' element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
