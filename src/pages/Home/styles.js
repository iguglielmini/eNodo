import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: 24,
    height: 24,
    transform: [{ rotate: '45deg' }],
    bottom: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrowSmall: {
    transform: [{ rotate: '-45deg' }],
  },
  arrow: {
    borderRadius: 8,
    position: 'absolute',
    height: 18,
    width: 4,
  },
  right: {
    top: 6,
    left: 16,
  },
  top: {
    top: 6,
    left: 8,
    height: 4,
    width: 18,
  },
  isLabelTop: {
    width: 12,
    right: 3,
  },
  isLabelRight: {
    height: 12,
  },
});
export default styles;
