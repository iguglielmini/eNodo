import { StyleSheet, Dimensions } from 'react-native';
import { WHITE, TEXTBLACK } from '@assets/style/colors';
import { SPACE_16, SPACE_32 } from '@assets/style/wrapper';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    width,
    height: 270,
    paddingLeft: SPACE_32,
  },
  light: {
    color: '#0D0D0D'
  },
  dark: {
    color: '#ffffff',
  },
  paginationContainer: {
    marginLeft: 'auto',
  },
  paginationDot: {
    width: 6,
    height: 6,
    opacity: 0.2,
    marginLeft: 4,
    borderRadius: 3,
    backgroundColor: TEXTBLACK,
  },
  paginationDotActive: {
    opacity: 1,
    transform: [{ scale: 1 }],
  },
  paginationDotLast: {
    transform: [{ scale: 0.5 }],
  },
  paginationDotPreviewLast: {
    transform: [{ scale: 0.8 }],
  },
  cardContainer: {
    width: 256,
    minHeight: 224,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerCardImageTitle: {
    marginBottom: SPACE_16,
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  imageCard: {
    width: 120,
    height: 104,
    borderRadius: 4,
    overflow: 'hidden',
    resizeMode: 'cover',
    alignItems: 'center',
    backgroundColor: WHITE,
    justifyContent: 'center',
  },
  titleCard: {
    width: 120,
    paddingTop: 4,
  },
  buttonSeeAll: {
    bottom: 50,
    position: 'absolute',
    marginLeft: SPACE_16,
  },
});
