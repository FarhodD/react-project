import React from 'react';
import { NavLink } from 'react-router-dom';
import d from './Dialogs.module.css';

const Users = (props) => {
  const path = '/dialogs/' + props.id;
  return (
    <NavLink to={path} className={d.user + ' ' + d.active}>{props.name}</NavLink>
  )
}

const Message = (props) => {
  return (
    <p className={d.messsge}>{props.message}</p>
  )
}

const Dialogs = () => {
  return (
    <div className={d.dialogs}>
      <div className={d.users}>
        <Users name='Somon' id='1'/>
        <Users name='Firdavs' id='2'/>
        <Users name='Faridun' id='3'/>
        <Users name='Alisher' id='4'/>
        <Users name='Fidoalloh' id='5'/>
      </div>
      <div className={d.messages}>
        <Message  message="Hello, how are you?"/> 
        <Message  message="Thanks, I'm fine"/> 
        <Message  message="What do you do?"/> 
        <Message  message="Do my homework"/> 
        <Message  message="Cool!"/> 
      </div>
    </div>
  )
}

export default Dialogs;