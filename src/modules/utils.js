import React from 'react';
import { Platform, PixelRatio, Dimensions, Text } from 'react-native';

export const isiOS = Platform.OS === 'ios';
export const isAndroid = Platform.OS === 'android';

export const hasBottomNotch = () => {
  const dimen = Dimensions.get('window');
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    (dimen.height === 812 ||
      dimen.width === 812 ||
      (dimen.height === 896 || dimen.width === 896))
  );
};

export const getAddressesByBusinessLocations = ({
  businessLocations = [],
  address,
  city,
  state,
}) => {
  const uniqueLocations = businessLocations.filter(
    (location, i) =>
      businessLocations.findIndex(item => item.city === location.city) === i
  );

  // return all cities and states if there's more than one location
  if (businessLocations && businessLocations.length > 1) {
    return uniqueLocations
      .map(location => `${location.city}, ${location.state}`)
      .join('\n');
  }

  // return the unique location if there's one location
  if (uniqueLocations[0] && !(address && state && city)) {
    return `${uniqueLocations[0].address}, ${uniqueLocations[0].city}, ${
      uniqueLocations[0].state
    }`;
  }

  // return address old-style, verifing each information
  let uniqueAddress = `${address}`;

  if (city) uniqueAddress += `, ${city}`;
  if (state) uniqueAddress += `, ${state}`;

  return uniqueAddress;
};

export const capitalize = string =>
  `${string[0].toUpperCase()}${string.slice(1)}`;

export const configureFontWeight = () => {
  const oldRender = Text.render;

  const settings = [
    {
      fontFamily: 'sans-serif-thin',
      fontWeight: 'normal',
    },
    {
      fontFamily: 'sans-serif-light',
      fontWeight: 'normal',
    },
    {
      fontFamily: 'sans-serif',
      fontWeight: 'normal',
    },
    {
      fontFamily: 'sans-serif-medium',
      fontWeight: 'normal',
    },
    {
      fontFamily: 'sans-serif',
      fontWeight: 'bold',
    },
    {
      fontFamily: 'sans-serif-medium',
      fontWeight: 'bold',
    },
  ];

  const defaultIndex = 2;

  const someStyleHasFontWeight = styles => {
    if (!styles) return false;
    if (typeof styles.length !== 'undefined') {
      let indexPlus = false;
      styles.forEach((style, i) => {
        if (!style) return;
        if (typeof style.fontWeight !== 'undefined') indexPlus = i + 1;
      });
      return indexPlus;
    }

    return styles.fontWeight !== 'undefined';
  };

  Text.render = (...args) => {
    const origin = oldRender.call(this, ...args);

    if (Platform.OS === 'android') {
      let useIndex = defaultIndex;
      const hasFontWeight = someStyleHasFontWeight(origin.props.style);

      if (typeof origin.props.style !== 'undefined' && hasFontWeight) {
        const fontWeight =
          hasFontWeight && origin.props.style[hasFontWeight - 1]
            ? origin.props.style[hasFontWeight - 1].fontWeight
            : origin.props.style.fontWeight;
        if (
          fontWeight === '100' ||
          fontWeight === '200' ||
          fontWeight === '300'
        ) {
          useIndex = 0;
        } else if (fontWeight === '400') {
          useIndex = 1;
        } else if (fontWeight === '500' || fontWeight === 'normal') {
          useIndex = 2;
        } else if (fontWeight === '600') {
          useIndex = 3;
        } else if (fontWeight === '700' || fontWeight === 'bold') {
          useIndex = 4;
        } else if (fontWeight === '800' || fontWeight === '900') {
          useIndex = 5;
        }
      }

      return React.cloneElement(origin, {
        style: [settings[defaultIndex], origin.props.style, settings[useIndex]],
      });
    }

    return origin;
  };
};

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

const scaleWidth = SCREEN_WIDTH / 375;
const scaleHeight = SCREEN_HEIGHT / 768;

// TO USE IN WIDTH
export const normalizeWidth = size => {
  const newSize = size * scaleWidth;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  }
  return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
};

// TO USE IN Height AND paddings
export const normalizeHeight = size => {
  const newSize = size * scaleHeight;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  }
  return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
};

export const convertToPriceText = price =>
  `R$ ${Number(price)
    .toFixed(2)
    .replace('.', ',')
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}`;

export const truncateString = (string, maxLength) =>
  `${string.slice(0, maxLength)}...`;

export const convertDiscount = discount => String(discount).slice(0, 2);

export const calcTotalQuantityCart = items => {
  let total = items.map(item => item.quantity);
  total = total.reduce((acumulator, currentValue) => acumulator + currentValue);
  return total;
};
