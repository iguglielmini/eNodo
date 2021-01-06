export default class APINormalizarResponse {
  static getMessageByStatus(status) {
    switch (status) {
      case 500: {
        return {
          editProfile: {
            success: false,
            message: 'Please try again later.'
          },
          requestSMS: {
            success: false,
            message: 'Please try again later.'
          },
        };
      }

      case 404:
        return {
          editProfile: {
            success: false,
            message: 'Your session has expired.',
          },
        };

      case 401:
        return {
          editProfile: {
            success: false,
            message: 'Your session has expired.',
          },
        };

      case 201:
        return {
          requestSMS: {
            success: true,
            message: 'A new SMS code was sent to you.',
          },
          editProfile: {
            success: true,
            message: 'Your profile has been successfully updated.',
          }
        };

      case 200:
        return {
          editProfile: {
            success: true,
            message: 'Your profile has been successfully updated.',
          },
        };

      default:
        return 0;
    }
  }
}
