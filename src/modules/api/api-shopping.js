import Api from '.';
import APIErrorHandler from './api-error-handler';

class ShoppingService extends Api {
  getBasket() {
    return this.get('/shopping/basket')
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

  deleteBasket() {
    return this.delete('/shopping/basket')
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

  basketAddItem(data) {
    /*
      DATA STRUCTURE
      {
        "products": [
          {
            "product": 123,
            "sku": 456,
            "quantity": 1
          }
        ]
      }
    */
    return this.post('/shopping/basket/item', data)
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

  basketUpdateItem(id, data) {
    /*
      DATA STRUCTURE
      {
        "quantity": 1
      }
    */
    return this.put(`/shopping/basket/item/${id}`, data)
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

  basketDeleteItem(id) {
    return this.delete(`/shopping/basket/item/${id}`)
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

  basketCheckout() {
    return this.get('/shopping/basket/checkout')
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

  basketSetDelivery(data) {
    /*
      DATA STRUCTURE
      {
        "id": "3_551"
      }
    */
    return this.post('/shopping/basket/delivery', data)
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

  basketApplyCoupon(data) {
    /*
      DATA STRUCTURE
      {
        "coupon": "NATAL2020"
      }
    */
    return this.post('/shopping/basket/coupon', data)
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

  basketDeleteCoupon(data) {
    /*
      DATA STRUCTURE
      {
        "coupon": "NATAL2020"
      }
    */
    return this.delete('/shopping/basket/coupon', data)
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

  basketSetPostalCode(data) {
    /*
      DATA STRUCTURE
      {
        "postalCode": "96085000"
      }
    */
    return this.post('/shopping/basket/postal-code', data)
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

  getPostCode(postalCode) {
    return this.get(`/shopping/postal-code/${postalCode}`)
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
const ApiShopping = new ShoppingService();

export default ApiShopping;
