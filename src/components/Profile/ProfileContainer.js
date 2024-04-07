import React from 'react';
import p from './Profile.module.css';
import Profile from './Profile';
import axios from 'axios';
import { connect } from 'react-redux';
import setUserProfile from '../../redux/profileReducer';
import { Redirect, withRouter } from 'react-router-dom';
import { WithAuthRedirect } from '../../hoc/WithAuthRedirect';

class ProfileContainer extends React.Component {
  componentDidMount() {
    // let userId = this.props.match.params.userId;
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile`)
      .then(response => {
        this.props.setUserProfile(response.data)
      })
  }

  render() {
    return (
      <div className={p.content}>
        <Profile {...this.props} profile={this.props.profile} />
      </div>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile
  }
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setUserProfile })(WithUrlDataContainerComponent);