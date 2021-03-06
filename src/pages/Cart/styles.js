import { StyleSheet, Dimensions } from 'react-native';
import {
  SPACE_24, SPACE_32, SPACE_16, SPACE_HEADER
} from '@assets/style/wrapper';
import {
  TitleSmall, TitleLarge, TitleXSmall, TitleSmallBOLD
} from '@assets/style/typography';
import { WHITE, BLACK, TEXTGREYLIGHT } from '@assets/style/colors';


const { width } = Dimensions.get('window');

export default StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: WHITE,
  },
  header: {
    width,
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    overflow: 'visible',
    paddingTop: SPACE_HEADER,
    paddingBottom: SPACE_24,
    position: 'absolute',
    paddingHorizontal: SPACE_16,
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
    right: 16,
  },
  TitleHeader: {
    ...TitleSmall,
  },
  TitlePageSecond: {
    ...TitleSmallBOLD
  },
  containerScroll: {
    paddingTop: 85,
    paddingBottom: 150,
  },
  container: {
    paddingHorizontal: SPACE_32,
  },
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
  containerNotFound: {
    paddingTop: 100,
    marginTop: SPACE_32,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  },
  titlePageNotFound: {
    ...TitleSmall,
    color: TEXTGREYLIGHT,
  },
  btnNotFound: {
    marginTop: 80,
    color: BLACK,
    ...TitleXSmall,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
