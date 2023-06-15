const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';


let store = {
  _state: {
    profilePage: {
      postData: [
        { id: 1, message: 'Hello Everyone!', likes: 20 },
        { id: 2, message: 'Hi, it is my first project in React!', likes: 30 }
      ],
      newsPostText: 'Assalamu aleykum!'
    },
    dialogsPage: {
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
    }
  },
  _callSubscriber() {
    console.log('State changed');
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  addPost() {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newsPostText,
      likes: 0
    };
    this._state.profilePage.postData.push(newPost);
    this._state.profilePage.newsPostText = '';
    this._callSubscriber(this._state);
  },
  updateNewPostText(newText) {
    this._state.profilePage.newsPostText = newText;
    this._callSubscriber(this._state);
  },

  dispatch(action) { // {type: 'ADD-POST'}
    if (action.type === ADD_POST) {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newsPostText,
        likes: 0
      };
      this._state.profilePage.postData.push(newPost);
      this._state.profilePage.newsPostText = '';
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newsPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
      this._state.dialogsPage.newMessageBody = action.body;
      this._callSubscriber(this._state);
    } else if (action.type === SEND_MESSAGE) {
      let body = this._state.dialogsPage.newMessageBody;
      this._state.dialogsPage.newMessageBody = '';
      this._state.dialogsPage.messages.push({ id: 6, message: body });
      this._callSubscriber(this._state);
    }
  }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })
export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default store;