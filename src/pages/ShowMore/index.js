import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Title from '@components/atoms/Title';
import Section from '@components/atoms/Section';
import ListCard from '@components/molecules/ListCard';
import HeaderCategory from '@components/atoms/HeaderCategory';
import { View, ScrollView, Alert, ActivityIndicator } from 'react-native';

// APIS
import ApiCatalogy from '@modules/api/api-catalog';

// Styles
import DefaultStyles from '@assets/style/default';
import Styles from './styles';

class ShowMore extends Component {
  constructor(props) {
    super(props);

    const { route } = this.props;
    const { title, datasource } = route.params;

    this.state = {
      title,
      datasource,
      products: [],
      loading: true,
    };
  }

  componentDidMount() {
    const { title, datasource } = this.state;

    this.getFilterData({ title, datasource });
  }

  getFilterData = filter => {
    ApiCatalogy.getCatalogSearch(filter)
      .then(({ data }) => {
        const { products } = data;

        if (!products.length) {
          Alert.alert('Ooops!', 'Produto(s) não disponível(eis).', [
            {
              text: 'Ok',
              onPress: () => this.handleBack(),
            },
          ]);
          return;
        }

        this.setState({ products });
      })
      .finally(() => this.setState({ loading: false }));
  };

  handleBack = () => {
    const { navigation } = this.props;
    navigation.goBack();
  };

  render() {
    const { navigation, lengthCart } = this.props;
    const { products, title, loading } = this.state;

    return (
      <View style={Styles.container}>
        <HeaderCategory
          lengthCart={lengthCart}
          navigation={navigation}
          handleGoBack={this.handleBack}
        />
        <View style={Styles.containerPage}>
          {loading && (
            <View style={DefaultStyles.loading}>
              <ActivityIndicator size="large" color="#ffffff" />
            </View>
          )}
          <ScrollView alwaysBounceVertical showsVerticalScrollIndicator={false}>
            <View style={Styles.content}>
              <View style={Styles.containerTitle}>
                <Title title={title} style={Styles.AlignItems} />
              </View>
              <Section style={Styles.section}>
                <View style={Styles.productCard}>
                  <ListCard data={products} navigation={navigation} />
                </View>
              </Section>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

ShowMore.propTypes = {
  route: PropTypes.objectOf(PropTypes.any).isRequired,
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapStateToProps = store => ({
  lengthCart: store.cart.lengthCart,
});

export default connect(
  mapStateToProps,
  null
)(ShowMore);
