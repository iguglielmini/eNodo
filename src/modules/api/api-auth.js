import Api from '.';
import APIRturn from './api-return';

class AuthService extends Api {
  async login(data) {
    /**
      DATA STRUCTURE
      {
        "username": "thiago.santos@nodo.cc",
        "password": "password123 "
      }
    */
    return APIRturn(this.post('/auth/login', data), 201, 500);
  }

  async logout() {
    return APIRturn(this.post('/auth/logout'));
  }

  async recovery(data) {
    /**
      DATA STRUCTURE
      {
        "username": "thiago.santos@nodo.cc",
        "cpf": "11144477735"
      }
    */
    return APIRturn(this.post('/auth/recover', data));
  }

  async session() {
    return APIRturn(this.get('/auth/session'));
  }
}

export default new AuthService();
