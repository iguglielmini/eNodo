import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 16,
  },
  card: {
    flexWrap: 'wrap',
    width: width - 110,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  dotContainer: {
    marginHorizontal: 0,
  },
  inactiveDot: {
    width: 5,
    height: 5,
    marginTop: 3,
    marginLeft: 3,
    marginRight: 3,
    borderRadius: 4,
    marginBottom: 3,
  },
  activeDot: {
    width: 8,
    height: 8,
    marginTop: 3,
    marginLeft: 3,
    marginRight: 3,
    borderRadius: 4,
    marginBottom: 3,
    backgroundColor: '#000',
  },
  imageCard: {
    width: 120,
    height: 104,
    padding: 16,
    marginRight: 16,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  slide: {
    width: width - 140,
  },
  pagination: {
    justifyContent: 'flex-end',
  },
});
