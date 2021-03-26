import { StyleSheet } from 'react-native';
import {
  BORDERGREY, WHITE, BLACK, PRIMARY
} from '@assets/style/colors';
import { SPACE_32 } from '@assets/style/wrapper';
import {
  TitleXSmall,
} from '@assets/style/typography';

export default StyleSheet.create({
  container: {
    width: '100%',
    paddingTop: SPACE_32,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingHorizontal: SPACE_32,
  },
  card: {
    paddingTop: 0,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  contentDescription: {
    width: '98%',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingHorizontal: SPACE_32,
  },
  description: {
    ...TitleXSmall,
    marginTop: 4,
    color: WHITE,
    marginRight: 32,
  },
  favoriteBtn: {
    right: 14,
    bottom: 15,
    position: 'absolute',
  },
  containerImage: {
    height: 110,
    width: 90,
    borderRadius: 5,
    overflow: 'hidden',
    resizeMode: 'cover',
    backgroundColor: WHITE,
  },
  priceContainer: {
    width: '100%',
    paddingTop: SPACE_32,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  priceText: {
    ...TitleXSmall,
  },
  priceItem: {
    color: PRIMARY,
  },
  pricelater: {
    marginLeft: 10,
    color: BORDERGREY,
    textDecorationLine: 'line-through',
  },
  dark: {
    color: WHITE,
  },
  light: {
    color: BLACK,
  },
});
