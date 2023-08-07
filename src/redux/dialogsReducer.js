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
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let body = action.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, { id: 6, message: body }]
      }
    default:
      return state;
  }
}

export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody })

export default dialogsReducer;