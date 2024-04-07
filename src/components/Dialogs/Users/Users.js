import React from 'react';
import { NavLink } from 'react-router-dom';
import d from './../Dialogs.module.css';

const Users = (props) => {
  const path = '/dialogs/' + props.id;
  return (
    <NavLink to={path} className={d.user}>{props.name}</NavLink>
  )
}

export default Users;