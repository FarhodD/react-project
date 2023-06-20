const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
  dialogsData: [
    { id: 1, name: 'Somon' },
    { id: 2, name: 'Firdavs' },
    { id: 3, name: 'Faridun' },
    { id: 4, name: 'Alisher' },
    { id: 5, name: 'Fidoalloh' }
  ],
  messages: [
    { id: 1, message: "Hello, how are you?" },
    { id: 2, message: "Thanks, I'm fine" },
    { id: 3, message: "What do you do?" },
    { id: 4, message: "Do my homework" },
    { id: 5, message: "Cool!" },
    { id: 6, message: "Perfect!" }
  ],
  newMessageBody: ""
};

const dialogsReducer = (state = initialState, action) => {
  if (action.type === UPDATE_NEW_MESSAGE_BODY) {
    state.newMessageBody = action.body;
  } else if (action.type === SEND_MESSAGE) {
    let body = state.newMessageBody;
    state.newMessageBody = '';
    state.messages.push({ id: 6, message: body });
  }

  return state;
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })

export default dialogsReducer;