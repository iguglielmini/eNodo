import { StyleSheet, Dimensions } from 'react-native';
import { TitleXSmall } from '@assets/style/typography';
import {
  BLACK, WHITE,
} from '../../../assets/style/colors';
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
    height: 270,
    backgroundColor: WHITE,
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
    padding: 32,
    paddingRight: 0
  },
  containerTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  closeBtn: {
    padding: 32,
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 10
  },
  Title: {
    ...TitleXSmall,
  },
  bodyModal: {
    marginVertical: 57,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  label: {
    fontSize: 18,
    lineHeight: 22,
    fontFamily: 'Inter',
    fontWeight: '400',
    opacity: 0.5,
    marginRight: 5,
  },
  footerModal: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
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
    paddingVertical: 14,
    paddingHorizontal: 18,
    paddingRight: 32,
    textDecorationLine: 'underline'
  }
});
