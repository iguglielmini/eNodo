import { StyleSheet } from 'react-native';
import { BLACK, WHITE } from '@assets/style/colors';
import { SPACE_16 } from '@assets/style/wrapper';
import { TitleXXSmall } from '@assets/style/typography';

export default StyleSheet.create({
  container: {
    padding: 21,
    marginTop: SPACE_16,
    alignItems: 'center',
    flexDirection: 'row',
  },
  textButton: {
    ...TitleXXSmall,
    marginRight: 8,
  },
  dark: {
    color: WHITE,
  },
  light: {
    color: BLACK,
  },
});
