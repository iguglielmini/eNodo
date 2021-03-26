import APIErrorHandler from './api/utils/error-handler';

export default class AuthError extends Error {
  constructor(response) {
    super(response);

    console.log('AuthError', message);

    const { message } = response;

    this.message = message || APIErrorHandler.getErrorMessages(response).messages.join('');
    this.statusCode = 401;
  }
}
