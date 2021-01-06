import { StyleSheet, Dimensions } from 'react-native';
import { SPACE_24, SPACE_32, SPACE_60 } from '@assets/style/wrapper';
import { TitleSmall, TitleLarge } from '@assets/style/typography';
import { WHITE, BLACK } from '@assets/style/colors';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  // Header
  ContainerHeader: {
    width,
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    height: 120,
    position: 'absolute',
    paddingTop: SPACE_60,
    paddingBottom: SPACE_24,
    paddingHorizontal: SPACE_32,
    backgroundColor: 'transparent',
  },
  containerPrice: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
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
    // marginLeft: SPACE_24,
  },
  containerTitlePrice: {
    right: 0
  },
  TitleHeader: {
    ...TitleSmall
  },
  // Scroll
  ContainerScroll: {
    paddingTop: 85,
    backgroundColor: WHITE,
    paddingBottom: 150,
  },
  Container: {
    paddingHorizontal: SPACE_32
  },
  // Title Intro
  subTitleHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  titlePage: {
    ...TitleLarge
  },
  titlePrice: {
    ...TitleSmall
  }
});
