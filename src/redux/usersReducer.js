const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
  users: [
    {
      id: 1, photoUrl: 'https://avatars.githubusercontent.com/u/12345678?v=4',
      followed: true, firstName: 'Farhod', status: 'Front-End Developer', location: { city: 'Dushanbe', country: 'Tajikistan' }
    },
    {
      id: 2, photoUrl: 'https://avatars.githubusercontent.com/u/12345678?v=4',
      followed: false, firstName: 'Somon', status: 'Full-Stack Developer', location: { city: 'Dushanbe', country: 'Tajikistan' }
    },
    {
      id: 3, photoUrl: 'https://avatars.githubusercontent.com/u/12345678?v=4',
      followed: false, firstName: 'Umar', status: 'Front-End Developer', location: { city: 'Dushanbe', country: 'Tajikistan' }
    },
    {
      id: 4, photoUrl: 'https://avatars.githubusercontent.com/u/12345678?v=4',
      followed: true, firstName: 'Alisher', status: 'Front-End Developer', location: { city: 'Dushanbe', country: 'Tajikistan' }
    },
  ],
};

const usersReducer = (state = initialState, action) => {

  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return { ...user, followed: true }
          }
          return user
        })
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return { ...user, followed: false }
          }
          return user
        })
      };
    case SET_USERS:
      return {
        ...state,
        users: [...state.users, ...action.users]
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

export const followAC = (userId) => ({ type: FOLLOW, userId })
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId })
export const setUsersAC = (users) => ({ type: SET_USERS, users })

export default usersReducer;