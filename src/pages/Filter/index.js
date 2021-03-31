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
      seletedItems: [],
      dropSelected: null,
    };
  }

  componentDidMount() {
    this.getFilters();
  }

  getFilters = () => {
    const seletedItems = [];
    const { route } = this.props;
    const { filters } = route.params;
    const {
      facets,
      sort: { options },
    } = filters;

    const sortSelected = options.filter(item => item.selected);

    facets.map(item => {
      const { options } = item;

      options.map(opt => {
        if (opt.selected) seletedItems.push(opt.value);
        return opt;
      });

      return item;
    });

    if (sortSelected.length > 0)
      this.setState({ dropSelected: sortSelected[0] });

    this.setState({ filters });
  };

  handleDropSelect = selected => {
    this.setState({ dropSelected: selected });
  };

  handlerFilterSelect = value => {
    const { seletedItems } = this.state;

    if (seletedItems.includes(value)) {
      seletedItems.splice(seletedItems.indexOf(value), 1);
    } else {
      seletedItems.push(value);
    }

    this.setState({ seletedItems });
  };

  clearFilter = () => {
    this.setState({
      seletedItems: [],
    });
  };

  applyFilter = () => {
    const { navigation } = this.props;
    const { seletedItems, dropSelected, filters } = this.state;

    const {
      category,
      // brand,
      // datasource
    } = filters;

    const params = {
      title: '',
      searchTerms: null,
      sort: dropSelected.value,
      hideOptionsButtons: false,
    };

    if (seletedItems.length > 0) params.facets = seletedItems;
    if (category) params.category = category.value;

    navigation.navigate('FilterResult', params);
  };

  render() {
    const { navigation } = this.props;
    const { filters, dropSelected, seletedItems } = this.state;
    const { facets, sort } = filters;

    return (
      <SafeAreaView style={Styles.saveArea}>
        <View style={Styles.wrapper}>
          <View style={Styles.containerTitle}>
            <Text style={Styles.Title}>Filtrar por</Text>
            <CloseIcon onPress={() => navigation.goBack()} />
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
                      selected={seletedItems}
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
