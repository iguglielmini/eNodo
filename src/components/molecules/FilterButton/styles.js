import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  card: {
    width: '100%',
    maxWidth: 105,
    marginTop: 48,
    marginHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  description: {
    fontSize: 14,
    marginTop: 16,
    marginBottom: 24,
    fontWeight: '500',
    fontFamily: 'Inter',
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
    justifyContent: 'flex-start',
  },
});
