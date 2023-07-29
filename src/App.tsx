import './App.css'
import * as React from 'react';
import { useContext } from 'react'
import { BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import HomePage from './lib/pages/HomePage';
import Landing from './lib/pages/Landing';
import Register from './lib/pages/Register';
import Login from './lib/pages/Login';
import { AuthContext } from './lib/context/AuthContext';

interface IAppProps {
}

const App: React.FunctionComponent<IAppProps> = (props) => {
  const {currUser} = useContext(AuthContext)
  console.log(currUser)

  const ProtectedRoute = ({children}:any) => {
    if(!currUser){
      console.log("bruh")
      return <Navigate to='/landing'/>
    }
    else{
      return(
        <>{children}</>
      )
    }
  }
  return (
        <BrowserRouter>
            <Routes>
                <Route path="/landing" element={<Landing/>}/>
                <Route path="/" element={<ProtectedRoute><HomePage/></ProtectedRoute>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/login' element={<Login/>}/>
            </Routes>
        </BrowserRouter>
  );
};

export default App;
