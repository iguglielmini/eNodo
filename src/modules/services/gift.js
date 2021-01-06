import AsyncStorage from '@react-native-community/async-storage';
import NavigatorService from '../navigator';
import UserAPI from '../api/api-user';
import GiftAPI from '../api/api-gift';
import { Notification } from '~/App';
import eventBus from './EventBus';

class GiftService {
  userAPI = new UserAPI();

  GiftAPI = new GiftAPI();

  giftKey = '@BelshopApp:gift';

  async openModal() {
    const data = await AsyncStorage.getItem(this.giftKey);
    const params = JSON.parse(data);

    if (!params) return;

    const isValid = await this.validate(params.gift.id);

    const { routeName } = NavigatorService.getCurrentRoute();
    if (routeName === 'MyCards') return;

    if (isValid) {
      eventBus.notify('closeModal');
      NavigatorService.navigate('GiftRedeemModal', params);
    } else {
      Notification.current.send(3800, {
        title: 'Oops, something went wrong',
        text: 'Sorry, but this gift is not available anymore.',
        type: 'error'
      });
      AsyncStorage.removeItem(this.giftKey);
    }
  }

  async getGiftFromStorage() {
    const data = await AsyncStorage.getItem(this.giftKey);
    const params = JSON.parse(data);

    return params;
  }

  async redeemIfPossible() {
    const params = await this.canRedeem();
    await AsyncStorage.removeItem(this.giftKey);

    if (params) {
      this.GiftAPI.getToken();
      const redeemResponse = await this.GiftAPI.redeem(params.gift.id);

      return redeemResponse;
    }

    return { success: false };
  }

  async canRedeem() {
    const params = await this.getGiftFromStorage();

    if (!params) return false;

    const isUserLoggedIn = await this.userAPI.getToken();
    const isValid = await this.validate(params.gift.id);

    return isUserLoggedIn && isValid ? params : false;
  }

  async validate(giftId) {
    try {
      const isValid = await this.GiftAPI.check(giftId);

      return isValid;
    } catch (e) {
      if (e.response && e.response.status === 404) {
        Notification.current.send(3800, {
          title: 'Oops, something went wrong',
          text: 'Sorry, but this gift is not available anymore.',
          type: 'error'
        });
      } else {
        Notification.current.send(3800, {
          title: 'Oops, something went wrong',
          text: 'Please, try again later.',
          type: 'error'
        });
      }

      return false;
    }
  }

  async register(gift) {
    await AsyncStorage.setItem(this.giftKey, JSON.stringify(gift));

    const isUserLoggedIn = await this.userAPI.getToken();

    if (isUserLoggedIn) {
      const { routeName, index } = NavigatorService.getCurrentRoute();

      if (routeName !== 'OnBoarding' && index !== 2 && index !== 0) {
        this.openModal();
      }
    }
  }
}

export default new GiftService();
