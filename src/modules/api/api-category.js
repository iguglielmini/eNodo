import Api from '.';
import APIRturn from './utils/return';

export default new class CategoryService extends Api {
  async getCategory(slug) {
    return APIRturn(this.get(`/category/${slug}`));
  }
}();
