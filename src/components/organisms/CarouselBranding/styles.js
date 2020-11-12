import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    width,
    marginTop: 16,
  },

  wrapper: {},

  Card: {
    width,
    flex: 1,
    paddingLeft: 16,
    paddingBottom: 16,
    backgroundColor: 'red',
  },
  cardBranding: {
    width,
    margin: 16,
    height: 100,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  ImageCard: {
    borderRadius: 10,
    padding: 16,
    marginRight: 15,
    marginBottom: 15,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#ffffff',
  },
  ImageProduct: {
    width: width / 4,
    height: width / 5,
  },
});
