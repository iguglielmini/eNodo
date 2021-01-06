import AsyncStorage from '@react-native-community/async-storage';
import NavigatorService from '../navigator';

import UserAPI from '../api/api-user';
import eventBus from './EventBus';

class ReferralOfferService {
  userAPI = new UserAPI();

  slug = 'referral-offer';

  storageKey = `@BelshopApp:${this.slug}`;

  async openOffer() {
    const offerId = await AsyncStorage.getItem(this.storageKey);
    if (!offerId) return;

    const { routeName } = NavigatorService.getCurrentRoute();
    if (routeName === 'MyCards') return;

    eventBus.notify('closeModal');
    await AsyncStorage.removeItem(this.storageKey);
    NavigatorService.navigate('SingleOffer', { offerData: {}, id: offerId }, offerId);
  }

  async register(offerId) {
    await AsyncStorage.setItem(this.storageKey, offerId);

    const isUserLoggedIn = await this.userAPI.getToken();

    if (isUserLoggedIn) {
      const { routeName, index } = NavigatorService.getCurrentRoute();

      if (routeName !== 'OnBoarding' && index !== 2 && index !== 0) {
        this.openOffer();
      }
    }
  }
}

export default new ReferralOfferService();
