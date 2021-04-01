import { StyleSheet, Dimensions } from 'react-native';
import {
  SPACE_16,
  SPACE_32,
  SPACE_40,
  SPACE_48,
} from '@assets/style/wrapper';
import { BLACK, BORDERGREY, WHITE } from '@assets/style/colors';
import { TitleSmall, TitleXXSmall } from '@assets/style/typography';


const { width } = Dimensions.get('window');

export default StyleSheet.create({
  contentHeader: {
    width,
    paddingHorizontal: SPACE_32,
    paddingVertical: SPACE_32
  },
  container: {
    width,
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingVertical: SPACE_32,
    justifyContent: 'flex-start',
  },
  TitleForgot: {
    marginLeft: SPACE_16,
    color: BLACK
  },
  contentSubTitle: {
    paddingTop: SPACE_40,
    paddingHorizontal: SPACE_32,
  },
  subTitleForgot: {
    ...TitleSmall,
    color: BORDERGREY
  },
  InputContent: {
    width,
    paddingTop: SPACE_48,
    paddingHorizontal: SPACE_32,
  },
  btnSend: {
    width: 140,
    height: 53,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    marginTop: SPACE_32,
    backgroundColor: BLACK,
  },
  btnText: {
    color: WHITE,
    ...TitleXXSmall,
  }

});
