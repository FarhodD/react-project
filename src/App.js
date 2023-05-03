import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import Profile from './components/Profile';
import { Route, Routes } from 'react-router-dom';



const App = () => {
  return (
    <div className='app__wrapper'>
      <Header />
      <Navbar />
      <div className="app__content">
        <Routes>
          <Route path='/dialogs' element={<Dialogs />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </div>
    </div>
  )
}

export default App;
