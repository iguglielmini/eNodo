import { StyleSheet, Dimensions } from 'react-native';
import { BLACK, WHITE } from '@assets/style/colors';
import { ParagraphMedium, TitleSmallBOLD, TitleXSmall } from '@assets/style/typography';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    paddingTop: 35,
    paddingBottom: 56,
    paddingHorizontal: 32,
  },
  containerBottom: {
    paddingTop: 56,
    paddingBottom: 56,
    borderTopWidth: 1,
    paddingHorizontal: 32,
    borderTopColor: '#A1A6AF',
  },
  containerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    zIndex: 5,
  },
  gradientTop: {
    position: 'absolute',
    height: 30,
    width,
    bottom: -30,
    zIndex: 15
  },
  btnBack: {
    paddingHorizontal: 26,
    paddingVertical: 20,
  },
  title: {
    ...TitleSmallBOLD,
    paddingBottom: 48
  },
  inputWrapper: {
    paddingBottom: 16
  },
  input: {
    ...ParagraphMedium,
    color: BLACK,
    backgroundColor: WHITE,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#A1A6AF',
    paddingHorizontal: 18,
    paddingTop: 15,
    paddingBottom: 18,
  },
  btn: {
    width: 140,
    borderRadius: 4,
    paddingVertical: 17,
    backgroundColor: BLACK,
  },
  textBtn: {
    color: WHITE,
    ...TitleXSmall,
    textAlign: 'center'
  },
  wrapperForgot: {
    paddingTop: 32,
    paddingBottom: 48
  },
  forgot: {
    ...ParagraphMedium,
    textDecorationLine: 'underline'
  },
  modal: {
    margin: 0,
    backgroundColor: WHITE,
  },
  cardModal: {
    width,
    height,
    flex: 1,
    backgroundColor: WHITE,
  },
  containerWebview: {
    flex: 1
  },
  btnWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 999,
  },
  btnImageIcon: {
    marginTop: 20,
    marginLeft: 16,
    marginRight: 16,
    marginBottom: 16,
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
});
