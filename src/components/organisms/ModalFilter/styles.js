import { StyleSheet, Dimensions } from 'react-native';
import {
  BLACK, WHITE, BGGREY
} from '@assets/style/colors';
import { TitleXSmall, TitleSmall, TitleMediumBold } from '@assets/style/typography';
import { SPACE_24, SPACE_32, SPACE_48 } from '@assets/style/wrapper';
// Dimension Responsive layout
const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    width,
  },
  modal: {
    margin: 0,
    justifyContent: 'flex-end',
  },
  cardModal: {
    width,
    height: '100%',
    backgroundColor: BGGREY,
    padding: SPACE_32,
  },
  containerTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  Title: {
    ...TitleMediumBold,
  },
  bodyModal: {
    paddingTop: SPACE_48,
    paddingBottom: SPACE_48,
    flexDirection: 'column',
  },
  subTitle: {
    ...TitleSmall,
    paddingBottom: SPACE_24,
  },
  selectContainer: {
    paddingBottom: SPACE_48,
  },
  containerSelect: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  buttonContainer: {
    left: 0,
    right: 0,
    bottom: 0,
    padding: 30,
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
    justifyContent: 'space-between',
  },
  btnSave: {
    color: WHITE,
    ...TitleXSmall,
    borderRadius: 4,
    paddingVertical: 14,
    paddingHorizontal: 18,
    backgroundColor: BLACK,
  },
  btnClear: {
    ...TitleXSmall,
    color: BLACK,
    textDecorationLine: 'underline',

  }
});
