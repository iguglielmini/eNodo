import { StyleSheet, Dimensions } from 'react-native';
import { BORDERGREY, TEXTBLACK, WHITE } from '@assets/style/colors';
import {
  SPACE_16, SPACE_32, SPACE_40, SPACE_48
} from '@assets/style/wrapper';
import {
  TitleLarge, TitleSmall
} from '@assets/style/typography';

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
  // Card Carousel
  cardContainer: {
    backgroundColor: 'red',
    width: 150,
    minHeight: 180,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'flex-start',
    flex: 1
  },
  imageCard: {
    width: 120,
    height: 104,
    borderRadius: 4,
    overflow: 'hidden',
    resizeMode: 'cover',
    alignItems: 'center',
    backgroundColor: TEXTBLACK,
    justifyContent: 'center',
  },
  // Container Carousel
  container: {
    width,
    paddingLeft: SPACE_32,
  },
  // Pagination carousel
  paginationContainer: { marginLeft: 'auto', },
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
  // button see all
  buttonSeeAll: {
    bottom: 30,
    position: 'absolute',
    marginLeft: SPACE_32,
  },
});
