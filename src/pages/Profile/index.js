import React, { Component } from 'react';
import { connect } from 'react-redux';

import { changeStatusBar } from '@modules/utils';

import Login from '../Login';
import ProfileComponent from './profile';

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profileData: false,
    };

    props.navigation.addListener('focus', () =>
      changeStatusBar('dark-content')
    );
  }

  componentDidMount() {
    const { user } = this.props;
    if (user && user.id) this.setState({ profileData: user });
  }

  render() {
    const { navigation } = this.props;
    const { profileData } = this.state;

    return (
      <>
        {profileData ? (
          <ProfileComponent navigation={navigation} data={profileData} />
        ) : (
          <Login navigation={navigation} hideGoBack />
        )}
      </>
    );
  }
}

const mapStateToProps = store => ({
  user: store.user,
});

export default connect(
  mapStateToProps,
  null
)(Profile);
