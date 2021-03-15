import { StyleSheet } from 'react-native';
import { BORDERGREY, BLACK, WHITE } from '@assets/style/colors';
import { SPACE_16, SPACE_32 } from '@assets/style/wrapper';
import { TitleSmall } from '@assets/style/typography';

export default StyleSheet.create({
  containerHelp: {
    marginTop: SPACE_16,
    flexDirection: 'column',
  },
  btn: {
    paddingLeft: SPACE_32,
    paddingRight: SPACE_32,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  btnHelp: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    paddingRight: SPACE_32,
    paddingLeft: SPACE_32,
    borderBottomColor: BORDERGREY,
    justifyContent: 'space-between',
  },
  borderNone: {
    borderBottomWidth: 0
  },
  titleHelp: {
    ...TitleSmall,
    marginTop: SPACE_32,
    marginBottom: SPACE_32,
  },
  light: {
    color: WHITE,
  },
  dark: {
    color: BLACK,
  },
});
