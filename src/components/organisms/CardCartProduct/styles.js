import { StyleSheet } from 'react-native';
import {
  TEXTPINK, BLACK, BORDERGREY, BGGREY
} from '@assets/style/colors';
import {
  SPACE_16, SPACE_24, SPACE_32, SPACE_44
} from '@assets/style/wrapper';
import { TitleSmall, TitleXSmall, TitleXXXSmall } from '@assets/style/typography';

export default StyleSheet.create({
  container: {
    paddingTop: SPACE_44,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  // Image
  containerImageProduct: {
    width: '100%',
    height: 300,
    borderWidth: 1,
    alignItems: 'center',
    borderColor: BORDERGREY,
    justifyContent: 'center',
  },
  imageProduct: {
    maxWidth: 160,
    maxHeight: 250,
    marginVertical: 50,
    paddingVertical: SPACE_24,
    overflow: 'hidden',
    resizeMode: 'contain',
  },
  // Title Image
  containerTitleProduct: {
    paddingTop: SPACE_32,
    paddingBottom: SPACE_16
  },
  subTitle: {
    ...TitleSmall,
  },
  AlignItems: {
    paddingHorizontal: 0,
    marginBottom: 0,
  },
  // Location
  containerLocation: {
    width: '100%',
    flexDirection: 'row',
    paddingTop: SPACE_24,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  containerTextLocation: {
    paddingLeft: SPACE_32,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  titleLocation: {
    ...TitleXSmall,
    color: BLACK
  },
  subTitleLocation: {
    ...TitleXSmall,
    color: BORDERGREY,
  },
  textCep: {
    ...TitleXXXSmall,
    paddingTop: SPACE_16,
    textDecorationColor: BLACK,
    textDecorationStyle: 'solid',
    textDecorationLine: 'underline',
  }
});
