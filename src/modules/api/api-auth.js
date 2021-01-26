import Api from '.';
import APIRturn from './utils/return';

export default new class AuthService extends Api {
  async login(data) {
    /**
      DATA STRUCTURE
      {
        "username": "thiago.santos@nodo.cc",
        "password": "password123 "
      }
    */
    return APIRturn(this.post('/auth/login', data));
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
    const { token } = (await APIRturn(this.get('/auth/session'))).data;
    this.setToken(token);
  }
}();
