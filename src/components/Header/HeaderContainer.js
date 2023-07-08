import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { setAuthUserData } from '../../redux/authReducer';

class HeaderContainer extends React.Component {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, { withCredentials: true })
      .then(response => {
        console.log(response);
        // debugger;
        // if (response.data.resultCode === 0) {
        //   let { userId, email, login } = response.data.data;
        //   this.props.setAuthUserData(userId, email, login);
        // }
      })
  }

  render() {
    return (
      <Header {...this.props} />
    )

  }
}

let mapStateToProps = (state) => (
  {

  }
)

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);