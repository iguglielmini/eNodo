import Api from '.';
import APIErrorHandler from './api-error-handler';

export default class ThresholdService extends Api {
  async redeem(thresholdId) {
    try {
      const response = await this.get(`/threshold/${thresholdId}/redeem`);
      return {
        success: response.status === 200,
        data: response.data
      };
    } catch (err) {
      return APIErrorHandler.getErrorMessages(err.response);
    }
  }
}
