import React from 'react';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/state';
import d from './Dialogs.module.css';
import Message from './Message/Message';
import Users from './Users/Users';



const Dialogs = (props) => {
  let state = props.store.getState().dialogsPage;

  let dialogsElements = state.dialogsData.map(d => <Users name={d.name} id={d.id} />)
  let messagesElements = state.messages.map(m => <Message message={m.message} />)
  let newMessageBody = state.newMessageBody;

  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator()) 
  }
  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.store.dispatch(updateNewMessageBodyCreator(body))
  }

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