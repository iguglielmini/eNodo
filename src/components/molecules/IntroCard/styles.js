import { StyleSheet } from 'react-native';
import { WHITE } from '@assets/style/colors';
import { SPACE_32 } from '@assets/style/wrapper';
import { FONT_WEIGHT_REGULAR, FONT_FAMILY } from '@assets/style/typography';


export default StyleSheet.create({
  container: {
    height: 260,
    paddingVertical: SPACE_32,
    width: '100%',
    borderRadius: 5,
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    backgroundColor: WHITE,
  },
  containerTitlePrice: {
    height: '100%',
    paddingLeft: SPACE_32,
    flexDirection: 'column',
    alignItems: 'flex-start',
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
    width: 200,
    height: 200,
    resizeMode: 'contain',
    overflow: 'hidden',
  },
});
