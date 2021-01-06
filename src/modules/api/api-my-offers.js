import Api from '.';
import APIErrorHandler from './api-error-handler';

export default class MyOfferService extends Api {
  getOffer(id) {
    return this.post(`/myoffer/${id}`)
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          return response.data;
        }
        return response.data;
      })
      .catch((err) => {
        if (err.response.status === 500) return 'Please try again later.';
        return APIErrorHandler.getErrorMessages(err.response);
      });
  }

  redeem(id) {
    return this.put(`/myoffer/redeem/${id}`)
      .then((response) => {
        // todo -> teste
        if (response.status === 200 || response.status === 201) {
          return response.data;
        }
        return response.data.myoffer.key;
      })
      .catch((err) => {
        // todo -> handle possible error
        if (err.response.status === 500) return 'Please try again later.';
        return APIErrorHandler.getErrorMessages(err.response);
      });
  }
}
