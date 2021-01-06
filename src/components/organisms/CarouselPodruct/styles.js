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
    height: 520,
    width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardImage: {
    resizeMode: 'cover',
  },
  dot: {
    position: 'absolute',
  },
});
