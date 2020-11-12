import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  flex: {
    display: 'flex',
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    fontFamily: 'Inter',
  },
  row: {
    flexDirection: 'row',
  },
  actionButtons: {
    width: 82,
  },
  light: {
    color: '#000000',
  },
  dark: {
    color: '#ffffff',
  },
  container: {
    paddingHorizontal: 16,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
});
