import { StyleSheet } from 'react-native';
import { BORDERGREY, WHITE } from '@assets/style/colors';
import { TitleXXSmall } from '@assets/style/typography';

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
  btnInactive: {
    borderRadius: 4,
    marginRight: 10,
    marginBottom: 10,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    backgroundColor: WHITE,
    borderColor: BORDERGREY,
  },
  btnActive: {
    borderRadius: 4,
    marginRight: 10,
    marginBottom: 10,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    backgroundColor: '#E5E5E5',
    borderColor: BORDERGREY,
  },
  buttonWrapper: {
    paddingTop: 20,
    paddingBottom: 20,
    alignItems: 'center',
    flexDirection: 'row',
  },
  textButton: {
    ...TitleXXSmall,
    marginRight: 8,
  },
});
