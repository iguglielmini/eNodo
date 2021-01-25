import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  loading: {
    width,
    height,
    top: 0,
    left: 0,
    zIndex: 9999,
    alignItems: 'center',
    position: 'absolute',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
});
