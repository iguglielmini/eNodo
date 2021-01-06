import { StyleSheet } from 'react-native';
import { BLACK, BORDERGREY, BGGREY } from '@assets/style/colors';
import { SPACE_24, SPACE_48 } from '@assets/style/wrapper';
import { TitleSmall, TitleXSmall } from '@assets/style/typography';


export default StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 80,
    borderTopWidth: 1,
    paddingTop: SPACE_24,
    flexDirection: 'row',
    borderBottomWidth: 1,
    marginBottom: SPACE_24,
    paddingBottom: SPACE_48,
    alignItems: 'flex-start',
    borderTopColor: BGGREY,
    borderBottomColor: BGGREY,
    justifyContent: 'space-between',
  },
  subTitle: {
    ...TitleSmall,
    color: BLACK,
  },
  itemText: {
    marginBottom: 0,
    paddingHorizontal: 0
  },
  subTitlePrice: {
    ...TitleXSmall,
    color: BORDERGREY,
    paddingTop: 6,
  },
  containerPrice: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    textAlign: 'right',
  }
});
