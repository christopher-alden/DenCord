import './App.css'
import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './lib/pages/HomePage';
import Navbar from './lib/components/navbar/Navbar';
import Sidebar from './lib/components/sidebar/Sidebar';

interface IAppProps {
}

const App: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <div className='h-[100%] w-[100%]'>
        <BrowserRouter>
            <div className='fixed bottom-0 w-full '>
                <Navbar />
            </div>
            <div className='fixed left-0 h-full z-10'>
                <Sidebar/>
            </div>
            <Routes>
               <Route path="/" element={<HomePage/>}/>
            </Routes>
        </BrowserRouter>

    </div>
  );
};

export default App;
