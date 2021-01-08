import Api from ".";
import APIErrorHandler from "./api-error-handler";

class ShoppingService extends Api {
  async getBasket() {
    return this.get("/shopping/basket")
      .then((response) => {
        if (response.status === 200) {
          return {
            success: true,
            ...response.data,
          };
        }
        return false;
      })
      .catch(({ response }) => {
        if (response && response.status === 500) return "Please try again later.";
        return APIErrorHandler.getErrorMessages(response);
      });
  }

  async deleteBasket() {
    return this.delete("/shopping/basket")
      .then((response) => {
        if (response.status === 200) {
          return {
            success: true,
            ...response.data,
          };
        }
        return false;
      })
      .catch(({ response }) => {
        if (response && response.status === 500) return "Please try again later.";
        return APIErrorHandler.getErrorMessages(response);
      });
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
    return this.post("/shopping/basket/item", data)
      .then((response) => {
        if (response.status === 201) {
          return {
            success: true,
            ...response.data,
          };
        }
        return false;
      })
      .catch(({ response }) => {
        if (response && response.status === 500) return "Please try again later.";
        return APIErrorHandler.getErrorMessages(response);
      });
  }

  async basketUpdateItem(id, data) {
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
            ...response.data,
          };
        }
        return false;
      })
      .catch(({ response }) => {
        if (response && response.status === 500) return "Please try again later.";
        return APIErrorHandler.getErrorMessages(response);
      });
  }

  basketDeleteItem(id) {
    return this.delete(`/shopping/basket/item/${id}`)
      .then((response) => {
        if (response.status === 200) {
          return {
            success: true,
            data: response.data,
          };
        }
        return false;
      })
      .catch(({ response }) => {
        if (response && response.status === 500) return "Please try again later.";
        return APIErrorHandler.getErrorMessages(response);
      });
  }

  async basketCheckout() {
    return this.get("/shopping/basket/checkout")
      .then((response) => {
        if (response.status === 200) {
          return {
            success: true,
            ...response.data,
          };
        }
        return false;
      })
      .catch(({ response }) => {
        if (response && response.status === 500) return "Please try again later.";
        return APIErrorHandler.getErrorMessages(response);
      });
  }

  async basketSetDelivery(data) {
    /*
      DATA STRUCTURE
      {
        "id": "3_551"
      }
    */
    return this.post("/shopping/basket/delivery", data)
      .then((response) => {
        if (response.status === 200) {
          return {
            success: true,
            ...response.data,
          };
        }
        return false;
      })
      .catch(({ response }) => {
        if (response && response.status === 500) return "Please try again later.";
        return APIErrorHandler.getErrorMessages(response);
      });
  }

  async basketApplyCoupon(data) {
    /*
      DATA STRUCTURE
      {
        "coupon": "NATAL2020"
      }
    */
    return this.post("/shopping/basket/coupon", data)
      .then((response) => {
        if (response.status === 200) {
          return {
            success: true,
            ...response.data,
          };
        }
        return false;
      })
      .catch(({ response }) => {
        if (response && response.status === 500) return "Please try again later.";
        return APIErrorHandler.getErrorMessages(response);
      });
  }

  async basketDeleteCoupon(data) {
    /*
      DATA STRUCTURE
      {
        "coupon": "NATAL2020"
      }
    */
    return this.delete("/shopping/basket/coupon", data)
      .then((response) => {
        if (response.status === 200) {
          return {
            success: true,
            ...response.data,
          };
        }
        return false;
      })
      .catch(({ response }) => {
        if (response && response.status === 500) return "Please try again later.";
        return APIErrorHandler.getErrorMessages(response);
      });
  }

  async basketSetPostalCode(data) {
    /*
      DATA STRUCTURE
      {
        "postalCode": "96085000"
      }
    */
    return this.post("/shopping/basket/postal-code", data)
      .then((response) => {
        if (response.status === 200) {
          return {
            success: true,
            ...response.data,
          };
        }
        return false;
      })
      .catch((err) => {
        if (err.response.status === 500) return "Please try again later.";
        return APIErrorHandler.getErrorMessages(err.response);
      });
  }

  async getPostCode(postalCode) {
    return this.get(`/shopping/postal-code/${postalCode}`)
      .then((response) => {
        if (response.status === 200) {
          return {
            success: true,
            ...response.data,
          };
        }
        return false;
      })
      .catch(({ response }) => {
        if (response && response.status === 500) return "Please try again later.";
        return APIErrorHandler.getErrorMessages(response);
      });
  }
}
const ApiShopping = new ShoppingService();

export default ApiShopping;
