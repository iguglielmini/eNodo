import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import ToggleSwitch from 'toggle-switch-react-native';
/* Components */
import Title from '@components/atoms/Title';
// Icons
import ArrowVIcon from '@assets/svg/arrowv';
// Styles
import Styles from './styles';
// Mock
import PushNotificationMock from '../../mock/PushNotificationMock';

class Notification extends Component {
  constructor(props) {
    super(props);

    this.state = {
      actived: [],
      notificationActive: false,
    };
  }

  addOrRemove = (value) => {
    const { actived } = this.state;
    const index = actived.indexOf(value);

    if (index === -1) actived.push(value);
    else actived.splice(index, 1);
    this.setState({ actived });
  };

  handleActivedAllNotification = (isOn) => {
    this.setState({
      actived: [],
      notificationActive: isOn,
    });
  };

  handleOnClick = (item, index, isOn) => {
    this.addOrRemove(index);
    console.log(isOn, 'aqui');
  };

  render() {
    const { navigation, user } = this.props;
    const { actived, notificationActive } = this.state;
    console.log(user, 'usuario dados');
    return (
      <SafeAreaView>
        {/* Header */}
        <View style={Styles.contentHeader}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <ArrowVIcon />
          </TouchableOpacity>
        </View>
        <ScrollView alwaysBounceVertical showsVerticalScrollIndicator={false}>
          <View style={Styles.container}>
            <Title title="Notificação" style={Styles.NotificationTitle} />
            {/* Section 1 */}
            <View style={Styles.toggleContent}>
              <View style={Styles.toggleSection}>
                <View style={Styles.toggleSectionTitle}>
                  <Text style={Styles.toggleTitle}>Ativar notificação</Text>
                  <Text style={Styles.toggleSubTitle}>
                    Receba nossas notificação
                  </Text>
                </View>
                <ToggleSwitch
                  isOn={notificationActive}
                  onColor="green"
                  offColor="gray"
                  size="large"
                  onToggle={isOn => this.handleActivedAllNotification(isOn)}
                />
              </View>
            </View>
            {user.id && PushNotificationMock.map((item, index) => {
              const key = index;
              const selfIsOn = actived.indexOf(key) !== -1;
              return (
                <View style={Styles.toggleContent} key={key}>
                  <View style={Styles.toggleSection}>
                    <View style={Styles.toggleSectionTitle}>
                      <Text style={Styles.toggleTitle}>{item.title}</Text>
                      <Text style={Styles.toggleSubTitle}>{item.content}</Text>
                    </View>
                    <ToggleSwitch
                      isOn={
                        // eslint-disable-next-line no-nested-ternary
                        notificationActive
                          ? selfIsOn
                            ? !notificationActive
                            : true
                          : false
                      }
                      disabled={!notificationActive}
                      onColor="green"
                      offColor="gray"
                      size="large"
                      onToggle={isOn => this.handleOnClick(item, key, isOn)}
                    />
                  </View>
                </View>
              );
            })}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = store => ({ user: store.user });

export default connect(mapStateToProps, null)(Notification);
