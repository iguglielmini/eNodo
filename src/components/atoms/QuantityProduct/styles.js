import { StyleSheet } from 'react-native';
import { TEXTPINK, BGGREY, BLACK } from '@assets/style/colors';
import { SPACE_24 } from '@assets/style/wrapper';
import { TitleXSmall } from '@assets/style/typography';


export default StyleSheet.create({
  containerAddProduct: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomWidth: 1,
    paddingBottom: SPACE_24,
    borderBottomColor: BGGREY,
    justifyContent: 'space-between',
  },
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  label: {
    textAlign: 'left',
  },
  dropdown: {
    padding: 0,
    width: 50,
    zIndex: 9999,
  },
  item: {
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  quantyPrice: {
    color: TEXTPINK,
    ...TitleXSmall,
    paddingLeft: SPACE_24,
  },
  btnText: {
    color: BLACK,
    ...TitleXSmall,
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textDecorationColor: BLACK,
  },
  iconContainer: {
    top: 20,
  },
  pickerSelectStyles: {
    color: BLACK
  }
});
