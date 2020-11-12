import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    width: 400,
    height: 375,
    padding: 32,
    marginLeft: 16,
    borderRadius: 5,
    marginVertical: 48,
    overflow: 'hidden',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  },
  title: {
    fontSize: 20,
    color: '#ffffff',
    fontWeight: '700',
    fontFamily: 'Inter',
  },
  description: {
    fontSize: 20,
    color: '#ffffff',
    fontWeight: '500',
    fontFamily: 'Inter',
  },
});
