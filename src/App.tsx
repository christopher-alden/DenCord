import './App.css';
import * as React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './lib/pages/HomePage';
import Landing from './lib/pages/Landing';
import Register from './lib/pages/Register';
import Login from './lib/pages/Login';
import {useSelector } from 'react-redux';
import { selectUser } from './lib/store/authSlice';
import { useState } from 'react';
import Loader from './lib/components/loader/Loader';
import useAuth from './lib/hooks/useAuth';

interface IAppProps {}

const App: React.FC<IAppProps> = (props) => {

  const currUser = useSelector(selectUser);
  const fetchingAuth = useAuth();
  console.log(currUser);

  const ProtectedRoute = ({children}: any) => {
    if (!currUser) {
      return <Navigate to="/landing" />;
    } else {
      return <>{children}</>;
    }
  };

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
