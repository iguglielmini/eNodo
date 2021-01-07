import Api from '.';
import APIErrorHandler from './api-error-handler';

export default class ProdutcService extends Api {
  getProduct(slug) {
    return this.get(`/product/${slug}`)
      .then((response) => {
        if (response.status === 200) {
          return {
            success: true,
            data: response.data
          };
        }
        return false;
      })
      .catch((err) => {
        if (err.response.status === 500) return 'Please try again later.';
        return APIErrorHandler.getErrorMessages(err.response);
      });
  }

  getProductAssociations(slug) {
    return this.get(`/product/${slug}/associations`)
      .then((response) => {
        if (response.status === 200) {
          return {
            success: true,
            data: response.data
          };
        }
        return false;
      })
      .catch((err) => {
        if (err.response.status === 500) return 'Please try again later.';
        return APIErrorHandler.getErrorMessages(err.response);
      });
  }

  getProductReview(slug) {
    return this.get(`/product/${slug}/review`)
      .then((response) => {
        if (response.status === 200) {
          return {
            success: true,
            data: response.data
          };
        }
        return false;
      })
      .catch((err) => {
        if (err.response.status === 500) return 'Please try again later.';
        return APIErrorHandler.getErrorMessages(err.response);
      });
  }

  createProductReview(slug, data) {
    /* DATA STRUCTURE
      {
        "name": "Daniel",
        "email": "daniel@belshop.com.br",
        "title": "Produto Excelente",
        "content": "Exemplo de avaliação de um produto",
        "rating": 5
      }
    */
    return this.post(`/product/${slug}/review`, data)
      .then((response) => {
        if (response.status === 200) {
          return {
            success: true,
            data: response.data
          };
        }
        return false;
      })
      .catch((err) => {
        if (err.response.status === 500) return 'Please try again later.';
        return APIErrorHandler.getErrorMessages(err.response);
      });
  }
}
