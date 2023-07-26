import './App.css'
import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './lib/pages/HomePage';

interface IAppProps {
}

const App: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
               <Route path="/" element={<HomePage/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
};

export default App;
