import { StyleSheet, Dimensions } from 'react-native';
import {
  SPACE_16, SPACE_32
} from '@assets/style/wrapper';
import { BLACK, WHITE } from '@assets/style/colors';
import { TitleSmall } from '@assets/style/typography';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  // Container Page
  Container: {
    backgroundColor: BLACK,
    paddingTop: 100,
  },
  //   Container Sections
  containerPage: {
    backgroundColor: '#F3F3F3',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  section: {
    paddingLeft: 0,
  },
  subTitle: {
    ...TitleSmall
  },
  AlignItems: {
    marginBottom: 0,
    width: '75%',
  },
  containerSelectedOption: {},
  containerSubtitle: {
    width,
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: SPACE_32,
    paddingHorizontal: SPACE_32,
    justifyContent: 'space-between',
  },
  ProductCard: {
    paddingHorizontal: SPACE_16,
  },
  btnFilter: {
    backgroundColor: WHITE,
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 4,
  }
});
