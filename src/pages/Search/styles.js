import { StyleSheet, Dimensions } from 'react-native';
import { SPACE_24, SPACE_32 } from '@assets/style/wrapper';
import { BLACK, BORDERGREY, WHITE } from '@assets/style/colors';
import { TitleSmall } from '@assets/style/typography';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  containerSearch: {
    backgroundColor: BLACK,
    height: '100%',
  },
  //   Header
  contentHeader: {
    width,
    paddingTop: 60,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    paddingBottom: SPACE_32,
    paddingHorizontal: SPACE_32,
    justifyContent: 'flex-start',
    borderBottomColor: BORDERGREY,
  },
  inputSearch: {
    ...TitleSmall,
    color: WHITE,
    paddingLeft: SPACE_24,
    width: '95%'
  },
  //   Filter Page
  titleCatgoryFilter: {
    paddingHorizontal: SPACE_32
  }
});
