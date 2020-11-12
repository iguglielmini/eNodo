import { StyleSheet, Dimensions } from 'react-native';

// Dimension Responsive layout
const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    width,
  },

  wrapper: {},

  Card: {
    flex: 1,
  },
  cardProduct: {
    margin: 16,
    height: 230,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    flexDirection: 'column',
  },
  ImageCard: {
    width: '100%',
    paddingTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderBottomColor: '#A1A6AF',
    justifyContent: 'space-around',
  },
  ImageProduct: {
    width: 75,
    height: 120,
  },
  circleText: {
    padding: 3,
    width: 30,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: '#A1A6AF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#000000',
    fontSize: 15,
  },
  priceText: {
    color: '#DB207F',
    fontSize: 15,
    paddingLeft: 8,
  },
  ImageTextPrice: {
    flexDirection: 'row',
    paddingTop: 20,
    paddingLeft: 16,
    paddingBottom: 20,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
