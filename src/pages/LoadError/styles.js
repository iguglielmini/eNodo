import { Dimensions, StyleSheet } from 'react-native';
import { WHITE, PRIMARY, BORDERGREY } from '@assets/style/colors';
import { TitleMedium } from '@assets/style/typography';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 10,
    width,
    height,
    paddingTop: 64,
    paddingBottom: 120,
    paddingHorizontal: 32,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: PRIMARY,
  },
  imageContainer: {
    backgroundColor: '#fff',
    paddingHorizontal: 8,
    paddingVertical: 16,
    borderRadius: 120,
  },
  title: {
    color: WHITE,
    fontSize: TitleMedium.fontSize,
    maxWidth: '60%',
    textAlign: 'center',
  },
  reloadButton: {
    backgroundColor: WHITE,
    borderColor: BORDERGREY,
    borderWidth: 1,
    borderRadius: 10,
    padding: 16,
  },
});
