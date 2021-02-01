import { StyleSheet } from 'react-native';
import { BORDERGREY } from '@assets/style/colors';

export default StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  iconSpace: {
    marginLeft: 10,
  },
  btn: {
    borderWidth: 1,
    borderRadius: 4,
    marginRight: 10,
    marginBottom: 10,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    borderColor: BORDERGREY,
    backgroundColor: 'transparent',
  },
});
