import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import Profile from './components/Profile';



const App = () => {
  return (
    <div className='app__wrapper'>
      <Header />
      <Navbar />
      <div className="app__content">
        <Dialogs />
      </div>
      {/* <Profile /> */}
    </div>
  )
}

export default App;
