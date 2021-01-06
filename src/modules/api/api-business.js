import Api from '.';
import APIErrorHandler from './api-error-handler';

export default class BusinessService extends Api {
  getBusiness(id) {
    return this.get(`/business/${id}`)
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
