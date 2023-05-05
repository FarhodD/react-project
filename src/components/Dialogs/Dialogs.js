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

  let dialogsElements = dialogsData.map(d => <Users name={d.name} id={d.id} />)


  let messages = [
    { id: 1, message: "Hello, how are you?" },
    { id: 2, message: "Thanks, I'm fine" },
    { id: 3, message: "What do you do?" },
    { id: 4, message: "Do my homework" },
    { id: 5, message: "Cool!" }
  ]

  let messagesElements = messages.map(m => <Message message={m.message} />)

  return (
    <div className={d.dialogs}>
      <div className={d.users}>
        {dialogsElements}
      </div>
      <div className={d.messages}>
        {messagesElements}
      </div>
    </div>
  )
}

export default Dialogs;