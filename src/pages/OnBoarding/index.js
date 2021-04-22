import React, { Component } from 'react';
import { View, SafeAreaView } from 'react-native';
// Components
import CarouselOnBoarding from '@components/organisms/CarouselOnBoarding';
// Modules
import { changeStatusBar } from '@modules/utils';
import DeviceStorage from '@modules/services/device-storage';

// Mock
import OnBoardingMock from '@mock/OnBoardingMock';

// Styles
import DefaultStyles from '@assets/style/default';
import { PRIMARY } from '@assets/style/colors';
import Styles from './styles';

class OnBoarding extends Component {
  constructor(props) {
    super(props);
    changeStatusBar('dark-content', PRIMARY);

    this.state = {
      loading: true,
    };
  }

  // eslint-disable-next-line camelcase
  UNSAFE_componentWillMount() {
    this.verifyFinished();
  }

  async verifyFinished() {
    const { navigation } = this.props;

    const finished = await DeviceStorage.getItem(
      '@BelshopApp:finishedOnboarding'
    );

    if (finished) {
      return navigation.navigate('Home');
    }

    return this.setState({ loading: false });
  }

  render() {
    const { navigation } = this.props;
    const { loading } = this.state;

    return (
      <SafeAreaView style={DefaultStyles.viewPink}>
        <View style={Styles.containerPage}>
          {!loading && (
            <CarouselOnBoarding data={OnBoardingMock} navigation={navigation} />
          )}
        </View>
      </SafeAreaView>
    );
  }
}

export default OnBoarding;
