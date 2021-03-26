import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { changeStatusBar } from '@modules/utils';
import Login from '../Login';
import ProfileComponent from './profile';

function Profile({ navigation, user }) {
  const [profileData, setProfileData] = useState(false);

  useEffect(() => {
    changeStatusBar('dark-content');
  }, []);

  useEffect(() => {
    setProfileData(user && user.id ? user : false);
  }, [user]);

  return (
    <>
      {profileData ? (
        <ProfileComponent navigation={navigation} data={profileData} />
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
