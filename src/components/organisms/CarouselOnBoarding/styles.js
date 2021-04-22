import { StyleSheet, Dimensions } from 'react-native';
import { OnboardingTitle } from '@assets/style/typography';
import { SPACE_16, SPACE_40 } from '@assets/style/wrapper';
import { WHITE } from '@assets/style/colors';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  content: {
    width,
    flexDirection: 'column',
    alignItems: 'center'
  },
  //   Card
  cardContainer: {
    width,
    alignItems: 'center',
    justifyContent: 'center',

  },
  cardImage: {
    width: 250,
    alignItems: 'center',
    justifyContent: 'center',
  },
  TitleOnboarding: {
    ...OnboardingTitle,
    color: WHITE,
    textAlign: 'center',
  },
  cardTitleArea: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    paddingTop: 40,
    paddingHorizontal: 62,
  },
  containerButton: {
    paddingTop: SPACE_40,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonBoarding: {
    borderRadius: 5,
    marginBottom: 22,
    paddingVertical: 14,
    backgroundColor: WHITE,
    paddingHorizontal: SPACE_16,
  },
  //   Page Dot
  paginationContainer: {
    margin: 'auto',
    position: 'relative',
  },
  Themecolor: { color: WHITE },
  paginationDot: {
    width: 6,
    height: 6,
    opacity: 0.2,
    marginLeft: 4,
    borderRadius: 3,
    backgroundColor: WHITE,
  },
  paginationDotActive: {
    opacity: 1,
    transform: [{ scale: 1 }],
  },
  paginationDotLast: {
    transform: [{ scale: 0.5 }],
  },
  paginationDotPreviewLast: {
    transform: [{ scale: 0.8 }],
  },
});
