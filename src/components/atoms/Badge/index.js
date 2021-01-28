import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';

import BagFillIcon from '@assets/svg/bagFill';
import BagOutlineIcon from '@assets/svg/bagOutline';

import Styles from './styles';

function Badge({ theme, count }) {
  if (count > 0) {
    return (
      <>
        <BagFillIcon name="Bag" size={24} color={Styles[theme].color} />
        <Text style={[Styles.badgeText, Styles[theme]]}>{count}</Text>
      </>
    );
  }
  return <BagOutlineIcon name="Bag" size={24} color={Styles[theme].color} />;
}

Badge.propTypes = {
  count: PropTypes.number,
  theme: PropTypes.string,
};

Badge.defaultProps = {
  count: 0,
  theme: 'light',
};

export default Badge;
