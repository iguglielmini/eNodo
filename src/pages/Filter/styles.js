import { StyleSheet, Dimensions } from 'react-native';
import { BLACK, WHITE } from '@assets/style/colors';
import { TitleSmall } from '@assets/style/typography';
import { SPACE_16, SPACE_32, SPACE_36, SPACE_48 } from '@assets/style/wrapper';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    backgroundColor: BLACK,
    paddingTop: 100,
  },
  containerPage: {
    backgroundColor: '#F3F3F3',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  content: {
    paddingTop: SPACE_48,
  },
  section: {
    paddingLeft: 0,
  },
  subTitle: {
    ...TitleSmall,
  },
  AlignItems: {
    marginBottom: 0,
  },
  containerTitle: {
    width,
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: SPACE_32,
    paddingRight: SPACE_32,
    justifyContent: 'space-between',
  },
  containerSubtitle: {
    width,
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: SPACE_32,
    paddingHorizontal: SPACE_16,
    justifyContent: 'space-between',
  },
  ProductCard: {
    paddingHorizontal: SPACE_16,
  },
  btnFilter: {
    backgroundColor: WHITE,
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 4,
  },
  scrollSelectFilter: {
    paddingTop: SPACE_36,
    paddingLeft: SPACE_32,
  },
});
