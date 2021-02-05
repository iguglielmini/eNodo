import { StyleSheet, Dimensions } from 'react-native';
import { BLACK } from '@assets/style/colors';
import { SPACE_16, SPACE_32, SPACE_48 } from '@assets/style/wrapper';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    paddingTop: 100,
    backgroundColor: BLACK,
  },
  containerPage: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: '#F3F3F3',
  },
  content: {
    paddingTop: SPACE_48,
  },
  section: {
    paddingLeft: 0,
  },
  AlignItems: {
    marginBottom: 0,
  },
  containerTitle: {
    width,
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: SPACE_16,
    paddingRight: SPACE_32,
    justifyContent: 'space-between',
  },
  productCard: {
    paddingHorizontal: SPACE_16,
  },
});
