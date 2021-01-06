import Api from '.';
import APIErrorHandler from './api-error-handler';

export default class RewardService extends Api {
  async checkCampaign(campaignSignupId) {
    try {
      const response = await this.get(`/campaign-signup/${campaignSignupId}/status`);
      return { success: response.status === 200, data: response.data };
    } catch (err) {
      if (err.response.status === 500) return 'Please try again later.';
      return APIErrorHandler.getErrorMessages(err.response);
    }
  }

  async claim(businessId, campaignSignupId) {
    try {
      let Route = `/campaign-signup/business/${businessId}/redeem`;
      if (campaignSignupId) {
        Route = `/campaign-signup/${campaignSignupId}/business/${businessId}/redeem`;
      }

      const response = await this.get(Route);
      return { success: response.status === 200 };
    } catch (err) {
      if (err.response.status === 500) return 'Please try again later.';
      return APIErrorHandler.getErrorMessages(err.response);
    }
  }
}
