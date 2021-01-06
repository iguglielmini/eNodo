import { saveMyCampaigns, saveShareCampaigns } from '@redux/actions/campaign';
import Store from '@redux';
import Api from '.';
import APIErrorHandler from './api-error-handler';
import eventBus from '../services/EventBus';
import NavigatorService from '../navigator';

class CampaignService extends Api {
  getCampaign() {
    return this.get('/campaign/referral')
      .then((response) => {
        if (response.status === 200) {
          return response.data;
        }
        return false;
      })
      .catch((error) => {
        const message = APIErrorHandler.getErrorMessages(error.response).messages.join('\n');
        return message;
      });
  }

  checkMyCampaigns() {
    return this.get('/campaign-signup/status').then((response) => {
      if (response.status === 200) {
        return response.data;
      }
      return false;
    })
      .catch((error) => {
        const message = APIErrorHandler.getErrorMessages(error.response).messages.join('\n');
        return message;
      });
  }

  validateCampaign = (state) => {
    if (state !== 'active') return;
    try {
      this.getCampaign().then((res) => {
        Store.dispatch(saveShareCampaigns(res));
      });

      this.checkMyCampaigns().then((res) => {
        if (!res.id) return;
        if (res.redeemed) {
          eventBus.unsubscribe('AppState', statement.validateCampaign);
          return;
        }

        Store.dispatch(saveMyCampaigns(res));

        const { routeName, index } = NavigatorService.getCurrentRoute();

        if (routeName !== 'OnBoarding' && index !== 2) NavigatorService.navigate('RewardCoinsModal');
      });
    // eslint-disable-next-line no-empty
    } catch {}
  }

  subscribe = () => {
    this.validateCampaign('active');
    eventBus.subscribe('AppState', statement.validateCampaign);
  }
}


const statement = new CampaignService();
statement.validateCampaign();

eventBus.subscribe('AppState', statement.validateCampaign);
export const initCampaign = statement.subscribe;
export default statement;
