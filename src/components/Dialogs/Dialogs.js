import React from 'react';
import d from './Dialogs.module.css';
import Message from './Message/Message';
import Users from './Users/Users';



const Dialogs = (props) => {
  let dialogsElements = props.state.dialogsData.map(d => <Users name={d.name} id={d.id} />)
  let messagesElements = props.state.messages.map(m => <Message message={m.message} />)
  
  let writeMessageEl = React.createRef();

  let showMessage = () => {
    let text = writeMessageEl.current.value;
    alert(text);
  }

  return (
    <div className={d.dialogs}>
      <div className={d.users}>
        {dialogsElements}
      </div>
      <div className={d.messages}>
        {messagesElements}
        <div className={d.writeMessage}>
          <textarea placeholder='Введите сообщение' ref={writeMessageEl} className={d.write}></textarea>
          <button onClick={showMessage} className={d.send}>Send</button>
        </div>
      </div>
    </div>
  )
}

export default Dialogs;