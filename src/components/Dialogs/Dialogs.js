import React from 'react';
import d from './Dialogs.module.css';
import Message from './Message/Message';
import Users from './Users/Users';



const Dialogs = (props) => {
  let dialogsElements = props.state.dialogsData.map(d => <Users name={d.name} id={d.id} />)
  let messagesElements = props.state.messages.map(m => <Message message={m.message} />)
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