import { StyleSheet } from 'react-native';
import {
  WHITE,
  BLACK,
  $error,
  $success,
  $warning,
} from '@assets/style/colors';

export default StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    flex: 1,
  },
  toast: {
    minHeight: 76,
    paddingVertical: 17,
    paddingHorizontal: 20,
    marginTop: 32,
    marginLeft: 8,
    marginRight: 8,
    minWidth: '96%',
    borderRadius: 8,
    shadowColor: BLACK,
    shadowOffset: { width: 3, height: 7 },
    shadowOpacity: 0.2,
    shadowRadius: 9,
    alignItems: 'flex-start',
    justifyContent: 'center',
    zIndex: 100000,
  },
  error: {
    backgroundColor: $error,
  },
  success: {
    backgroundColor: $success,
  },
  warning: {
    backgroundColor: $warning,
  },
  titleBlack: {
    color: BLACK,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 14,
    color: WHITE,
    letterSpacing: -0.13,
    lineHeight: 16,
    marginBottom: 5,
  },
  text: {
    fontSize: 14,
    color: WHITE,
    letterSpacing: -0.13,
    lineHeight: 16,
  },
  closeIcon: {
    position: 'absolute',
    right: 15,
    top: 15,
  },
});
