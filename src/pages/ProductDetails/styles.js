import { StyleSheet } from 'react-native';
import {
  SECONDARY, BLACK, WHITE, TEXTBLACK, WHITELIGHT, TEXTGREYLIGHT, TEXTPINK,
  BORDERGREY
} from '@assets/style/colors';

export default StyleSheet.create({
  containerTitle: {
    padding: 20,
    marginRight: 12,
    marginLeft: 12,
  },
  ContainerScroll: {
    paddingBottom: 50,
  },
  titleProduct: {
    fontSize: 12,
    color: SECONDARY,
    marginTop: 15,
  },
  subTitle: {
    fontSize: 16,
    color: TEXTGREYLIGHT,
    marginTop: 16,
  },
  detailsProduct: {
    padding: 20,
    marginRight: 12,
    marginLeft: 12,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  containerDescription: {
    paddingBottom: 20
  },
  description: {
    marginLeft: 10,
    width: '90%',
  },
  descriptionTitle: {
    color: BLACK,
    fontSize: 14,
    lineHeight: 17,
    marginBottom: 5,
  },
  descriptionSubTitle: {
    color: '#7a7a7a',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerAccordion: {
    borderBottomWidth: 1,
    borderBottomColor: BORDERGREY,
  },
  btnModal: {
    marginLeft: 5,
    color: BLACK,
    textDecorationLine: 'underline',
  },
  containerCarouselPay: {
    paddingBottom: 80,
  },
  ContainerClientPay: {
    padding: 15,
  },
  ContainerProductSimilar: {
    padding: 15,
    marginBottom: 40,
  },
  ClientPayTitle: {
    fontSize: 18,
    color: TEXTGREYLIGHT,
    marginTop: 40,
    marginLeft: 24,
    marginBottom: 40,
    width: '50%',
  },
  budget: {
    marginBottom: 40,
    marginLeft: 24,
    fontSize: 12,
  },
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
  ContainerHeader: {
    top: 0,
    left: 0,
    right: 0,
    height: 30,
    zIndex: 9999,
    marginTop: 42,
    marginLeft: 16,
    marginRight: 16,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    justifyContent: 'space-between',
  },
  btnImageIcon: {
    backgroundColor: WHITE,
    borderRadius: 50,
    padding: 10,
    shadowColor: BLACK,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4.65,

    elevation: 8,
  },
});
