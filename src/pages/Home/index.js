import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View, Image, Text, ScrollView, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';

/* Components */
import Title from '@components/atoms/Title';
import Section from '@components/atoms/Section';
import LinkHelp from '@components/atoms/LinkHelp';
import ListCard from '@components/molecules/ListCard';
import IntroCard from '@components/molecules/IntroCard';
import ButtonSeeAll from '@components/atoms/ButtonSeeAll';
import FilterButton from '@components/molecules/FilterButton';
import ImageIntroCard from '@components/molecules/ImageIntroCard';
import CarouselBranding from '@components/organisms/CarouselBranding';

/* Icons */
import BagFillIcon from '@assets/svg/bagFill';
import FavoriteIcon from '@assets/svg/favorite';
import BagOutlineIcon from '@assets/svg/bagOutline';

/* Images */
import imageBel from '@assets/images/bel.png';
import imageKiss from '@assets/images/kiss.png';

// Mock
// import HomeService from '@modules/api/api-home';
import ProductInfo from '@mock/ProductInfo';
import LinkHelpMock from '@mock/LinkHelpMock';
import CardlistMock from '@mock/CardListMock';
import BrandingMock from '@mock/CarouselBrandingMock';
import FilterButtonInfo from '@mock/FilterButtonMock';

// Redux e Storade
import { saveLengthCart } from '@redux/actions';
import DeviceStorage from '@modules/services/device-storage';

/* Styles */
import Styles from './styles';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  UNSAFE_componentWillMount() {
    this.getLengthCart();
  }

  componentDidMount() {
    this.getLengthCart();
  }

  /* const [homeData, setHomeData] = useState([]);
  // useEffect(() => {
  //   const api = new HomeService();
  //   api.getHome()
  //     .then((response) => {
  //       if (response.success) {
  //         setHomeData(response.data);
  //       }
  //     })
  //     .catch(() => false);
  // }, []);
  // function renderWiget(widget) {
  //   const { template } = widget;
  //   switch (template) {
  //     case 'swiper':
  //       return (
  //         <CarouselBranding
  //           showFooter
  //           data={BrandingMock}
  //           navigation={navigation}
  //         />
  //       );
  //     case 'grid':
  //       return (
  //         <View style={{ ...Styles.section }}>
  //           <ListCard data={CardlistMock} navigation={navigation} />
  //         </View>
  //       );
  //     default:
  //       return false;
  //   }
  // }
  // function renderWidgets(widgets) {
  //   if (widgets && widgets.length > 0) {
  //     return widgets.map(item => renderWiget(item));
  //   }
  //   return false;
  // } */

  getLengthCart = async () => {
    let lengthItems = 0;
    const cart = await DeviceStorage.getItem('@BelshopApp:cart');

    if (cart) {
      const { items } = cart;
      lengthItems = items
        .map(item => item.quantity)
        .reduce((acumulator, currentValue) => acumulator + currentValue);
    }

    this.props.saveLengthCart(lengthItems);
  };

  render() {
    const { lengthCart, navigation } = this.props;

    return (
      <>
        <ScrollView alwaysBounceVertical showsVerticalScrollIndicator={false}>
          {/* {homeData && homeData.length > 0 && homeData.map((item, index) => (
            <Section key={`section_${index.toString()}`}>
              <Title title={item.title}>
                {index === 0 && (
                  <>
                    <TouchableOpacity onPress={() => {}}>
                      <FavoriteIcon name="Favorite" size={24} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleShowCart()} style={Styles.bagIcon}>
                      <BagIcon name="Bag" size={24} />
                    </TouchableOpacity>
                  </>
                )}
              </Title>
              {renderWidgets(item.widgets)}
            </Section>
          ))} */}
          {/* Promo */}
          <Section style={{ paddingTop: 64, ...Styles.section }}>
            <Title title={'Promos \nda Semana'}>
              <TouchableOpacity onPress={() => {}}>
                <FavoriteIcon name="Favorite" size={24} />
              </TouchableOpacity>
              <TouchableOpacity
                style={Styles.bagIcon}
                onPress={() => navigation.navigate('Cart')}
              >
                {lengthCart > 0 ? (
                  <>
                    <BagFillIcon name="Bag" size={24} />
                    <Text style={Styles.badgeText}>{lengthCart}</Text>
                  </>
                ) : (
                  <BagOutlineIcon name="Bag" size={24} />
                )}
              </TouchableOpacity>
            </Title>
            <ListCard data={CardlistMock} navigation={navigation} />
          </Section>
          {/* End Promo */}

          {/* Marcas */}
          <Section style={{ paddingTop: 16 }}>
            <CarouselBranding
              showFooter
              title="Marcas"
              data={BrandingMock}
              navigation={navigation}
            />
          </Section>
          {/* End Marcas */}

          {/* Realease */}
          <Section style={[Styles.belSection, Styles.section]}>
            <View style={Styles.containerBel}>
              <View style={Styles.containerTitleBel}>
                <Title
                  size="xlarge"
                  title={'Queri\ndinhos'}
                  style={{
                    marginBottom: 0,
                    paddingBottom: 0,
                    marginLeft: 0,
                    paddingLeft: 0,
                  }}
                />
                <Image source={imageBel} style={Styles.belImage} />
              </View>
              <Image source={imageKiss} style={Styles.kissImage} />
            </View>
            <View style={{ paddingBottom: 44 }}>
              <IntroCard data={ProductInfo} />
            </View>
            <ListCard data={CardlistMock} navigation={navigation} />
            <ButtonSeeAll theme="light" />
          </Section>
          {/* End Realease */}

          {/* Novidades */}
          <Section style={{ paddingTop: 48 }} theme="dark">
            <Title
              title="Novidades"
              theme="dark"
              style={Styles.novidadeBellTitle}
            />
            <ImageIntroCard />
            <View style={Styles.section}>
              <ListCard
                data={CardlistMock}
                theme="dark"
                navigation={navigation}
              />
            </View>
            <ButtonSeeAll theme="dark" />
          </Section>
          {/* End Novidades */}

          {/* Search about doubt */}
          <Section style={{ paddingTop: 80 }}>
            <Title title="O que você procura?" />
            <FilterButton
              data={FilterButtonInfo}
              onClick={() => navigation.navigate('Category')}
            />
            <LinkHelp data={LinkHelpMock.LinkHome} />
          </Section>
          {/* End search about doubt */}
        </ScrollView>
      </>
    );
  }
}

Home.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapStateToProps = store => ({
  lengthCart: store.cart.lengthCart,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      saveLengthCart,
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
