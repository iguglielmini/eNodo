import { StyleSheet, Dimensions } from 'react-native';
import { BORDERGREY, BGGREY } from '@assets/style/colors';
import { SPACE_24, SPACE_32, SPACE_64 } from '@assets/style/wrapper';
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
    backgroundColor: BGGREY,
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
  },
  scrollView: {
    padding: SPACE_32,
  },
  containerTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingTop: SPACE_32,
    paddingRight: SPACE_32
  },
  Title: {
    fontSize: 18,
    lineHeight: 24,
    marginBottom: SPACE_24,
    fontWeight: '700',
    fontFamily: 'Inter',
  },
  bodyModal: {
    paddingVertical: 38,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  paragraphyModal: {
    fontSize: 14,
    lineHeight: 20,
    fontFamily: 'Inter',
    color: BORDERGREY,
  },
  footerModal: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginBottom: SPACE_64,
  },
  detailsContent: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginBottom: SPACE_24,
  }
});
