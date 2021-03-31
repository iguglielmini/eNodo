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
  saveArea: {
    flex: 1,
  },
  wrapper: {
    backgroundColor: BGGREY,
    paddingLeft: SPACE_32,
    paddingRight: SPACE_32,
    flex: 1,
  },
  containerTitle: {
    zIndex: 9999,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: SPACE_24,
    paddingBottom: SPACE_24,
    justifyContent: 'space-between',
  },
  Title: {
    ...TitleMediumBold,
  },
  bodyModal: {
    paddingTop: SPACE_24,
    paddingBottom: SPACE_24,
    flexDirection: 'column',
    zIndex: 2,
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
  gradient: {
    position: 'absolute',
    height: 30,
    width,
    top: -30,
    zIndex: 15
  },
  gradientTop: {
    position: 'absolute',
    height: 30,
    width,
    bottom: -30,
    zIndex: 15
  },
  buttonContainer: {
    paddingBottom: SPACE_24,
    paddingTop: SPACE_24,
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
