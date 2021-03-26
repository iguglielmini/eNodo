import { StyleSheet } from 'react-native';
import { BLACK, $error } from '@assets/style/colors';

export default StyleSheet.create({
  input: {
    fontSize: 22,
    color: BLACK,
    width: '100%',
    paddingBottom: 4,
    borderBottomWidth: 1,
  },
  inputError: {
    borderColor: $error,
  },
  textError: {
    marginTop: 8,
    color: $error,
  },
  CEPinput: {
    fontSize: 18,
    color: BLACK,
    width: '100%',
  }
});
