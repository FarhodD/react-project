import React from 'react';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import d from './Dialogs.module.css';
import Message from './Message/Message';
import Users from './Users/Users';
import { Textarea } from '../common/FormsControls/FormsControls';
import { maxLengthCreator, requiered } from '../../utils/validators/validators';

const maxLength50 = maxLengthCreator(50);

const Dialogs = (props) => {
  let state = props.dialogsPage;

  let dialogsElements = state.dialogsData.map(d => <Users name={d.name} id={d.id} />)
  let messagesElements = state.messages.map(m => <Message message={m.message} />)
  let newMessageBody = state.newMessageBody;

  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody);
  }

  return (
    <div className={d.dialogs}>
      <div className={d.users}>
        {dialogsElements}
      </div>
      <div className={d.messages}>
        {messagesElements}
        <AddMessageFormRedux onSubmit={addNewMessage} />
      </div>
    </div>
  )
}

const AddMessageForm = (props) => {
  return (
    <form className={d.writeMessage} onSubmit={props.handleSubmit}>
      <Field
        component={Textarea}
        name='newMessageBody'
        placeholder='Enter your message'
        validate={[requiered, maxLength50]}
      />
      <button className={d.send}>Send</button>
    </form>
  )
}

const AddMessageFormRedux = reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm);

export default Dialogs;