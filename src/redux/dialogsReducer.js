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
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      return {
        ...state,
        newMessageBody: action.body
      }
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      return {
        ...state,
        newMessageBody: '',
        messages: [...state.messages, { id: 6, message: body }]
      }
    default:
      return state;
  }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })

export default dialogsReducer;