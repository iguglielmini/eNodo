/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  View,
  Text,
  Platform,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import SelectFilter from '@components/atoms/SelectFilter';
import DropDownSelect from '@components/atoms/DropDownSelect';

import { changeStatusBar } from '@modules/utils';

// Icons
import CloseIcon from '@assets/svg/close';

/** Styles */
import Styles from './styles';

class Filter extends Component {
  constructor(props) {
    super(props);

    changeStatusBar('dark-content');

    this.state = {
      filters: {
        sort: {
          label: '',
          options: [],
        },
        facets: [],
      },
      selectedItems: [],
      dropSelected: null,
    };
  }

  componentDidMount() {
    const { route } = this.props;
    const { filters } = route.params;
    this.getFilters(filters);
  }

  getFilters = (filters) => {
    const { selectedItems } = this.state;
    const { sort, facets } = filters;

    const sortSelected = sort.options.filter(item => item.selected);
    const optionsFacets = facets.map(({ options }) => options.reduce(item => item));

    optionsFacets.forEach((opt, index) => {
      console.log('opt filter', opt);
      if (opt.selected) {
        selectedItems.push(opt.value);
      } else selectedItems.slice(index, 1);
    });

    if (sortSelected.length) {
      this.setState({ dropSelected: sortSelected[0] });
    }

    this.setState({ filters, selectedItems });
  };

  handleDropSelect = (selected) => {
    this.setState({ dropSelected: selected });
  };

  handlerFilterSelect = (value) => {
    const { selectedItems } = this.state;
    const hasSelected = selectedItems.includes(value);

    if (hasSelected) {
      selectedItems.splice(selectedItems.indexOf(value), 1);
    }
    if (!hasSelected) {
      selectedItems.push(value);
    }

    this.setState({ selectedItems });
  };

  clearFilter = () => {
    this.setState({
      selectedItems: [],
    });
  };

  applyFilter = () => {
    const { navigation } = this.props;
    const { selectedItems, dropSelected, filters } = this.state;

    const {
      terms,
      category,
    } = filters;

    const params = {
      terms,
      title: '',
      isFavorite: false,
      searchTerms: null,
      sort: dropSelected.value,
      hideOptionsButtons: false,
    };

    if (selectedItems.length > 0) params.facets = selectedItems;
    if (category) params.category = category.value;

    navigation.navigate('FilterResult', params);
  };

  render() {
    const { filters, dropSelected, selectedItems } = this.state;
    const { facets, sort } = filters;

    return (
      <SafeAreaView style={Styles.saveArea}>
        <View style={Styles.wrapper}>
          <View style={Styles.containerTitle}>
            <Text style={Styles.Title}>Filtrar por</Text>
            <CloseIcon onPress={this.applyFilter} />
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              style={Styles.gradientTop}
              colors={['#F3F3F3', 'rgba(243, 243, 243, 0)']}
            />
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
                {sort.options.length > 0 && (
                  <DropDownSelect
                    data={sort.options}
                    selected={dropSelected}
                    onSelect={this.handleDropSelect}
                  />
                )}
              </View>
            </View>
            {facets.map((item, index) => {
              const key = index;
              const { label, options } = item;

              return (
                <View style={Styles.selectContainer} key={key}>
                  <Text style={Styles.subTitle}>{label}</Text>
                  <View style={Styles.containerSelect}>
                    <SelectFilter
                      data={options}
                      selected={selectedItems}
                      onSelect={this.handlerFilterSelect}
                    />
                  </View>
                </View>
              );
            })}
          </ScrollView>
          <View style={Styles.buttonContainer}>
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              style={Styles.gradient}
              colors={['rgba(243, 243, 243, 0)', '#F3F3F3']}
            />
            <TouchableOpacity onPress={this.clearFilter}>
              <Text style={Styles.btnClear}>Limpar filtros</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.applyFilter}>
              <Text style={Styles.btnSave}>Filtrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

Filter.propTypes = {
  route: PropTypes.objectOf(PropTypes.any).isRequired,
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapStateToProps = store => ({
  lengthCart: store.cart.lengthCart,
});

export default connect(
  mapStateToProps,
  null
)(Filter);
