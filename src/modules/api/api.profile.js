import Api from '.';
import APIErrorHandler from './api-error-handler';

export default class ProfileService extends Api {
  getCpf(cpf) {
    return this.get(`/profile/cpf/${cpf}`)
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

  getAddresses() {
    return this.get('/profile/address')
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

  getAddress(id) {
    return this.get(`/profile/address/${id}`)
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

  createAddress(data) {
    /*
      DATA SCTRUTURE
      {
        "postalCode": "96010000",
        "address": "Rua Um",
        "city": "Pelotas",
        "neighbourhood": "Centro",
        "state": "Rio Grande do Sul",
        "stateCode": "RS",
        "country": "Brasil",
        "countryCode": "BR",
        "name": "Casa",
        "contactName": "Maria Silva",
        "number": "123",
        "notes": "Apto 101",
        "reference": "Esquina Rua 02",
        "default": false
      }
    */
    return this.post('/profile/address', data)
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

  updateAddress(id, data) {
    /*
      DATA SCTRUTURE
      {
        "postalCode": "96010000",
        "address": "Rua Um",
        "city": "Pelotas",
        "neighbourhood": "Centro",
        "state": "Rio Grande do Sul",
        "stateCode": "RS",
        "country": "Brasil",
        "countryCode": "BR",
        "name": "Casa",
        "contactName": "Maria Silva",
        "number": "123",
        "notes": "Apto 101",
        "reference": "Esquina Rua 02",
        "default": false
      }
    */
    return this.put(`/profile/address/${id}`, data)
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

  deleteAddress(id) {
    return this.delete(`/profile/address/${id}`)
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

  getWhishlisties() {
    return this.get('/profile/whishlist')
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

  getWhishlist(id) {
    return this.get(`/profile/whishlist/${id}`)
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

  createWhishlist(data) {
    /*
      DATA SCTRUTURE
      {
        "name": "Favoritos do App",
        "description": "Lista de produtos marcados como favoritos no App",
        "password": "senha123",
        "private": false,
        "addressId": 1,
        "expiration": 1609342606952
      }
    */
    return this.post('/profile/whishlist', data)
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

  addItemWhishlist(id, data) {
    /*
      DATA SCTRUTURE
      {
        "items": [
          {
            "id": 2347,
            "quantity": 2
          }
        ]
      }
    */
    return this.post(`/profile/whishlist/${id}/item`, data)
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

  updateWhishlist(id, data) {
    /*
      DATA SCTRUTURE
      {
        "name": "Favoritos do App",
        "description": "Lista de produtos marcados como favoritos no App",
        "password": "senha123",
        "private": false,
        "addressId": 1,
        "expiration": 1609342606952
      }
    */
    return this.put(`/profile/whishlist/${id}`, data)
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

  updateItemWhishlist(id, item, data) {
    /*
      DATA SCTRUTURE
      {
        "quantity": 2
      }
    */
    return this.put(`/profile/whishlist/${id}/item/${item}`, data)
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

  deleteWhishlist(id) {
    return this.delete(`/profile/whishlist/${id}`)
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

  deleteIitemWhishlist(id, item) {
    return this.delete(`/profile/whishlist/${id}/item/${item}`)
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

  getEmail(email) {
    return this.get(`/profile/email/${email}`)
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

  getProfile() {
    return this.get('/profile')
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

  createProfile(data) {
    /*
      DATA STRUCTURE
      {
        "email": "thiago.santos@nodo.cc",
        "name": "Thiago",
        "surname": "Santos",
        "birthDate": "13/02/1985",
        "gender": "M",
        "cpf": "11144477735",
        "password": "Senha1234"
      }
    */
    return this.post('/profile', data)
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

  updateProfile(data) {
    /*
      DATA STRUCTURE
      {
        "email": "thiago.santos@nodo.cc",
        "name": "Thiago",
        "surname": "Santos",
        "birthDate": "13/02/1985",
        "gender": "M",
        "cpf": "11144477735"
      }
    */
    return this.put('/profile', data)
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
