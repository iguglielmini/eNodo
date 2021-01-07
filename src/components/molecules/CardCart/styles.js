import { StyleSheet, Dimensions } from 'react-native';
import { TEXTPINK, BLACK, BORDERGREY } from '@assets/style/colors';
import { SPACE_16, SPACE_24, SPACE_32 } from '@assets/style/wrapper';
import { TitleXSmall, TitleXXSmall } from '@assets/style/typography';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  containerList: {
    paddingTop: SPACE_32,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  contaninerCard: {
    width,
    paddingBottom: SPACE_24,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  containerImage: {
    width: 102,
    height: 102,
    borderWidth: 1,
    borderColor: BORDERGREY,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    maxWidth: 60,
    maxHeight: 84,
    resizeMode: 'cover',
    overflow: 'hidden',
  },
  contaninerTitle: {
    paddingLeft: SPACE_24,
    paddingRight: SPACE_16,
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '65%'
  },
  titleProduct: {
    ...TitleXSmall,
    color: BLACK,
  },
  titlePrice: {
    ...TitleXXSmall,
    color: TEXTPINK,
    paddingTop: SPACE_24,
  },
});
