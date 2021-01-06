import { StyleSheet } from 'react-native';
import {
  TEXTBLACK, TEXTGREY, BGGREY, BORDERGREY
} from '@assets/style/colors';
import { TitleXXSmall, TitleMedium, ParagraphMedium } from '@assets/style/typography';
import {
  SPACE_16, SPACE_20, SPACE_32, SPACE_40
} from '@assets/style/wrapper';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: BGGREY,
  },
  title: {
    marginBottom: SPACE_20,
    ...TitleMedium,
  },
  header: {
    paddingTop: SPACE_40,
    paddingHorizontal: SPACE_32,
    paddingBottom: SPACE_40,
    borderTopWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: BGGREY,
    borderTopColor: BORDERGREY,
    justifyContent: 'space-between',
  },
  headerText: {
    color: TEXTBLACK,
    textAlign: 'left',
    ...ParagraphMedium,
  },
  content: {
    paddingLeft: SPACE_32,
    paddingRight: SPACE_32,
    paddingBottom: SPACE_32,
  },
  contentText: {
    color: TEXTGREY,
    ...TitleXXSmall,
    flex: 1
  },
  contentModal: {
    textDecorationLine: 'underline',
    color: TEXTBLACK,
    ...TitleXXSmall
  },
  contentIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  evaluationStar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: SPACE_16,
  }
});
