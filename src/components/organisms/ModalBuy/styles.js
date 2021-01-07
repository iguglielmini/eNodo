import { StyleSheet, Dimensions } from 'react-native';
import { WHITE, BLACK } from '@assets/style/colors';
import { SPACE_16, SPACE_24, SPACE_32 } from '@assets/style/wrapper';
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
    maxHeight: '70%',
    backgroundColor: WHITE,
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
  },
  scrollView: {
    paddingHorizontal: SPACE_32,
    paddingBottom: 120,
  },
  // Header
  containerTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: SPACE_32,
    paddingBottom: 4,
    paddingHorizontal: SPACE_32,
    justifyContent: 'space-between',
  },
  Title: {
    fontSize: 14,
    lineHeight: 16,
    fontWeight: '400',
    fontFamily: 'Inter',
  },
  // body
  bodyModal: {
    paddingVertical: SPACE_32,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  // Footer
  footerModal: {
    left: 0,
    right: 0,
    bottom: 0,
    padding: 30,
    position: 'absolute',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'transparent',
    justifyContent: 'space-between',
  },
  BtnCart: {
    color: BLACK,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: BLACK,
    paddingVertical: 18,
    paddingHorizontal: SPACE_32,
  },
  btnPayment: {
    color: WHITE,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: BLACK,
    paddingVertical: 18,
    backgroundColor: BLACK,
    paddingHorizontal: SPACE_24,
  }
});
