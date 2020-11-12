import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    height: 260,
    padding: 32,
    width: '100%',
    borderRadius: 5,
    marginVertical: 20,
    overflow: 'hidden',
    flexDirection: 'column',
    alignItems: 'flex-start',
    backgroundColor: '#ffffff',
    justifyContent: 'space-between',
  },
  title: {
    width: 140,
    fontSize: 20,
    fontWeight: '400',
    fontFamily: 'Inter',
  },
  price: {
    fontSize: 20,
    color: '#DB207F',
    fontWeight: '400',
    fontFamily: 'Inter',
  },
  image: {
    top: 26,
    right: -1,
    position: 'absolute',
  },
});
