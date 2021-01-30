import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  Platform,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import Modal from 'react-native-modal';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import SelectFilter from '@components/atoms/SelectFilter';
import DropDownSelect from '@components/atoms/DropDownSelect';


// Icons
import CloseIcon from '@assets/svg/close';

/** Styles */
import DefaultStyles from '@assets/style/default';
import Styles from './styles';

function ModalFilter({
  data,
  visible,
  loading,
  setVisible,
  seletedItens,
  dropSelected,
  handleFilter,
  handleDropSelect,
  handleClearFilter,
  handlerFilterSelect,
}) {
  const { sort, facets } = data;

  return (
    <Animatable.View animation="slideInRight" style={Styles.container}>
      <Modal
        isVisible={visible}
        style={Styles.modal}
        onBackdropPress={setVisible}
      >
        <View style={Styles.cardModal}>
          {loading && (
            <View style={DefaultStyles.loading}>
              <ActivityIndicator size="large" color="#ffffff" />
            </View>
          )}
          <View
            style={[
              Styles.containerTitle,
              Platform.OS === 'ios' && { marginTop: 24 },
            ]}
          >
            <Text style={Styles.Title}>Filtrar por</Text>
            <TouchableOpacity onPress={setVisible}>
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
                  selected={dropSelected}
                  onSelect={handleDropSelect}
                />
              </View>
            </View>
            {/* Section SubCategoria */}
            {facets.map((item, index) => {
              const key = index;
              const { label, options } = item;

              return (
                <View style={Styles.selectContainer} key={key}>
                  <Text style={Styles.subTitle}>{label}</Text>
                  <View style={Styles.containerSelect}>
                    <SelectFilter
                      data={options}
                      selected={seletedItens}
                      onSelect={handlerFilterSelect}
                    />
                  </View>
                </View>
              );
            })}
          </ScrollView>
          {/* float button */}
          <LinearGradient
            locations={[0.8, 1]}
            start={{ x: 0, y: 0.9 }}
            end={{ x: 0.0, y: 0.0 }}
            style={Styles.buttonContainer}
            colors={['#F3F3F3', 'rgba(243, 243, 243, 0)']}
          >
            <TouchableOpacity onPress={handleClearFilter}>
              <Text style={Styles.btnClear}>Limpar filtros</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleFilter}>
              <Text style={Styles.btnSave}>Filtrar</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </Modal>
    </Animatable.View>
  );
}

ModalFilter.propTypes = {
  visible: PropTypes.bool,
  loading: PropTypes.bool,
  setVisible: PropTypes.func.isRequired,
  handleFilter: PropTypes.func.isRequired,
  handleDropSelect: PropTypes.func.isRequired,
  handleClearFilter: PropTypes.func.isRequired,
  handlerFilterSelect: PropTypes.func.isRequired,
  dropSelected: PropTypes.objectOf(PropTypes.any),
  data: PropTypes.objectOf(PropTypes.any).isRequired,
  seletedItens: PropTypes.arrayOf(PropTypes.any).isRequired,
};
ModalFilter.defaultProps = {
  visible: false,
  loading: false,
  dropSelected: null,
};

export default ModalFilter;
