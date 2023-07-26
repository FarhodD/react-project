import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Login from './components/Login/Login';



const App = () => {
  return (
    <BrowserRouter>
      <div className='app__wrapper'>
        <HeaderContainer />
        <Navbar />
        <div className="app__content">
          <Route path='/dialogs' render={() => <DialogsContainer />} />
          <Route path='/profile' render={() => <ProfileContainer />} />
          <Route path='/users' render={() => <UsersContainer />} />
          <Route path='/music' render={() => <Music />} />
          <Route path='/news' render={() => <News />} />
          <Route path='/settings' render={() => <Settings />} />
          <Route path='/login' render={() => <Login />} />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
