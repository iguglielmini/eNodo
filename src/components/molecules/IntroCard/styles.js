import { StyleSheet } from 'react-native';
import { WHITE } from '@assets/style/colors';
import { FONT_WEIGHT_REGULAR, FONT_FAMILY } from '@assets/style/typography';


export default StyleSheet.create({
  container: {
    height: 260,
    padding: 32,
    width: '100%',
    borderRadius: 5,
    overflow: 'hidden',
    flexDirection: 'column',
    alignItems: 'flex-start',
    backgroundColor: WHITE,
    justifyContent: 'space-between',
  },
  title: {
    width: 140,
    fontSize: 20,
    fontFamily: FONT_FAMILY,
    fontWeight: FONT_WEIGHT_REGULAR,
  },
  price: {
    fontSize: 20,
    color: '#DB207F',
    fontFamily: FONT_FAMILY,
    fontWeight: FONT_WEIGHT_REGULAR,
  },
  image: {
    top: 26,
    right: -1,
    position: 'absolute',
  },
});
