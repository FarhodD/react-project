import React from 'react';
import d from './../Dialogs.module.css';

const Message = (props) => {
  return (
    <p className={d.message}>{props.message}</p>
  )
}

export default Message;