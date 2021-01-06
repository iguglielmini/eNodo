import { StyleSheet, Dimensions } from 'react-native';
import { WHITE, TEXTBLACK } from '@assets/style/colors';
import { SPACE_16, SPACE_32 } from '@assets/style/wrapper';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    width,
    paddingLeft: SPACE_32
  },
  paginationContainer: {
    marginLeft: 'auto',
  },
  paginationDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginLeft: 4,
    backgroundColor: TEXTBLACK,
    opacity: 0.2
  },
  paginationDotActive: {
    opacity: 1,
    transform: [{ scale: 1 }]
  },
  paginationDotLast: {
    transform: [{ scale: 0.5 }]
  },
  paginationDotPreviewLast: {
    transform: [{ scale: 0.8 }]
  },
  cardContainer: {
    flexWrap: 'wrap',
    width: 256,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerCardImageTitle: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginBottom: SPACE_16,
  },
  imageCard: {
    width: 120,
    height: 104,
    borderRadius: 4,
    resizeMode: 'cover',
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: WHITE,
  },
  titleCard: {
    paddingTop: 4,
    width: 120
  },
  ButtonSeeAll: {
    position: 'absolute',
    bottom: 50,
    marginLeft: SPACE_16,
  },
});
