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
  let dialogsData = [
    { id: 1, name: 'Somon' },
    { id: 2, name: 'Firdavs' },
    { id: 3, name: 'Faridun' },
    { id: 4, name: 'Alisher' },
    { id: 5, name: 'Fidoalloh' }
  ]

  let messages = [
    { id: 1, message: "Hello, how are you?" },
    { id: 2, message: "Thanks, I'm fine" },
    { id: 3, message: "What do you do?" },
    { id: 4, message: "Do my homework" },
    { id: 5, message: "Cool!" }
  ]

  return (
    <div className={d.dialogs}>
      <div className={d.users}>
        <Users name={dialogsData[0].name} id={dialogsData[0].id} />
        <Users name={dialogsData[1].name} id={dialogsData[1].id} />
        <Users name={dialogsData[2].name} id={dialogsData[2].id} />
        <Users name={dialogsData[3].name} id={dialogsData[3].id} />
        <Users name={dialogsData[4].name} id={dialogsData[4].id} />
      </div>
      <div className={d.messages}>
        <Message message={messages[0].message} />
        <Message message={messages[1].message} />
        <Message message={messages[2].message} />
        <Message message={messages[3].message} />
        <Message message={messages[4].message} />
      </div>
    </div>
  )
}

export default Dialogs;