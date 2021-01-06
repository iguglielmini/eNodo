import { StyleSheet, Dimensions } from 'react-native';
import { SPACE_24, SPACE_32, SPACE_60 } from '@assets/style/wrapper';
import { BLACK, WHITE } from '@assets/style/colors';
import { TitleSmall } from '@assets/style/typography';

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
    paddingTop: SPACE_60,
    paddingBottom: SPACE_24,
    paddingHorizontal: SPACE_32,
    backgroundColor: 'transparent',
    justifyContent: 'space-between',
  },

  headerButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
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
  // title header
  ContainerTitle: {
    marginLeft: SPACE_24,
  },
  TitleHeader: {
    ...TitleSmall
  }

});
