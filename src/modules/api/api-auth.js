import Api from '.';
import APIErrorHandler from './api-error-handler';

class AuthService extends Api {
  async login(data) {
    /**
      DATA STRUCTURE
      {
        "username": "thiago.santos@nodo.cc",
        "password": "password123 "
      }
    */
    return this.post('/auth/login', data)
      .then((response) => {
        if (response.status === 200) {
          return {
            success: true,
            ...response.data
          };
        }
        return false;
      })
      .catch((err) => {
        if (err.response.status === 500) return 'Please try again later.';
        return APIErrorHandler.getErrorMessages(err.response);
      });
  }

  async logout() {
    return this.post('/auth/logout')
      .then((response) => {
        if (response.status === 200) {
          return {
            success: true,
            ...response.data
          };
        }
        return false;
      })
      .catch((err) => {
        if (err.response.status === 500) return 'Please try again later.';
        return APIErrorHandler.getErrorMessages(err.response);
      });
  }

  async recovery(data) {
    /**
      DATA STRUCTURE
      {
        "username": "thiago.santos@nodo.cc",
        "cpf": "11144477735"
      }
    */
    return this.post('/auth/recover', data)
      .then((response) => {
        if (response.status === 200) {
          return {
            success: true,
            ...response.data
          };
        }
        return false;
      })
      .catch((err) => {
        if (err.response.status === 500) return 'Please try again later.';
        return APIErrorHandler.getErrorMessages(err.response);
      });
  }

  async session() {
    return this.get('/auth/session')
      .then((response) => {
        if (response.status === 200) {
          const { token } = response.data;
          this.setToken(token);
        }
        return false;
      })
      .catch(({ response }) => {
        if (response && response.status === 500) return 'Please try again later.';
        return APIErrorHandler.getErrorMessages(response);
      });
  }
}

export default new AuthService();
