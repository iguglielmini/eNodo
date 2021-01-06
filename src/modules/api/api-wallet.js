import Api from '.';
import APIErrorHandler from './api-error-handler';

export default class WalletService extends Api {
  getFirstCoinList() {
    return this.get('/first-coin/business/available')
      .then((response) => {
        if (response.status === 200) {
          return response.data;
        }
        return false;
      })
      .catch(err => APIErrorHandler.getErrorMessages(err.response));
  }

  getCoin(id) {
    return this.post(`/first-coin/business/${id}`)
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          return {
            success: true,
            data: response.data
          };
        }
        return false;
      })
      .catch(err => APIErrorHandler.getErrorMessages(err.response));
  }

  getOverallBalance() {
    return this.get('/wallet/balance/overall')
      .then((response) => {
        if (response.status === 200) {
          return response.data;
        }
        return false;
      })
      .catch(err => APIErrorHandler.getErrorMessages(err.response));
  }

  addCoin(params) {
    return this.post('/wallet/coin/add', params)
      .then((response) => {
        if (response.status === 201) {
          return {
            success: true,
            data: response.data
          };
        }
        return false;
      })
      .catch(err => APIErrorHandler.getErrorMessages(err.response));
  }

  addNativePayment(params) {
    return this.post('/wallet/coin/add', params)
      .then((response) => {
        if (response.status === 201) {
          return {
            success: true,
            data: response.data
          };
        }
        return false;
      })
      .catch(err => APIErrorHandler.getErrorMessages(err.response));
  }

  useCoin(params) {
    return this.post('/wallet/coin/use', params)
      .then((response) => {
        if (response.status === 201) {
          return {
            success: true,
            data: response.data
          };
        }
        return false;
      })
      .catch(err => APIErrorHandler.getErrorMessages(err.response));
  }

  addCoinVerify(id) {
    return this.get(`/wallet/coin/verify/${id}`)
      .then((response) => {
        if (response.status === 200) {
          return {
            success: true,
            data: response.data
          };
        }
        return false;
      })
      .catch(err => APIErrorHandler.getErrorMessages(err.response));
  }
}
