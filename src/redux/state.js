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
      ]
    }
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log('State changed');
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
  subscribe(observer) {
    this._callSubscriber = observer;
  }
}

export default store;