import { StyleSheet, Dimensions } from 'react-native';
import { WHITE, BLACK, BORDERGREY } from '@assets/style/colors';
import { SPACE_16 } from '@assets/style/wrapper';
import { TitleXSmall, FONT_FAMILY, FONT_WEIGHT_MEDIUM } from '@assets/style/typography';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  card: {
    width: (width - 47) / 2,
    height: 330,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingTop: 0,
  },
  description: {
    ...TitleXSmall,
    marginTop: SPACE_16,
    width: 139,
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
    resizeMode: 'cover',
    backgroundColor: WHITE,
    overflow: 'hidden',
  },
  priceContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    position: 'absolute',
    bottom: 0
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
    top: -24,
    right: 11,
    width: 48,
    height: 48,
    position: 'absolute',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  discountText: {
    fontSize: 11,
    lineHeight: 13,
    color: '#DB207F',
    position: 'absolute',
    fontFamily: FONT_FAMILY,
    fontWeight: FONT_WEIGHT_MEDIUM,
  },
});
