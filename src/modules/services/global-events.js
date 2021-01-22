import EventBus from '@modules/services/EventBus';
import AuthService from '@modules/api/api-auth';

export default () => {
  EventBus.subscribe('goToCheckout', ({ navigation }) => {
    // TODO: verify if user is logged
    AuthService.login({
      username: 'thiago.santos@nodo.cc',
      password: 'thiagoss'
    }).then((response) => {
      if (response.success) {
        const { token } = response;
        AuthService.setToken(token);
        navigation.navigate('Checkout');
      }
    })
      .catch(() => {
        navigation.goBack();
      });
  });
};
