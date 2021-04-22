import { StyleSheet } from 'react-native';
import { $error } from '@assets/style/colors';

export default StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    fontSize: 22,
    width: '100%',
    paddingBottom: 4,
    color: '#c00'
  },
  CEPinput: {
    color: '#000',
    fontSize: 18,
    width: '100%',
  },
  inputErrorMessage: {
    paddingTop: 10,
    paddingBottom: 10,
    color: $error,
  }
});
