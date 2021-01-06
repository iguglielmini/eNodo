import { StyleSheet } from 'react-native';
import { BLACK } from '@assets/style/colors';
import { SPACE_24 } from '@assets/style/wrapper';
import { TitleSmall } from '@assets/style/typography';


export default StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  subTitle: {
    ...TitleSmall,
    color: BLACK,
  },
  itemText: {
    marginBottom: 0,
    paddingHorizontal: 0
  },
  containerBanner: {
    width: '100%',
    flexWrap: 'wrap',
    alignItems: 'center',
    paddingTop: SPACE_24,
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});
