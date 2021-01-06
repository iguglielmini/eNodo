import Api from '.';

export default class offerService extends Api {
  load() {
    return this.get('/offer/birthday')
      .then((response) => {
        if (response.status === 200) {
          return response.data;
        }

        return false;
      })
      .catch((err) => {
        if (err.response.status === 500) return 'Please try again later.';
        return false;
      });
  }

  getOffer(id) {
    return this.get(`/offer/${id}`)
      .then((response) => {
        if (response.status === 200) {
          return response.data;
        }

        return false;
      })
      .catch((err) => {
        if (err.response.status === 500) return 'Please try again later.';
        return false;
      });
  }
}
