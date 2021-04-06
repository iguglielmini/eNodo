import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { BGGREY } from '@assets/style/colors';
import { changeStatusBar } from '@modules/utils';
import Login from '../Login';
import ProfileComponent from './profile';

function Profile({ navigation, user }) {
  useEffect(() => {
    changeStatusBar('dark-content', BGGREY);
  }, []);

  return (
    <>
      {user && user.id ? (
        <ProfileComponent navigation={navigation} user={user} />
      ) : (
        <Login
          navigation={navigation}
          hideGoBack
        />
      )}
    </>
  );
}

const mapStateToProps = store => ({
  user: store.user,
});

export default connect(
  mapStateToProps,
  null,
)(Profile);
