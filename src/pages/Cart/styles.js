import { StyleSheet, Dimensions } from 'react-native';
import { SPACE_24, SPACE_32, SPACE_60 } from '@assets/style/wrapper';
import { TitleSmall, TitleLarge } from '@assets/style/typography';
import { WHITE, BLACK } from '@assets/style/colors';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: WHITE,
  },
  // Header
  header: {
    width,
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    overflow: 'visible',
    paddingTop: SPACE_60,
    paddingBottom: SPACE_24,
    position: 'absolute',
    paddingHorizontal: SPACE_32,
  },
  contentHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    justifyContent: 'space-between',
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
  containerTitlePrice: {
    right: 0,
  },
  TitleHeader: {
    ...TitleSmall,
  },
  // Scroll
  containerScroll: {
    paddingTop: 85,
    paddingBottom: 150,
  },
  container: {
    paddingHorizontal: SPACE_32,
  },
  // Title Intro
  subTitleHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titlePage: {
    ...TitleLarge,
  },
  titlePrice: {
    ...TitleSmall,
  },
});
