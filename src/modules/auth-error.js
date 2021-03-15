export default class AuthError extends Error {
  constructor(response) {
    super(response);

    console.log('AuthError', message);

    const { message } = response;

    this.message = message;
    this.statusCode = 401;
  }
}
