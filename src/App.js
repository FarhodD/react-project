import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Login from './components/Login/Login';
import { lazy } from 'react';
import { Suspense } from 'react';


const DialogsContainer = lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = lazy(() => import('./components/Profile/ProfileContainer'));


const App = () => {
  return (
    <BrowserRouter>
      <div className='app__wrapper'>
        <HeaderContainer />
        <Navbar />
        <div className="app__content">
          <Route path='/dialogs' render={() => {
            return <Suspense fallback={<div>Loading...</div>}>
              <DialogsContainer />
            </Suspense>
          }} />
          <Route path='/profile' render={() => {
            return <Suspense fallback={<div>Loading...</div>}>
              <ProfileContainer />
            </Suspense>
          }} />
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
