import { StyleSheet, Dimensions } from 'react-native';
import { SPACE_24, SPACE_32, SPACE_16 } from '@assets/style/wrapper';
import { BLACK, BORDERGREY, WHITE } from '@assets/style/colors';
import { TitleSmall, TitleXSmall } from '@assets/style/typography';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  containerSearch: {
    backgroundColor: BLACK,
    height: '100%',
  },
  scroll: {
    paddingBottom: SPACE_32,
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
    width: '90%',
    paddingLeft: SPACE_24,
  },
  //   Filter Page
  titleCatgoryFilter: {
    paddingHorizontal: SPACE_32,
  },
  notFoundText: {
    color: WHITE,
    fontSize: 20,
    textAlign: 'center',
    marginTop: SPACE_32,
  },
  // Terms
  ContentItemTerms: {
    width,
    paddingVertical: SPACE_32,
    paddingHorizontal: SPACE_32,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  itemTerms: {
    paddingTop: SPACE_16
  },
  TitleitemTerms: {
    ...TitleXSmall,
    color: WHITE
  }
});
