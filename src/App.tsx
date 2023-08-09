import './App.css';
import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Landing from './pages/Landing';
import Register from './pages/Register';
import Login from './pages/Login';
import Loader from './components/loader/Loader';
import useAuth from './lib/hooks/useAuth';
import ProtectedRoute from './components/route/ProtectedRoute';
import {useSelector} from 'react-redux';
import { selectUser } from './lib/store/authSlice';

interface IAppProps {}

const App: React.FC<IAppProps> = (props) => {

  const fetchingAuth = useAuth();
  //wierd
  const currUser = useSelector(selectUser);
  console.log(currUser)
  if (fetchingAuth) {
    return <Loader/>
  }

  
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/landing" element={<Landing />} />
        <Route path="/" element={<ProtectedRoute><HomePage/></ProtectedRoute>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
