import { StyleSheet } from 'react-native';
// import { BLACK, WHITE } from '@assets/style/colors';
import { LabelMedium, ParagraphMedium } from '@assets/style/typography';

export default StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 32,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  headerName: {
    ...LabelMedium
  },
  headerAccount: {
    ...ParagraphMedium,
    textDecorationLine: 'underline',
  },
  headerAccountClick: {
    padding: 15,
    marginRight: -15
  }
});
