import Api from '.';
import APIErrorHandler from './api-error-handler';
import UserService from './api-user';

class GiftAPI extends Api {
  userService = new UserService();

  async create(data) {
    try {
      const response = await this.post('/gift', data);

      return {
        success: response.status === 201,
        data: response.data
      };
    } catch (err) {
      return APIErrorHandler.getErrorMessages(err.response);
    }
  }

  async redeem(giftId) {
    try {
      const response = await this.patch(`/gift/${giftId}/redeem`);

      return {
        success: response.status === 200,
        data: response.data
      };
    } catch (err) {
      return APIErrorHandler.getErrorMessages(err.response);
    }
  }

  async check(giftId) {
    const { status } = await this.get(`/gift/${giftId}/check`);
    return status === 200;
  }
}

export default GiftAPI;
