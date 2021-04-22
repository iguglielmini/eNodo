import { StyleSheet } from 'react-native';
import { BORDERGREY } from '@assets/style/colors';
import { SPACE_20, SPACE_40, SPACE_48 } from '@assets/style/wrapper';
import {
  LabelMedium,
  ParagraphMedium,
  TitleLarge,
  TitleSmall,
} from '@assets/style/typography';

export default StyleSheet.create({
  container: {
    paddingVertical: SPACE_20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerName: {
    ...LabelMedium,
  },
  headerAccount: {
    ...ParagraphMedium,
    textDecorationLine: 'underline',
  },
  headerAccountClick: {
    padding: 15,
    marginRight: -15,
  },
  TitleOrder: {
    ...TitleLarge,
    paddingBottom: SPACE_48,
  },
  subTitleOrder: {
    ...TitleSmall,
    color: BORDERGREY,
    paddingBottom: SPACE_40,
  },
  btnContent: {
    paddingBottom: 60,
  },
});
