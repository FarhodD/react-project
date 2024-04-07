import { connect } from 'react-redux';
import { addPostActionCreator } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';

let mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage,
    newsPostText: state.profilePage.newsPostText,
    posts: state.profilePage.postData
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    addPost: (newsPostText) => dispatch(addPostActionCreator(newsPostText)),
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;