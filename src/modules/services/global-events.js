import EventBus from '@modules/services/EventBus';
import AuthService from '@modules/api/api-auth';

export default () => {
  EventBus.subscribe('goToCheckout', ({ navigation }) => {
    // TODO: verify if user is logged
    AuthService.login({
      username: 'belshop-7f790a@inbox.mailtrap.io',
      password: 'N0d01234'
    }).then(async (response) => {
      if (response.success) {
        const { token } = response;
        await AuthService.setToken(token);
        navigation.navigate('Checkout');
      }
    })
      .catch(() => {
        navigation.goBack();
      });
  });
};
