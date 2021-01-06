
export const modalBottomTimeAnimation = 500;
export const modalBottomBackdropTimeAnimation = 300;
export const modalBottomBackdropTimeOutAnimation = 0;
export const backdropOpacity = 0.7;

export const modalBottom = {
  hideModalContentWhileAnimating: true,
  avoidKeyboard: true,
  useNativeDrive: true,
  propagateSwipe: true,
  animationOutTiming: modalBottomTimeAnimation,
  animationInTiming: modalBottomTimeAnimation,
  backdropTransitionInTiming: modalBottomBackdropTimeAnimation,
  backdropTransitionOutTiming: modalBottomBackdropTimeOutAnimation,
  backdropOpacity,
  swipeDirection: 'down',
};

export const centerModal = {
  ...modalBottom,
  swipeDirection: null,
  hideModalContentWhileAnimating: false,
  propagateSwipe: false,
  animationIn: 'zoomIn',
};
