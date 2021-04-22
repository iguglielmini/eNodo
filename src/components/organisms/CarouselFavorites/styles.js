import { StyleSheet, Dimensions } from 'react-native';
import { TitleLarge, TitleSmall } from '@assets/style/typography';
import { BORDERGREY, TEXTBLACK, WHITE } from '@assets/style/colors';
import {
  SPACE_16, SPACE_32, SPACE_40, SPACE_48
} from '@assets/style/wrapper';

const { width } = Dimensions.get('window');

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
  container: {
    width,
  },
  cardContainer: {
    flex: 1,
    height: 160,
    marginRight: SPACE_16 / 2,
  },
  cardImage: {
    width: '100%',
    height: '100%',
    borderRadius: 5,
    resizeMode: 'cover',
    overflow: 'hidden',
    backgroundColor: WHITE,
  },
  contentFooter: {
    width,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: SPACE_40,
    paddingRight: SPACE_32,
    paddingBottom: SPACE_48,
    justifyContent: 'space-between',
  },
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
});
