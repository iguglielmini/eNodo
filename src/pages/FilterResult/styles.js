import { StyleSheet, Dimensions } from 'react-native';
import { BLACK, WHITE } from '@assets/style/colors';
import { TitleSmall, TitleLarge } from '@assets/style/typography';
import {
  SPACE_16, SPACE_32, SPACE_36, SPACE_48, SPACE_HEADER
} from '@assets/style/wrapper';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    paddingTop: 80 - SPACE_HEADER,
    backgroundColor: BLACK,
  },
  containerPage: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: '#F3F3F3',
    minHeight: '100%',
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
  title: {
    ...TitleLarge,
    flexShrink: 1
  },
  wrapperTitle: {
    flexDirection: 'row',
    paddingLeft: SPACE_32,
    width: width - SPACE_32 - SPACE_32 - 60,
    maxWidth: width - SPACE_32 - SPACE_32 - 60,
  },
  containerTitle: {
    width,
    maxWidth: width,
    alignItems: 'center',
    flexDirection: 'row',
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
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 14,
    backgroundColor: WHITE,
  },
  scrollSelectFilter: {
    paddingTop: SPACE_36,
    paddingLeft: SPACE_32,
  },
});
