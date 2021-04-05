import { StyleSheet } from 'react-native';
import { TitleLarge, TitleSmall } from '@assets/style/typography';
import { BORDERGREY, TEXTBLACK, WHITE } from '@assets/style/colors';
import {  SPACE_16, SPACE_32, SPACE_40, SPACE_48 } from '@assets/style/wrapper';

export default StyleSheet.create({
  contentFavorites: {
    paddingTop: 80,
    paddingHorizontal: SPACE_32,
    borderBottomColor: BORDERGREY,
    borderBottomWidth: 1,
  },
  TitleFavorites: {
    ...TitleLarge,
    paddingBottom: SPACE_48,
  },
  subTitleFavorites: {
    ...TitleSmall,
    color: BORDERGREY,
    paddingBottom: SPACE_40,
  },
  btnContent: {
    paddingBottom: 60,
  },
  cardContainer: {
    height: 180,
    borderRadius: 5,
    backgroundColor: WHITE,
    marginRight: SPACE_16 / 2,
  },
  cardImage: {
    width: '100%',
    height: '100%',
  },
  paginationContainer: { marginLeft: 'auto' },
  Themecolor: { color: '#0D0D0D' },
  paginationDot: {
    width: 6,
    height: 6,
    opacity: 0.2,
    marginLeft: 4,
    borderRadius: 3,
    backgroundColor: TEXTBLACK,
  },
  paginationDotActive: {
    opacity: 1,
    transform: [{ scale: 1 }],
  },
  paginationDotLast: {
    transform: [{ scale: 0.5 }],
  },
  paginationDotPreviewLast: {
    transform: [{ scale: 0.8 }],
  },
  buttonSeeAll: {
    bottom: 30,
    position: 'absolute',
    marginLeft: SPACE_32,
  },
});
