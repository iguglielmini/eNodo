import { StyleSheet } from 'react-native';
import { GREEN, RED } from '@assets/style/colors';

export default StyleSheet.create({
  complete: {
    color: GREEN,
  },
  canceled: {
    color: RED,
  },
  orderContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingVertical: 22,
    marginTop: 12,
  },
  orderItemsContainer: {
    paddingHorizontal: 32,
    paddingBottom: 40,
    paddingTop: 10,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  moreItemsButton: {
    padding: 16,
    borderColor: '#e1e1e2',
    borderWidth: 1,
    borderRadius: 30,
  },
});
