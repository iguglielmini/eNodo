import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  card: {
    width: width / 2 - 30,
    maxHeight: 400,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  description: {
    fontSize: 15,
    marginTop: 16,
    marginBottom: 24,
    fontWeight: '400',
    fontFamily: 'Inter',
  },
  favoriteBtn: {
    right: 14,
    bottom: 15,
    position: 'absolute',
  },
  containerImage: {
    height: 200,
    width: '100%',
    borderRadius: 10,
    backgroundColor: '#ffffff',
  },
  priceContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  priceText: {
    fontSize: 15,
    fontWeight: '400',
    fontFamily: 'Inter',
  },
  priceItem: {
    color: '#db207f',
  },
  pricelater: {
    marginLeft: 10,
    color: '#A1A6AF',
    textDecorationLine: 'line-through',
  },
  dark: {
    color: '#ffffff',
  },
  light: {
    color: '#000000',
  },
  discount: {
    top: -24,
    right: 15,
    width: 48,
    height: 48,
    position: 'absolute',
  },
  discountText: {
    top: 14,
    left: 12,
    fontSize: 13,
    color: '#DB207F',
    fontWeight: '500',
    fontFamily: 'Inter',
    position: 'absolute',
  },
});
