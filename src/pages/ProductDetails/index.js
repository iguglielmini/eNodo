import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  View,
  Text,
  ScrollView,
  ActivityIndicator,
} from 'react-native';

import { TouchableOpacity } from 'react-native-gesture-handler';

/* component */
import ListCard from '@components/molecules/ListCard';
import ModalCep from '@components/organisms/ModalCep';
import Accordion from '@components/organisms/Accordion';
import FloatButtonBuy from '@components/atoms/FloatButtonBuy';
import ModalDetails from '@components/organisms/ModalDetails';
import CarouselProduct from '@components/organisms/CarouselProduct';
import CarouselBuyTogether from '@components/organisms/CarouselBuyTogether';

/** icons */
import ArrowVIcon from '@assets/svg/arrowv';
import LogoIcon from '@assets/svg/logoIcon';
import DetailIcon from '@assets/svg/detail';
import FavoriteIcon from '@assets/svg/favorite';

// API
import ApiProduct from '@modules/api/api-product';
import ApiShopping from '@modules/api/api-shopping';

// Redux e Utils
import { calcTotalQuantityCart, changeStatusBar } from '@modules/utils';
import DeviceStorage from '@modules/services/device-storage';
import { saveLengthCart, saveAddProductCart } from '@redux/actions';

// Mocks
import CardBuyTogetherMock from '@mock/CardBuyTogetherMock';

/** Styles */
import DefaultStyles from '@assets/style/default';
import { SafeAreaView } from 'react-navigation';
import Styles from './styles';

class ProductDetails extends Component {
  constructor(props) {
    super(props);

    changeStatusBar('dark-content');

    this.state = {
      textCep: '',
      details: {},
      delivery: {},
      product: {
        brand: {
          title: '',
        },
        gallery: [],
        descriptions: [],
        price: {
          current: 0.0,
          previous: 0.0,
        },
      },
      loading: true,
      // eslint-disable-next-line react/no-unused-state
      theme: 'light',
      modalCepVisible: false,
      productsAssociations: {
        similar: [],
        clientsBy: [],
      },
      modalDetailsVisible: false,
      daysCep: '7 dia(s) útil(eis)',
    };
  }

  componentDidMount() {
    changeStatusBar('dark-content');
    this.getData();
    this.getDelivery();
  }

  getData = async () => {
    const { route } = this.props;
    const { slug } = route.params;
    const requests = await Promise.all([
      ApiProduct.getProduct(slug),
      ApiProduct.getProductAssociations(slug),
    ]).finally(() => this.setState({ loading: false }));

    const dataProduct = requests[0].data;
    const dataProductAssociations = requests[1].data;

    if (dataProduct) {
      const { theme, widgets } = dataProduct;
      const product = widgets[0].details;
      // eslint-disable-next-line react/no-unused-state
      this.setState({ product, theme });
    }

    if (dataProductAssociations.length) {
      const { productsAssociations } = this.state;

      dataProductAssociations.forEach((section) => {
        const { widgets } = section;

        widgets.forEach((widget) => {
          const { items } = widget;

          if (widget.alias === 'quem-comprou-comprou-tambem') {
            productsAssociations.clientsBy = items;
          }
          if (widget.alias === 'quem-viu-viu-tambem') {
            productsAssociations.similar = items;
          }
        });
      });

      this.setState({ productsAssociations });
    }
  };

  getDelivery = async () => {
    const delivery = await DeviceStorage.getItem('@BelshopApp:delivery');
    if (delivery) this.setState({ delivery });
  };

  setModalCepVisible = modalCepVisible => this.setState({ modalCepVisible });

  setModalDetailsVisible = (modalDetailsVisible) => {
    this.setState({ modalDetailsVisible });
  };

  showModalDetails = (details) => {
    const { modalDetailsVisible } = this.state;
    this.setState({ modalDetailsVisible: !modalDetailsVisible, details });
  };

  addProductToCart = (setLoading, setModalBuyVisible) => {
    let { textCep } = this.state;
    const { route } = this.props;
    const { id, sku } = route.params;

    textCep = textCep.replace('-', '');
    setLoading(true);

    const form = {
      products: [{
        product: id, sku, quantity: 1, postalCode: textCep
      }],
    };
    ApiShopping.basketAddItem(form)
      .then(({ data }) => {
        setLoading(false);
        setModalBuyVisible(true);

        if (data) {
          const {
            basket: { items },
          } = data;
          const lengthItems = calcTotalQuantityCart(items);

          this.props.saveAddProductCart(items);
          this.props.saveLengthCart(lengthItems);
        }
      })
      .catch(() => setLoading(false));
  };

  handleSaveCep = (cep) => {
    const { route } = this.props;
    const { id, sku } = route.params;

    this.setState({ textCep: cep, loading: true }, () => {
      let { textCep } = this.state;
      textCep = textCep.replace('-', '');

      ApiShopping.getProductDelivery({
        sku,
        product: id,
        postalCode: textCep,
      })
        .then(async ({ data }) => {
          const { deliveryOption } = data;
          await DeviceStorage.setItem('@BelshopApp:delivery', {
            ...deliveryOption,
            postalCode: cep,
          });
          await this.getDelivery();
          this.setState({ daysCep: deliveryOption.estimatedTime });
        })
        .finally(() => this.setState({ loading: false }));
    });
  };

  handleClearCep = () => {
    this.setState({ textCep: '', daysCep: '7 dia(s) útil(eis)' });
  };

  render() {
    const { navigation } = this.props;
    const {
      product,
      textCep,
      daysCep,
      details,
      loading,
      delivery,
      modalCepVisible,
      modalDetailsVisible,
      productsAssociations,
    } = this.state;

    const { brand, price } = product;
    const { estimatedTime, postalCode } = delivery;

    return (
      <>
        <SafeAreaView style={{ flex: 0, backgroundColor: '#fff' }} />
        <SafeAreaView style={DefaultStyles.viewGrey}>
          <SafeAreaView style={Styles.saveAreaHeader}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={Styles.btnImageIcon}>
              <ArrowVIcon />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}} style={Styles.btnImageIcon}>
              <FavoriteIcon />
            </TouchableOpacity>
          </SafeAreaView>
          {loading && (
            <View style={DefaultStyles.loading}>
              <ActivityIndicator size="large" color="#000" />
            </View>
          )}
          <ScrollView
            keyboardShouldPersistTaps="always"
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingBottom: product && product.available ? 50 : 0
            }}
          >
            {!loading && (
              <>
                <CarouselProduct gallery={product.gallery} />
                <View style={Styles.wrapperPage}>
                  <View style={Styles.containerTitle}>
                    <Text style={Styles.titleProduct}>{brand.title}</Text>
                    <Text style={Styles.subTitle}>{product.title}</Text>
                  </View>
                  {/* Details Payment */}
                  <View style={Styles.containerDescription}>
                    <View style={Styles.detailsProduct}>
                      <DetailIcon />
                      <View style={Styles.description}>
                        <Text style={Styles.descriptionTitle}>Frete Grátis</Text>
                        <View style={Styles.modalContainer}>
                          <Text style={Styles.descriptionSubTitle}>
                          Entrega em até
                            {' '}
                            {estimatedTime || daysCep}
                            {' '}
                          após a postagem do produto. &nbsp;
                            <Text
                              style={Styles.btnModal}
                              onPress={() => this.setModalCepVisible(true)}
                            >
                              {(!postalCode) ? 'Trocar CEP' : `CEP ${postalCode || textCep}`}
                            </Text>
                          </Text>
                          <ModalCep
                            cepValue={textCep}
                            visible={modalCepVisible}
                            handleSave={this.handleSaveCep}
                            handleClear={this.handleClearCep}
                            setVisible={this.setModalCepVisible}
                          />
                        </View>
                      </View>
                    </View>

                    <View style={Styles.detailsProduct}>
                      <LogoIcon />
                      <View style={Styles.description}>
                        <Text style={Styles.descriptionTitle}>Loja com estoque</Text>
                        <Text style={Styles.descriptionSubTitle}>
                        Av. Wenceslau Escobar. 2801 Tristeza, Porto Alegre-RS &nbsp;
                          <Text style={Styles.btnModal} onPress={() => {}}>
                          Outras lojas
                          </Text>
                        </Text>
                      </View>
                    </View>
                  </View>

                  {/* Accordion */}
                  <View style={Styles.containerAccordion}>
                    <Accordion
                      data={product.descriptions}
                      actionMore={this.showModalDetails}
                    />
                    <ModalDetails
                      details={details}
                      visible={modalDetailsVisible}
                      setVisible={this.setModalDetailsVisible}
                    />
                  </View>

                  {/* Compre Junto Area */}
                  <View style={Styles.containerCarouselPay}>
                    <Text style={Styles.ClientPayTitle}>Compre junto</Text>
                    <CarouselBuyTogether data={CardBuyTogetherMock} />
                  </View>

                  {/* Clientes Tambem Compraram Area */}
                  {productsAssociations.clientsBy.length > 0 && (
                  <View style={Styles.ContainerClientPay}>
                    <Text style={Styles.ClientPayTitle}>
                      Clientes também compraram
                    </Text>
                    <ListCard
                      data={productsAssociations.clientsBy}
                      navigation={navigation}
                    />
                  </View>
                  )}

                  {/* Produtos semelhantes */}
                  {productsAssociations.similar.length > 0 && (
                  <View style={Styles.ContainerProductSimilar}>
                    <Text style={Styles.ClientPayTitle}>Produtos semelhantes</Text>
                    <ListCard
                      data={productsAssociations.similar}
                      navigation={navigation}
                    />
                  </View>
                  )}
                </View>
              </>
            )}
          </ScrollView>
          {product && product.available && (
          <FloatButtonBuy
            price={price}
            navigation={navigation}
            addProductToCart={this.addProductToCart}
          />
          )}
        </SafeAreaView>
      </>
    );
  }
}

ProductDetails.propTypes = {
  route: PropTypes.objectOf(PropTypes.any).isRequired,
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    saveLengthCart,
    saveAddProductCart,
  },
  dispatch
);

export default connect(
  null,
  mapDispatchToProps
)(ProductDetails);
