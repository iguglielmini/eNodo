import { StyleSheet } from 'react-native';
import { SPACE_24, SPACE_32, SPACE_40 } from '@assets/style/wrapper';
import { BLACK, WHITE } from '@assets/style/colors';
import { TitleXXSmall } from '@assets/style/typography';


export default StyleSheet.create({
  // Header
  ContainerFloatButon: {
    left: 0,
    right: 0,
    bottom: 0,
    paddingVertical: SPACE_40,
    paddingHorizontal: SPACE_32,
    position: 'absolute',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: 'transparent',
    justifyContent: 'flex-start',
  },
  btnPayment: {
    backgroundColor: BLACK,
    paddingVertical: 18,
    paddingHorizontal: 80,
    borderRadius: 4,
  },
  text: {
    color: WHITE,
    ...TitleXXSmall,
  },
  textBack: {
    color: BLACK,
    ...TitleXXSmall,
  },
  btnGoBack: {
    marginTop: SPACE_24,
  }
});
