import Api from '.';
import APIRturn from './api-return';

export default class ProdutcService extends Api {
  async getProduct(slug) {
    return APIRturn(this.get(`/product/${slug}`));
  }

  async getProductAssociations(slug) {
    return APIRturn(this.get(`/product/${slug}/associations`));
  }

  async getProductReview(slug) {
    return APIRturn(this.get(`/product/${slug}/review`));
  }

  async createProductReview(slug, data) {
    /* DATA STRUCTURE
      {
        "name": "Daniel",
        "email": "daniel@belshop.com.br",
        "title": "Produto Excelente",
        "content": "Exemplo de avaliação de um produto",
        "rating": 5
      }
    */
    return APIRturn(this.post(`/product/${slug}/review`, data));
  }
}
