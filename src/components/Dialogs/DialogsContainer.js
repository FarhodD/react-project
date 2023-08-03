import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { WithAuthRedirect } from '../../hoc/WithAuthRedirect';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';



let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      dispatch(sendMessageCreator())
    },
    updateNewMessageBody: (body) => {
      dispatch(updateNewMessageBodyCreator(body))
    }
  }
}


let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
    isAuth: state.auth.isAuth
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  WithAuthRedirect
)(Dialogs);