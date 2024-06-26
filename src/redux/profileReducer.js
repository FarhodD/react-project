const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
  postData: [
    { id: 1, message: 'Hello Everyone!', likes: 20 },
    { id: 2, message: 'Hi, it is my first project in React!', likes: 30 }
  ],
  profile: null
};

const profileReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: action.newsPostText,
        likes: 0
      };
      return {
        ...state,
        postData: [...state.postData, newPost],
        newsPostText: ''
      }
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile
      };
    }
    default:
      return state;
  }
}

export const addPostActionCreator = (newsPostText) => ({ type: ADD_POST, newsPostText })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export default profileReducer;