import { StyleSheet, Dimensions } from 'react-native';
import { WHITE } from '@assets/style/colors';

// Dimension Responsive layout
const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    height: 450,
    backgroundColor: WHITE,
  },
  cardContainer: {
    width,
    height: 450,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardImage: {
    maxWidth: '100%',
    maxHeight: 350,
    resizeMode: 'contain',
  },
  dot: {
    position: 'absolute',
  },
});
