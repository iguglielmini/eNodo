import { StyleSheet, Dimensions } from 'react-native';
import { BLACK, WHITE, TEXTGREYLIGHT } from '@assets/style/colors';
import { TitleSmall, TitleLarge } from '@assets/style/typography';
import {
  SPACE_16, SPACE_32, SPACE_36, SPACE_48, SPACE_HEADER
} from '@assets/style/wrapper';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  scroll: {
    paddingBottom: 60,
  },
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
    paddingBottom: 100,
    paddingHorizontal: SPACE_16,
  },
  subTitle: {
    ...TitleSmall,
  },
  title: {
    ...TitleLarge,
    flexShrink: 1
  },
  containerCard: {
    padding: SPACE_16,

  },
  wrapperTitle: {
    flexDirection: 'row',
    paddingLeft: SPACE_16,
  },
  containerTitle: {
    width,
    alignItems: 'center',
    flexDirection: 'row',
    paddingRight: SPACE_32,
    paddingBottom: SPACE_32,
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
  btnFilter: {
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 14,
    backgroundColor: WHITE,
  },
  scrollSelectFilter: {
    paddingTop: SPACE_36,
    paddingLeft: SPACE_16,
    paddingBottom: 84,
  },
  // Favorites not found
  contentFavoritesNotFound: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  textNotFound: {
    ...TitleSmall,
    marginTop: SPACE_48,
    color: TEXTGREYLIGHT,
  },
  btnNotFound: {
    marginTop: SPACE_32,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  listFooter: {
    width,
  }
});
