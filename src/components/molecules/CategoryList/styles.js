import { StyleSheet, Dimensions } from 'react-native';
import { BLACK, WHITE } from '@assets/style/colors';
import { SPACE_16, SPACE_24 } from '@assets/style/wrapper';
import { FONT_WEIGHT_MEDIUM, FONT_FAMILY } from '@assets/style/typography';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  card: {
    width: '100%',
    marginHorizontal: 15,
    maxWidth: ((width - 90) / 3) <= 90 ? 90 : 105,
    alignItems: 'center',
    justifyContent: 'center',
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    marginTop: SPACE_16,
    marginBottom: SPACE_24,
    fontWeight: FONT_WEIGHT_MEDIUM,
    fontFamily: FONT_FAMILY,
  },
  containerImage: {
    width: 72,
    height: 72,
    borderRadius: 72,
  },
  container: {
    flex: 1,
    flexWrap: 'wrap',
    paddingVertical: 5,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  light: {
    color: WHITE,
  },
  dark: {
    color: BLACK,
  },
});
