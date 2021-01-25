import Api from '.';
import APIRturn from './api-return';

export default class CategoryService extends Api {
  getCategory(slug) {
    return APIRturn(this.get(`/category/${slug}`));
  }
}
