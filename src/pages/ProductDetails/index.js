import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

/* component */
import ListCard from '@components/molecules/ListCard';
import ModalCep from '@components/organisms/ModalCep';
import Accordion from '@components/organisms/Accordion';
import FloatButtonBuy from '@components/atoms/FloatButtonBuy';
import ModalDetails from '@components/organisms/ModalDetails';
import CarouselProduct from '@components/organisms/CarouselPodruct';
import CarouselBuyTogether from '@components/organisms/CarouselBuyTogether';

/** icons */
import ArrowVIcon from '@assets/svg/arrowv';
import LogoIcon from '@assets/svg/logoIcon';
import DetailIcon from '@assets/svg/detail';
import FavoriteIcon from '@assets/svg/favorite';

// API
import ApiCart from '@modules/api/api-shopping';
// import ApiProduct from '@modules/api/api-product';
import ApiProduct from '../../modules/api/api-product';

// Redux
import { saveLengthCart } from '@redux/actions';

/** Styles */
import DefaultStyles from '@assets/style/default';
import Styles from './styles';

class ProductDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      textCep: '',
      details: {},
      product: {},
      loading: true,
      modalCepVisible: false,
      modalDetailsVisible: false,
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    const {
      route: { params },
    } = this.props;

    console.log('XAMOU');
    const data = await ApiProduct.getProduct(params.slug);
    console.log('XOLA ', data);

    // if (data) this.setState({ product: data, loading: false });
  };

  setTextCep = textCep => this.setState({ textCep });

  setModalCepVisible = modalCepVisible => this.setState({ modalCepVisible });

  setModalDetailsVisible = modalDetailsVisible => {
    this.setState({ modalDetailsVisible });
  };

  showModalDetails = details => {
    const { modalDetailsVisible } = this.state;
    this.setState({ modalDetailsVisible: !modalDetailsVisible, details });
  };

  addProductToCart = (setLoading, setModalBuyVisible) => {
    const { route } = this.props;
    const { id, sku } = route.params;

    setLoading(true);

    const data = {
      products: [{ product: id, sku, quantity: 1 }],
    };
    ApiCart.basketAddItem(data)
      .then(response => {
        setLoading(false);
        setModalBuyVisible(true);

        if (response && response.basket) {
          const { items } = response.basket;
          const lengthItems = items
            .map(item => item.quantity)
            .reduce((acumulator, currentValue) => acumulator + currentValue);
          this.props.saveLengthCart(lengthItems);
        }
      })
      .catch(() => setLoading(false));
  };

  render() {
    const { navigation } = this.props;
    const {
      textCep,
      details,
      loading,
      modalCepVisible,
      modalDetailsVisible,
    } = this.state;

    return (
      <>
        {/* Header */}
        <View style={Styles.ContainerHeader}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View style={Styles.btnImageIcon}>
              <ArrowVIcon />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <View style={Styles.btnImageIcon}>
              <FavoriteIcon />
            </View>
          </TouchableOpacity>
        </View>
        {loading && (
          <View style={DefaultStyles.loading}>
            <ActivityIndicator size="large" color="#ffffff" />
          </View>
        )}
        <ScrollView
          keyboardShouldPersistTaps="always"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={Styles.ContainerScroll}
        >
          {/* Carousel Product */}
          <CarouselProduct />
          {/* Title Product */}
          <View style={Styles.containerTitle}>
            <Text style={Styles.titleProduct}>KÉRASTASE</Text>
            <Text style={Styles.subTitle}>
              Kérastase Genesis Anti-Chute Fortifiant - Sérum Finalizador - 90ml
            </Text>
          </View>

          {/* Details Payment */}
          {/* <View style={Styles.containerDescription}>
            <View style={Styles.detailsProduct}>
              <DetailIcon />
              <View style={Styles.description}>
                <Text style={Styles.descriptionTitle}>Frete Grátis</Text>
                <View style={Styles.modalContainer}>
                  <Text style={Styles.descriptionSubTitle}>
                    Entrega em até 7 dias úteis após a postagem do produto.
                    &nbsp;
                    <Text
                      style={Styles.btnModal}
                      onPress={() => this.setModalCepVisible(true)}
                    >
                      {!textCep ? 'Trocar CEP' : `CEP ${textCep}`}
                    </Text>
                  </Text>
                  <ModalCep
                    cepValue={textCep}
                    visible={modalCepVisible}
                    onChangeCep={this.setTextCep}
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
          </View> */}

          {/* Accordion */}
          {/* <View style={Styles.containerAccordion}>
            <Accordion actionMore={this.showModalDetails} />
            <ModalDetails
              details={details}
              visible={modalDetailsVisible}
              setVisible={this.setModalDetailsVisible}
            />
          </View> */}

          {/* Compre Junto Area */}
          {/* <View style={Styles.containerCarouselPay}>
            <Text style={Styles.ClientPayTitle}>Compre junto</Text>
            <CarouselBuyTogether data={CardBuyTogetherMock} />
          </View> */}

          {/* Clientes Tambem Compraram Area */}
          {/* <View style={Styles.ContainerClientPay}>
            <Text style={Styles.ClientPayTitle}>Clientes também compraram</Text>
            <ListCard data={CardlistMock} navigation={navigation} />
          </View> */}

          {/* Produtos semelhantes */}
          {/* <View style={Styles.ContainerProductSimilar}>
            <Text style={Styles.ClientPayTitle}>Produtos semelhantes</Text>
            <Text style={Styles.budget}>Cabelos › Finalizadores</Text>
            <ListCard data={CardlistMock} navigation={navigation} />
          </View> */}
        </ScrollView>
        {/* Modal But */}
        {/* Float button */}
        <FloatButtonBuy
          navigation={navigation}
          addProductToCart={this.addProductToCart}
        />
      </>
    );
  }
}

ProductDetails.propTypes = {
  route: PropTypes.objectOf(PropTypes.any).isRequired,
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      saveLengthCart,
    },
    dispatch
  );

export default connect(
  null,
  mapDispatchToProps
)(ProductDetails);
