import { StyleSheet, Dimensions } from 'react-native';
// Dimension Responsive layout
const { width } = Dimensions.get('window');

export default StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    fontSize: 22,
    width: '100%',
    paddingBottom: 4,
    color: '#000'
  },
  CEPinput: {
    color: '#000',
    fontSize: 18,
    width: '100%',
  }
});
