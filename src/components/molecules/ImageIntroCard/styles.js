import { StyleSheet } from 'react-native';
import { WHITE } from '@assets/style/colors';
import { SPACE_16, SPACE_32, SPACE_48 } from '@assets/style/wrapper';
import { TitleMediumBold, TitleMedium } from '@assets/style/typography';

export default StyleSheet.create({
  container: {
    width: 400,
    height: 375,
    borderRadius: 5,
    padding: SPACE_32,
    overflow: 'hidden',
    marginLeft: SPACE_16,
    marginBottom: SPACE_48,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  },
  title: {
    ...TitleMediumBold,
    color: WHITE,
  },
  description: {
    ...TitleMedium,
    color: WHITE,
  },
});
