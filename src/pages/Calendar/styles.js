import { StyleSheet, Dimensions } from 'react-native';
import {
  SPACE_24, SPACE_32, SPACE_44, SPACE_64
} from '@assets/style/wrapper';
import { TitleSmall, TitleLarge, TitleMedium } from '@assets/style/typography';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  content: {
    width,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  imageBg: {
    width,
    height: 303,
    overflow: 'hidden',
    resizeMode: 'cover',
  },
  titlePage: {
    ...TitleSmall,
    top: SPACE_64,
    paddingHorizontal: SPACE_32,
    position: 'absolute',
  },
  contentTitle: {
    paddingTop: SPACE_44,
    paddingHorizontal: SPACE_32,
  },
  titleCalendar: {
    ...TitleLarge
  },
  contentSubTitle: {
    paddingTop: SPACE_32,
    paddingBottom: SPACE_24,
    paddingHorizontal: SPACE_32,
  },
  subTitleCalendar: {
    ...TitleMedium
  },
  imagePlataform: {
    width: 120,
    height: 40,
  }
});
