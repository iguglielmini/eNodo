import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View, Text, ScrollView, ActivityIndicator } from 'react-native';

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

// Services
import ApiProfile from '@modules/api/api-profile';
import {
  updateProductDelivery,
  clearProductDelivery,
  getProductDeliveryOption,
} from '@modules/services/delivery';

// Redux e Utils
import DeviceStorage from '@modules/services/device-storage';
import { calcTotalQuantityCart, changeStatusBar } from '@modules/utils';
import {
  saveLengthCart,
  saveAddProductCart,
  favoritesUser,
} from '@redux/actions';

// Mocks
import CardBuyTogetherMock from '@mock/CardBuyTogetherMock';

/** Styles */
import { SafeAreaView } from 'react-navigation';
import DefaultStyles from '@assets/style/default';
import { WHITELIGHT, BLACK } from '@assets/style/colors';
import Styles from './styles';

class ProductDetails extends Component {
  constructor(props) {
    super(props);

    changeStatusBar('dark-content');

    this.state = {
      details: {},
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
      deliveryCalculating: true,
      loading: true,
      // eslint-disable-next-line react/no-unused-state
      theme: 'light',
      modalCepVisible: false,
      productsAssociations: {
        similar: [],
        clientsBy: [],
      },
      modalDetailsVisible: false,
      deliveryOption: null,
    };
  }

  componentDidMount() {
    changeStatusBar('dark-content', WHITELIGHT);
    this.getData();
  }

  getDeliveryData = async () => {
    const { route, delivery } = this.props;
    const { id, sku } = route.params;

    this.setState({ deliveryCalculating: true });

    const deliveryOption = getProductDeliveryOption({ product: id, sku });

    if (delivery.cep && deliveryOption.cep !== delivery.cep) {
      return this.handleSaveCep(delivery.formatedCep);
    }

    return this.setState({ deliveryOption, deliveryCalculating: false });
  };

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

      if (product.available) {
        this.getDeliveryData();
      }

      // eslint-disable-next-line react/no-unused-state
      this.setState({ product, theme });
    }

    if (dataProductAssociations.length) {
      const { productsAssociations } = this.state;

      dataProductAssociations.forEach(section => {
        const { widgets } = section;

        widgets.forEach(widget => {
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

  setModalCepVisible = modalCepVisible => this.setState({ modalCepVisible });

  setModalDetailsVisible = modalDetailsVisible => {
    this.setState({ modalDetailsVisible });
  };

  showModalDetails = details => {
    const { modalDetailsVisible } = this.state;
    this.setState({ modalDetailsVisible: !modalDetailsVisible, details });
  };

  addProductToCart = (setLoading, setModalBuyVisible) => {
    const { route, delivery } = this.props;
    const { id, sku } = route.params;
    const postalCode = delivery.cep;

    setLoading(true);

    const form = {
      products: [
        {
          product: id,
          sku,
          quantity: 1,
          postalCode,
        },
      ],
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

  handleClearCep = async () => {
    try {
      await clearProductDelivery();
    } finally {
      this.setState({ deliveryOption: null });
    }
  };

  handleSaveCep = async cep => {
    const { route } = this.props;
    const { id, sku } = route.params;

    this.setState({ deliveryCalculating: true });

    try {
      await updateProductDelivery(cep, {
        sku,
        product: id,
      });
    } finally {
      const deliveryOption = getProductDeliveryOption({ product: id, sku });
      this.setState({ deliveryOption });
    }

    this.setState({ deliveryCalculating: false });
  };

  handlerOnFavorite = (id, sku, isFavorited) => {
    const { user, navigation, favoritesUser } = this.props;

    if (!user.id) return navigation.navigate('Login');

    let saveOrDelete = ApiProfile.addFavorites(id, sku);
    if (isFavorited) {
      saveOrDelete = ApiProfile.deleteFavorites(id, sku);
    }

    return saveOrDelete.then(({ data }) => {
      DeviceStorage.setItem('@BelshopApp:favorites', data.items);
      favoritesUser(data.items);
    });
  };

  render() {
    const { navigation, delivery, favorites } = this.props;
    const {
      product,
      details,
      loading,
      deliveryOption,
      modalCepVisible,
      deliveryCalculating,
      modalDetailsVisible,
      productsAssociations,
    } = this.state;

    const { brand, price, id, sku } = product;
    const findFavorited =
      favorites && favorites.find(productItem => productItem.product === id);

    return (
      <>
        <SafeAreaView style={{ flex: 0, backgroundColor: '#fff' }} />
        <SafeAreaView style={DefaultStyles.viewGrey}>
          <SafeAreaView style={Styles.saveAreaHeader}>
            <TouchableOpacity
              style={Styles.btnImageIcon}
              onPress={() => navigation.goBack()}
            >
              <ArrowVIcon />
            </TouchableOpacity>
            <TouchableOpacity
              style={Styles.btnImageIcon}
              onPress={() => this.handlerOnFavorite(id, sku, findFavorited)}
            >
              <FavoriteIcon fill={findFavorited ? BLACK : 'none'} />
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
              paddingBottom: product && product.available ? 50 : 0,
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
                    {product.available && (
                      <View style={Styles.detailsProduct}>
                        <DetailIcon />
                        <View style={Styles.description}>
                          <Text style={Styles.descriptionTitle}>
                            Frete Grátis
                          </Text>
                          {deliveryCalculating ? (
                            <ActivityIndicator size="small" color="#000" />
                          ) : (
                            <View style={Styles.modalContainer}>
                              {delivery.cep && deliveryOption?.estimatedTime ? (
                                <Text style={Styles.descriptionSubTitle}>
                                  Entrega em até {deliveryOption.estimatedTime}{' '}
                                  após a postagem do produto. &nbsp;
                                  <Text
                                    style={Styles.btnModal}
                                    onPress={() =>
                                      this.setModalCepVisible(true)
                                    }
                                  >
                                    {delivery.formatedCep}
                                  </Text>
                                </Text>
                              ) : (
                                <Text style={Styles.descriptionSubTitle}>
                                  Digite seu cep para calcularmos o prazo de
                                  entrega. &nbsp;
                                  <Text
                                    style={Styles.btnModal}
                                    onPress={() =>
                                      this.setModalCepVisible(true)
                                    }
                                  >
                                    Informar CEP
                                  </Text>
                                </Text>
                              )}
                              <ModalCep
                                cepValue={delivery.formatedCep}
                                visible={modalCepVisible}
                                handleSave={this.handleSaveCep}
                                handleClear={this.handleClearCep}
                                setVisible={this.setModalCepVisible}
                              />
                            </View>
                          )}
                        </View>
                      </View>
                    )}

                    <View style={Styles.detailsProduct}>
                      <LogoIcon />
                      <View style={Styles.description}>
                        <Text style={Styles.descriptionTitle}>
                          Loja com estoque
                        </Text>
                        <Text style={Styles.descriptionSubTitle}>
                          Av. Wenceslau Escobar. 2801 Tristeza, Porto Alegre-RS
                          &nbsp;
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
                      <Text style={Styles.ClientPayTitle}>
                        Produtos semelhantes
                      </Text>
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

const mapStateToProps = store => ({
  user: store.user,
  delivery: store.delivery,
  favorites: store.user.favorites,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      favoritesUser,
      saveLengthCart,
      saveAddProductCart,
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetails);
