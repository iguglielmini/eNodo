import { StyleSheet } from 'react-native';
// import { BLACK, WHITE } from '@assets/style/colors';
import { TitleLarge } from '@assets/style/typography';

export default StyleSheet.create({
  btnBack: {
    paddingHorizontal: 26,
    paddingVertical: 20,
  },
  container: {
    paddingTop: 35,
    paddingBottom: 56,
    paddingHorizontal: 32,
  },
  containerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    zIndex: 5,
  },
  title: {
    ...TitleLarge,
  }
});
