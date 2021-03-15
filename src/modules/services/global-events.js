import EventBus from '@modules/services/EventBus';
import DeviceStorage from '@modules/services/device-storage';

export default () => {
  EventBus.subscribe('goToCheckout', async ({ navigation }) => {
    const login = await DeviceStorage.getItem('@BelshopApp:user');
    if (login) {
      navigation.navigate('Checkout');
    } else {
      navigation.navigate('Login', { to: 'Checkout', replace: true });
    }
  });
};
