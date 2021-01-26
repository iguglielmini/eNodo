import { Alert } from 'react-native';
import APIErrorHandler from './error-handler';

function apiReturn(request) {
  return request
    .catch(({ response }) => {
      if (response && response.status === 500) {
        return Alert.alert('Error', 'Please try again later.');
      }
      return APIErrorHandler.getErrorMessages(response);
    });
}

export default apiReturn;
