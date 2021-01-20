import Api from '.';
import APIErrorHandler from './api-error-handler';

class HomeService extends Api {
  async getHome() {
    return this.get('/home')
      .then(({ status, data }) => {
        if (status === 200) return data;
        return false;
      })
      .catch(({ response }) => {
        if (response && response.status === 500)
          return 'Please try again later.';
        return APIErrorHandler.getErrorMessages(response);
      });
  }
}

export default new HomeService();
