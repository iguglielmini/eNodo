import { StyleSheet } from 'react-native';
import { BLACK, WHITE } from '@assets/style/colors';
import { SPACE_16, SPACE_32 } from '@assets/style/wrapper';


export default StyleSheet.create({
  flex: {
    display: 'flex',
  },
  row: {
    flexDirection: 'row',
  },
  actionButtons: {
    width: 100,
  },
  light: {
    color: BLACK,
  },
  dark: {
    color: WHITE,
  },
  container: {
    marginBottom: SPACE_32,
    alignItems: 'flex-start',
    paddingHorizontal: SPACE_16,
    justifyContent: 'space-between',
  },
});
