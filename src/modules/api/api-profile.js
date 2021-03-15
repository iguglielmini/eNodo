import Api from '.';
import APIRturn from './utils/return';

export default new class ProfileService extends Api {
  async getCpf(cpf) {
    return APIRturn(this.get(`/profile/cpf/${cpf}`));
  }

  async getAddresses() {
    return APIRturn(this.get('/profile/address'));
  }

  async getAddress(id) {
    return APIRturn(this.get(`/profile/address/${id}`));
  }

  async createAddress(data) {
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
    return APIRturn(this.post('/profile/address', data));
  }

  async updateAddress(id, data) {
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
    return APIRturn(this.put(`/profile/address/${id}`, data));
  }

  async deleteAddress(id) {
    return APIRturn(this.delete(`/profile/address/${id}`));
  }

  async getWhishlisties() {
    return APIRturn(this.get('/profile/whishlist'));
  }

  async getWhishlist(id) {
    return APIRturn(this.get(`/profile/whishlist/${id}`));
  }

  async createWhishlist(data) {
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
    return APIRturn(this.post('/profile/whishlist', data));
  }

  async addItemWhishlist(id, data) {
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
    return APIRturn(this.post(`/profile/whishlist/${id}/item`, data));
  }

  async updateWhishlist(id, data) {
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
    return APIRturn(this.put(`/profile/whishlist/${id}`, data));
  }

  async updateItemWhishlist(id, item, data) {
    /*
      DATA SCTRUTURE
      {
        "quantity": 2
      }
    */
    return APIRturn(this.put(`/profile/whishlist/${id}/item/${item}`, data));
  }

  async deleteWhishlist(id) {
    return APIRturn(this.delete(`/profile/whishlist/${id}`));
  }

  async deleteIitemWhishlist(id, item) {
    return APIRturn(this.delete(`/profile/whishlist/${id}/item/${item}`));
  }

  async getEmail(email) {
    return APIRturn(this.get(`/profile/email/${email}`));
  }

  async getProfile() {
    return APIRturn(this.get('/profile'));
  }

  async createProfile(data) {
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
    return APIRturn(this.post('/profile', data));
  }

  async updateProfile(data) {
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
    return APIRturn(this.put('/profile', data));
  }
}();
