import { StyleSheet } from 'react-native';
import { WHITE, BLACK } from '@assets/style/colors';

export default StyleSheet.create({
  container: {
    width: '100%',
    minWidth: '100%',
    maxWidth: '100%',
    height: '100%',
  },
  btnWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 999,
  },
  btnImageIcon: {
    marginTop: 40,
    marginLeft: 16,
    marginRight: 16,
    marginBottom: 16,
    backgroundColor: WHITE,
    borderRadius: 50,
    padding: 10,
    shadowColor: BLACK,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4.65,
    elevation: 8,
  },
  loader: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    marginLeft: -50,
    marginTop: -50,
    zIndex: 2
  }
});
