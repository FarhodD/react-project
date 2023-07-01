const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
  postData: [
    { id: 1, message: 'Hello Everyone!', likes: 20 },
    { id: 2, message: 'Hi, it is my first project in React!', likes: 30 }
  ],
  newsPostText: 'Assalamu aleykum!'
};

const profileReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: state.newsPostText,
        likes: 0
      };
      return {
        ...state,
        postData: [...state.postData, newPost],
        newsPostText: ''
      }
    }
    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newsPostText: action.newText
      };
    }
    default:
      return state;
  }

  // if (action.type === ADD_POST) {
  //   let newPost = {
  //     id: 5,
  //     message: state.newsPostText,
  //     likes: 0
  //   };
  //   state.postData.push(newPost);
  //   state.newsPostText = '';
  // } else if (action.type === UPDATE_NEW_POST_TEXT) {
  //   state.newsPostText = action.newText;
  // }
  // return state;
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export default profileReducer;