import { StyleSheet, Dimensions } from 'react-native';
import { SPACE_16, SPACE_24 } from '@assets/style/wrapper';
import {
  WHITE, BLACK, BORDERGREY, TEXTGREYLIGHT
} from '@assets/style/colors';
import {
  TitleXSmall,
  FONT_FAMILY,
  FONT_WEIGHT_MEDIUM,
} from '@assets/style/typography';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  card: {
    paddingTop: 0,
    width: (width - 47) / 2,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  description: {
    width: 139,
    ...TitleXSmall,
    marginTop: SPACE_16,
  },
  favoriteBtn: {
    right: 14,
    bottom: 15,
    position: 'absolute',
  },
  containerImage: {
    height: 200,
    width: '100%',
    borderRadius: 5,
    overflow: 'hidden',
    resizeMode: 'cover',
    backgroundColor: WHITE,
  },
  priceContainer: {
    width: '100%',
    marginTop: SPACE_24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  priceText: {
    ...TitleXSmall,
  },
  priceItem: {
    color: '#db207f',
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
  discount: {
    flex: 1,
    top: -24,
    right: 11,
    width: 48,
    height: 48,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  discountText: {
    fontSize: 11,
    lineHeight: 13,
    color: '#DB207F',
    position: 'absolute',
    fontFamily: FONT_FAMILY,
    fontWeight: FONT_WEIGHT_MEDIUM,
  },
  unavailableItem: {
    ...TitleXSmall,
    opacity: 0.5,
  },
  darkUnavailable: {
    color: '#DB207F',
  },
  lightUnavailable: {
    color: TEXTGREYLIGHT,
  },
});
