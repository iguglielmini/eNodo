import { StyleSheet, Dimensions } from 'react-native';
import {
  SPACE_16,
  SPACE_32,
  SPACE_24
} from '@assets/style/wrapper';
import { BLACK, BORDERGREY } from '@assets/style/colors';
import { TitleSmall, TitleXXSmall } from '@assets/style/typography';


const { width } = Dimensions.get('window');

export default StyleSheet.create({
  contentHeader: {
    width,
    paddingHorizontal: SPACE_32,
    paddingVertical: SPACE_32
  },
  container: {
    width,
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingVertical: SPACE_32,
    justifyContent: 'flex-start',
  },
  NotificationTitle: {
    marginLeft: SPACE_16
  },
  toggleContent: {
    borderBottomWidth: 1,
    paddingVertical: SPACE_32,
    paddingHorizontal: SPACE_32,
    borderBottomColor: BORDERGREY,
  },
  toggleSection: {
    width: width / 1.2,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  toggleSectionTitle: {
    width: 200,
  },
  toggleTitle: {
    ...TitleSmall,
    paddingBottom: 8,
    color: BLACK
  },
  toggleSubTitle: {
    ...TitleXXSmall,
    paddingBottom: SPACE_24,
  }
});
