export default class APIErrorHandler {
  static getErrorMessages(response) {
    const result = {
      fields: [],
      messages: []
    };

    if (response && response.data && response.data.message) {
      if (typeof response.data.message === 'string') {
        result.messages.push(response.data.message);
      }

      for (let i = 0; i < response.data.message.length; i += 1) {
        if (response.data.message[i].property) {
          result.fields.push(response.data.message[i].property);
        }

        if (response.data.message[i].constraints) {
          Object.keys(response.data.message[i].constraints).forEach((key) => {
            result.messages.push(response.data.message[i].constraints[key]);
          });
        }
      }
    } else {
      result.messages.push('It was not possible to complete your request. Please try again later.');
    }

    return result;
  }
}
