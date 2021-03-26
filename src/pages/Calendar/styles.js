import { StyleSheet, Dimensions } from 'react-native';
import {
  SPACE_16, SPACE_24, SPACE_32, SPACE_44, SPACE_64
} from '@assets/style/wrapper';
import { TitleSmall, TitleLarge, TitleMedium } from '@assets/style/typography';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  content: {
    width,
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingHorizontal: SPACE_32,
    justifyContent: 'flex-start',
  },
  titlePageContent: {
    paddingTop: SPACE_64,
    ...TitleSmall,
  },
  titlePage: {
    ...TitleSmall,
  },
  contentImage: {
    width: '100%',
    paddingTop: SPACE_16,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Image: {
    width: 230,
    height: 230,
    borderRadius: 150,
    backgroundColor: '#F6EA46'
  },
  contentTitle: {
    paddingTop: SPACE_44
  },
  titleCalendar: {
    ...TitleLarge
  },
  contentSubTitle: {
    paddingTop: SPACE_24,
  },
  subTitleCalendar: {
    ...TitleMedium
  },
  imagePlataform: {
    width: 120,
    height: 40,
  }
});
