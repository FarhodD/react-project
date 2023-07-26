import React from 'react';
import { Redirect } from 'react-router-dom';
import d from './Dialogs.module.css';
import Message from './Message/Message';
import Users from './Users/Users';



const Dialogs = (props) => {
  debugger;
  let state = props.dialogsPage;

  let dialogsElements = state.dialogsData.map(d => <Users name={d.name} id={d.id} />)
  let messagesElements = state.messages.map(m => <Message message={m.message} />)
  let newMessageBody = state.newMessageBody;

  let onSendMessageClick = () => {
    props.sendMessage();
  }
  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
  }

  if (!props.isAuth) return <Redirect to={'/login'} />

  return (
    <div className={d.dialogs}>
      <div className={d.users}>
        {dialogsElements}
      </div>
      <div className={d.messages}>
        {messagesElements}
        <div className={d.writeMessage}>
          <textarea
            placeholder='Enter your message'
            value={newMessageBody}
            onChange={onNewMessageChange}
            className={d.write}></textarea>
          <button onClick={onSendMessageClick} className={d.send}>Send</button>
        </div>
      </div>
    </div>
  )
}

export default Dialogs;