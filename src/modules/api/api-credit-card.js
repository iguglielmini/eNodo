import Api from '.';

import Store from '../../redux-store';
import { editUser } from '../../redux-store/actions/user';

import APIErrorHandler from './api-error-handler';

export default class creditCardService extends Api {
  async add(token) {
    return this.post('/creditcard', token)
      .then(response => response.data, (error) => {
        const message = APIErrorHandler.getErrorMessages(error.response).messages.join('\n');
        throw new Error(message);
      });
  }

  async getCards() {
    return this.get('/creditcard')
      .then(async (response) => {
        await Store.dispatch(editUser({ cards: response.data }));
        return response.data;
      }, (error) => {
        const message = APIErrorHandler.getErrorMessages(error.response).messages.join('\n');
        throw new Error(message);
      });
  }

  async remove(token) {
    return this.delete(`/creditcard/${token}`)
      .then(response => response.data, (error) => {
        const message = APIErrorHandler.getErrorMessages(error.response).messages.join('\n');
        throw new Error(message);
      });
  }
}
