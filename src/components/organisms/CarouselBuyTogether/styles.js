import { StyleSheet, Dimensions } from 'react-native';
import { WHITE, BORDERGREY, BLACK } from '@assets/style/colors';
import { SPACE_16, SPACE_20 } from '@assets/style/wrapper';
import { TitleXSmall } from '@assets/style/typography';


// Dimension Responsive layout
const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    width,
  },

  wrapper: {},
  swipperDot: {
    backgroundColor: 'rgba(0,0,0,.2)',
    width: 5,
    height: 5,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
  },
  swipperActiveDot: {
    backgroundColor: '#000',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
  },
  Card: {
    flex: 1,
  },
  cardProduct: {
    margin: SPACE_16,
    height: 230,
    borderRadius: 10,
    backgroundColor: WHITE,
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
    borderBottomColor: BORDERGREY,
    justifyContent: 'space-around',
  },
  ImageProduct: {
    width: 75,
    height: 120,
  },
  circleText: {
    height: 30,
    width: 30,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: BORDERGREY,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: BLACK,
    fontSize: 15,
  },
  priceText: {
    ...TitleXSmall,
    paddingLeft: 8,
    color: '#DB207F',
  },
  ImageTextPrice: {
    flexDirection: 'row',
    paddingTop: SPACE_20,
    paddingLeft: SPACE_16,
    paddingBottom: SPACE_20,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
