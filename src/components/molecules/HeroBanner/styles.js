import { Platform, StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    height: 600,
    paddingBottom: 24,
  },
  cardImage: {
    flex: 1,
  },
  bannerHeader: {
    position: 'absolute',
    zIndex: 10,
    top: Platform.OS === 'ios' ? 32 : 24,
    right: 10,
  },
  dot: {
    position: 'absolute',
    height: 24,
    width: '30%',
    overflow: 'visible',
    justifyContent: 'flex-start',
    left: 32,
  },
  buttonContainer: { left: 32, top: 432 },
  buttonSeeMore: {
    backgroundColor: '#fff',
    borderRadius: 4,
    paddingVertical: 14,
    paddingHorizontal: 18,
    fontFamily: 'Inter-Regular'
  },
});
