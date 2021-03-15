import { StyleSheet } from 'react-native';
import { BGGREY, BLACK, WHITE } from '@assets/style/colors';

export default StyleSheet.create({
  loading: {
    right: 0,
    bottom: 0,
    top: 0,
    left: 0,
    zIndex: 9999,
    alignItems: 'center',
    position: 'absolute',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  viewWhite: {
    flex: 1,
    backgroundColor: WHITE
  },
  viewBlack: {
    flex: 1,
    backgroundColor: BLACK
  },
  viewGrey: {
    flex: 1,
    backgroundColor: BGGREY
  },
});
