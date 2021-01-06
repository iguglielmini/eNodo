import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';

// Icons
import ArrowV from '@assets/svg/arrowRight';
// Styles
import Styles from './styles';

function LinkHelp({ data, onClick }) {
  if (!data.length) return null;
  return (
    <>
      <View style={Styles.containerHelp}>
        {data.map((item, index) => {
          const key = index;
          return (
            <TouchableOpacity key={key} onPress={() => onClick()}>
              <View style={[Styles.btnHelp, (key === data.length - 1) && Styles.borderNone]}>
                <Text style={Styles.titleHelp}>{item.title}</Text>
                <ArrowV />
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </>
  );
}

LinkHelp.propTypes = {
  onClick: PropTypes.func,
  data: PropTypes.arrayOf(PropTypes.any).isRequired,
};

LinkHelp.defaultProps = {
  onClick: () => {},
};

export default LinkHelp;
