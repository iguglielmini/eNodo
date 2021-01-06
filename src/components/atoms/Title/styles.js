import { StyleSheet } from 'react-native';
import { BLACK, WHITE } from '@assets/style/colors';
import { SPACE_16, SPACE_44 } from '@assets/style/wrapper';


export default StyleSheet.create({
  flex: {
    display: 'flex',
  },
  row: {
    flexDirection: 'row',
  },
  actionButtons: {
    width: 82,
  },
  light: {
    color: BLACK,
  },
  dark: {
    color: WHITE,
  },
  container: {
    paddingHorizontal: SPACE_16,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: SPACE_44
  },
});
