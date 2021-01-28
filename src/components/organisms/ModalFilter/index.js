import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  Platform,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Modal from 'react-native-modal';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import SelectFilter from '@components/atoms/SelectFilter';
import DropDownSelect from '@components/atoms/DropDownSelect';

// Icons
import CloseIcon from '@assets/svg/close';

/** Styles */
import Styles from './styles';

class ModalFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: [],
      dropSelect: null,
    };
  }

  clearFilter = () => {
    this.setState({ selected: [], dropSelect: null });
  };

  filterDrop = selected => {
    this.setState({ dropSelect: selected });
  };

  filterSelect = value => {
    const { selected } = this.state;

    if (selected.includes(value)) {
      selected.splice(selected.indexOf(value), 1);
    } else {
      selected.push(value);
    }
    this.setState({ selected });
  };

  render() {
    const { visible, setVisible, data } = this.props;
    const { selected, dropSelect } = this.state;

    const { sort, facets } = data;

    return (
      <Animatable.View animation="slideInRight" style={Styles.container}>
        <Modal
          onBackdropPress={() => setVisible(false)}
          isVisible={visible}
          style={Styles.modal}
        >
          <View style={Styles.cardModal}>
            <View
              style={[
                Styles.containerTitle,
                Platform.OS === 'ios' && { marginTop: 24 },
              ]}
            >
              <Text style={Styles.Title}>Filtrar por</Text>
              <TouchableOpacity onPress={() => setVisible(false)}>
                <CloseIcon />
              </TouchableOpacity>
            </View>
            <ScrollView
              alwaysBounceVertical
              contentContainerStyle={Styles.bodyModal}
              showsVerticalScrollIndicator={false}
            >
              <View
                style={[
                  Styles.selectContainer,
                  Platform.OS === 'ios' && { zIndex: 10 },
                ]}
              >
                <Text style={Styles.subTitle}>{sort.label}</Text>
                <View>
                  <DropDownSelect
                    data={sort.options}
                    selected={dropSelect}
                    onSelect={this.filterDrop}
                  />
                </View>
              </View>
              {/* Section SubCategoria */}
              {facets.map((item, index) => {
                const key = index;
                const { label, options } = item;

                return (
                  <View style={Styles.selectContainer} key={key}>
                    <Text style={Styles.subTitle}>
                      {label}
                    </Text>
                    <View style={Styles.containerSelect}>
                      <SelectFilter
                        data={options}
                        selected={selected}
                        onSelect={this.filterSelect}
                      />
                    </View>
                  </View>
                );
              })}
            </ScrollView>
            {/* float button */}
            <LinearGradient
              start={{ x: 0, y: 0.9 }}
              end={{ x: 0.0, y: 0.0 }}
              locations={[0.8, 1]}
              colors={['#F3F3F3', 'rgba(243, 243, 243, 0)']}
              style={Styles.buttonContainer}
            >
              <TouchableOpacity onPress={() => this.clearFilter()}>
                <Text style={Styles.btnClear}>Limpar filtros</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {}}>
                <Text style={Styles.btnSave}>Filtrar</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </Modal>
      </Animatable.View>
    );
  }
}

ModalFilter.propTypes = {
  visible: PropTypes.bool,
  setVisible: PropTypes.func.isRequired,
  data: PropTypes.objectOf(PropTypes.any).isRequired,
};
ModalFilter.defaultProps = {
  visible: false,
};

export default ModalFilter;
