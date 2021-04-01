import { StyleSheet } from 'react-native';
import {
  SPACE_16,
  SPACE_20,
  SPACE_32,
  SPACE_40,
  SPACE_44,
  SPACE_48,
} from '@assets/style/wrapper';

export default StyleSheet.create({
  hero: {
    padding: 0,
    margin: 0,
    position: 'relative',
  },
  section: {
    paddingHorizontal: SPACE_16,
  },
  belSection: {
    paddingTop: SPACE_48,
  },
  belTitle: {
    marginLeft: 0,
    paddingLeft: 0,
    marginBottom: 0,
    paddingBottom: 0,
  },
  containerBel: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: SPACE_48,
    paddingHorizontal: SPACE_16,
    justifyContent: 'space-between',
  },
  containerTitleBel: {
    alignItems: 'flex-end',
    flexDirection: 'column',
  },
  belContainer: {
    marginTop: -SPACE_40,
    flexDirection: 'row',
    marginBottom: SPACE_44,
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
});
