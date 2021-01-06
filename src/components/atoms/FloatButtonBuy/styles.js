import { StyleSheet } from 'react-native';
import {
  TEXTBLACK, WHITELIGHT, TEXTGREYLIGHT, TEXTPINK,
} from '@assets/style/colors';

export default StyleSheet.create({
  ContainerFloatButon: {
    left: 0,
    right: 0,
    bottom: 0,
    padding: 30,
    position: 'absolute',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'transparent',
    justifyContent: 'space-between',
  },
  priceDescription: {
    fontSize: 16,
    lineHeight: 24,
    backgroundColor: 'transparent',
  },
  priceTitles: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  newPrice: {
    color: TEXTPINK,
    marginRight: 10,
  },
  lastPrice: {
    color: TEXTGREYLIGHT,
    textDecorationLine: 'line-through',
  },
  HowPayment: {
    fontWeight: '400',
    color: TEXTBLACK,
  },
  buttonPayment: {
    paddingTop: 18,
    paddingLeft: 30,
    borderRadius: 5,
    paddingRight: 30,
    paddingBottom: 18,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: TEXTBLACK,
  },
  payTitleButton: {
    color: WHITELIGHT,
  },
});
