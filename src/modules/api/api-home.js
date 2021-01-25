import Api from '.';
import APIRturn from './api-return';

class HomeService extends Api {
  async getHome() {
    return APIRturn(this.get('/home'));
  }
}

export default new HomeService();
