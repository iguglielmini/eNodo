import Api from '.';
import APIRturn from './api-return';

class ShoppingService extends Api {
  async getBasket() {
    return APIRturn(this.get('/shopping/basket'));
  }

  async deleteBasket() {
    return APIRturn(this.delete('/shopping/basket'));
  }

  async basketAddItem(data) {
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
    return APIRturn(this.post('/shopping/basket/item', data), 201, 500);
  }

  async basketUpdateItem(id, data) {
    /*
      DATA STRUCTURE
      {
        "quantity": 1
      }
    */
    return APIRturn(this.put(`/shopping/basket/item/${id}`, data));
  }

  async basketDeleteItem(id) {
    return APIRturn(this.delete(`/shopping/basket/item/${id}`));
  }

  async basketCheckout() {
    return APIRturn(this.get('/shopping/basket/checkout'));
  }

  async basketSetDelivery(data) {
    /*
      DATA STRUCTURE
      {
        "id": "3_551"
      }
    */
    return APIRturn(this.post('/shopping/basket/delivery', data));
  }

  async basketApplyCoupon(data) {
    /*
      DATA STRUCTURE
      {
        "coupon": "NATAL2020"
      }
    */
    return APIRturn(this.post('/shopping/basket/coupon', data));
  }

  async basketDeleteCoupon(data) {
    /*
      DATA STRUCTURE
      {
        "coupon": "NATAL2020"
      }
    */
    return APIRturn(this.delete('/shopping/basket/coupon', data));
  }

  async basketSetPostalCode(data) {
    /*
      DATA STRUCTURE
      {
        "postalCode": "96085000"
      }
    */
    return APIRturn(this.post('/shopping/basket/postal-code', data));
  }

  async getPostCode(postalCode) {
    return APIRturn(this.get(`/shopping/postal-code/${postalCode}`));
  }
}

export default new ShoppingService();
