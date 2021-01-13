import { StyleSheet } from 'react-native';
import {
  SPACE_16,
  SPACE_20,
  SPACE_32,
  SPACE_36,
  SPACE_40,
  SPACE_44,
  SPACE_48,
} from '@assets/style/wrapper';

export default StyleSheet.create({
  bagIcon: {
    marginTop: -1,
    alignItems: 'center',
    position: 'relative',
    marginLeft: SPACE_36,
    flexDirection: 'row',
    marginRight: SPACE_36,
    justifyContent: 'center',
  },
  badgeText: {
    fontSize: 13,
    marginTop: 5,
    marginLeft: 5,
  },
  section: {
    paddingHorizontal: SPACE_16,
  },
  belSection: {
    paddingTop: SPACE_48,
  },
  belTitle: {
    paddingHorizontal: SPACE_16,
  },
  containerBel: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginBottom: SPACE_48,
    paddingHorizontal: SPACE_16,
  },
  containerTitleBel: {
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  belContainer: {
    marginTop: -SPACE_40,
    marginBottom: SPACE_44,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  belImage: {
    paddingLeft: SPACE_20,
  },
  kissImage: {
    paddingRight: SPACE_16,
  },
  novidadeBellTitle: {
    paddingHorizontal: SPACE_32,
  },
  ButtonSeeAll: {
    position: 'absolute',
    bottom: 50,
    marginLeft: SPACE_16,
  },
});
