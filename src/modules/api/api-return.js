import { Alert } from 'react-native';
import APIErrorHandler from './api-error-handler';

async function apiReturn(request, statusCode = 200, errorCode = 500) {
  return request
    .then(({ status, data }) => {
      if (status === statusCode) {
        return {
          data,
          success: true,
        };
      }
      return false;
    })
    .catch(({ response }) => {
      if (response && response.status === errorCode) {
        return Alert.alert('Error', 'Please try again later.');
      }
      return APIErrorHandler.getErrorMessages(response);
    });
}

export default apiReturn;
