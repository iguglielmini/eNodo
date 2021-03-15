import { StyleSheet, Dimensions } from 'react-native';
import {
  SPACE_24, SPACE_32, SPACE_HEADER
} from '@assets/style/wrapper';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  // Header
  ContainerHeader: {
    width,
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    position: 'absolute',
    alignItems: 'center',
    flexDirection: 'row',
    paddingTop: SPACE_HEADER,
    paddingBottom: SPACE_24,
    paddingHorizontal: SPACE_32,
    justifyContent: 'space-between',
  },

  headerButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  buttonFavorite: {
    paddingRight: 32
  },
  buttonBag: {
    marginTop: -1,
    alignItems: 'center',
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'center',
  },

});
