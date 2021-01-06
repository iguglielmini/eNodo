import { StyleSheet } from 'react-native';
import { SPACE_16, SPACE_24, SPACE_48 } from '@assets/style/wrapper';
import { FONT_WEIGHT_MEDIUM, FONT_FAMILY } from '@assets/style/typography';


export default StyleSheet.create({
  card: {
    width: '100%',
    maxWidth: 105,
    marginTop: SPACE_48,
    marginHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  description: {
    fontSize: 14,
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
});
