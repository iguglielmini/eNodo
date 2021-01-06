import { StyleSheet, Dimensions } from 'react-native';
import { WHITE, BLACK } from '@assets/style/colors';
import { SPACE_24, SPACE_32 } from '@assets/style/wrapper';
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
    maxHeight: '90%',
    backgroundColor: WHITE,
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
  },
  scrollView: {
    padding: SPACE_32,
  },
  // Header
  containerTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: SPACE_32,
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
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    paddingBottom: SPACE_32,
    paddingHorizontal: SPACE_24,
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
