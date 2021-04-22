import { Alert } from 'react-native';
import AuthError from '@modules/auth-error';
import APIErrorHandler from './error-handler';

function apiReturn(request) {
  return request.catch(error => {
    const { response } = error;

    if (!response) {
      throw new Error(
        APIErrorHandler.getErrorMessages(response).messages.join('')
      );
    }

    if (response.status === 500)
      return Alert.alert('Error', 'Please try again later.');
    if (response.status === 401) throw new AuthError(response);
  });
}

export default apiReturn;
