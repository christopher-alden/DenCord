import './App.css'
import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './lib/pages/HomePage';
import Landing from './lib/pages/Landing';
import Register from './lib/pages/Register';
import Login from './lib/pages/Login';

interface IAppProps {
}

const App: React.FunctionComponent<IAppProps> = (props) => {
  return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing/>}/>
                <Route path="/homepage" element={<HomePage/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/login' element={<Login/>}/>
            </Routes>
        </BrowserRouter>
  );
};

export default App;
