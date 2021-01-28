import { StyleSheet, Dimensions } from 'react-native';
import { WHITE } from '@assets/style/colors';

// Dimension Responsive layout
const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    height: 520,
    backgroundColor: WHITE,
  },
  cardContainer: {
    width,
    height: 520,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardImage: {
    maxWidth: 261,
    maxHeight: 415,
    resizeMode: 'contain',
  },
  dot: {
    position: 'absolute',
  },
});
