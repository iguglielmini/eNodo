import Api from '.';
import APIErrorHandler from './api-error-handler';

export default class AuthService extends Api {
  login(data) {
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

  logout() {
    return this.post('/auth/logout')
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

  recovery(data) {
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

  session() {
    return this.post('/auth/session')
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
