import AsyncStorage from '@react-native-community/async-storage';
import NavigatorService from '../navigator';

import UserAPI from '../api/api-user';
import eventBus from './EventBus';

class ReferralBusinessInvitiationService {
  userAPI = new UserAPI();

  slug = 'referral-business-invitation';

  storageKey = `@BelshopApp:${this.slug}`;

  async openBusiness() {
    const businessId = await AsyncStorage.getItem(this.storageKey);
    if (!businessId) return;

    const { routeName } = NavigatorService.getCurrentRoute();
    if (routeName === 'MyCards') return;

    eventBus.notify('closeModal');
    await AsyncStorage.removeItem(this.storageKey);
    NavigatorService.navigate('Business', { data: { id: businessId } }, businessId);
  }

  async register(businessId) {
    await AsyncStorage.setItem(this.storageKey, businessId);

    const isUserLoggedIn = await this.userAPI.getToken();

    if (isUserLoggedIn) {
      const { routeName, index } = NavigatorService.getCurrentRoute();

      if (routeName !== 'OnBoarding' && index !== 2 && index !== 0) {
        this.openBusiness();
      }
    }
  }
}

export default new ReferralBusinessInvitiationService();
