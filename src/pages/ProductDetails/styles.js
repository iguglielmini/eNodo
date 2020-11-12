import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  containerTitle: {
    padding: 20,
    marginRight: 12,
    marginLeft: 12,
  },
  titleProduct: {
    fontSize: 12,
    color: '#ff2bb7',
    marginTop: 15,
  },
  subTitle: {
    fontSize: 16,
    color: '#070814',
    marginTop: 16,
  },
  detailsProduct: {
    padding: 20,
    marginRight: 12,
    marginLeft: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  containerDescription: {
    borderBottomWidth: 2,
    borderBottomColor: '#A1A6AF',
  },
  description: {
    marginLeft: 10,
    width: '90%',
  },
  descriptionTitle: {
    color: '#000000',
    fontSize: 14,
    lineHeight: 14,
    marginBottom: 5,
  },
  descriptionSubTitle: {
    color: '#000000',
    opacity: 0.5,
  },
  containerCarouselPay: {},
  ContainerClientPay: {
    padding: 15,
  },
  ClientPayTitle: {
    fontSize: 18,
    color: '#070814',
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
    color: '#DB207F',
    marginRight: 10,
  },
  lastPrice: {
    color: '#a1a6af',
    textDecorationLine: 'line-through',
  },
  HowPayment: {
    fontWeight: '400',
    color: '#0d0d0d',
  },
  buttonPayment: {
    paddingTop: 18,
    paddingLeft: 30,
    borderRadius: 5,
    paddingRight: 30,
    paddingBottom: 18,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0d0d0d',
  },
  payTitleButton: {
    color: '#f1f1f1',
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
    backgroundColor: '#ffffff',
    borderRadius: 50,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4.65,

    elevation: 8,
  },
});
