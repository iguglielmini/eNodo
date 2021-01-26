import Api from '.';
import APIRturn from './utils/return';

export default new class HomeService extends Api {
  async getHome() {
    return APIRturn(this.get('/home'));
  }
}();
