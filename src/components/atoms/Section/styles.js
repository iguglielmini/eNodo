import { StyleSheet } from 'react-native';
import { BLACK, WHITE } from '@assets/style/colors';
// import { SPACE_48 } from '@assets/style/wrapper';

export default StyleSheet.create({
  dark: {
    backgroundColor: BLACK,
  },
  light: {
    backgroundColor: WHITE,
  },
  transparent: {
    backgroundColor: 'transparent',
  },
  container: {
    paddingVertical: 0,
  },
});
