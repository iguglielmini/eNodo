import React from 'react';
import { connect } from 'react-redux';

import { changeStatusBar } from '@modules/utils';
import Login from '../Login';
import ProfileComponent from './profile';

function Profile({ navigation, user }) {
  navigation.addListener('focus', () => changeStatusBar('dark-content'));

  return (
    <>
      {user && user.id ? (
        <ProfileComponent navigation={navigation} data={user} />
      ) : (
        <Login navigation={navigation} hideGoBack />
      )}
    </>
  );
}

const mapStateToProps = store => ({
  user: store.user,
});

export default connect(
  mapStateToProps,
  null
)(Profile);
