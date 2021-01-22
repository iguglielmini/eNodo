import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View, Image, ScrollView } from 'react-native';

/* Components */
import Title from '@components/atoms/Title';
import Section from '@components/atoms/Section';
import LinkHelp from '@components/atoms/LinkHelp';
import ListCard from '@components/molecules/ListCard';
import IntroCard from '@components/molecules/IntroCard';
import HeaderHome from '@components/molecules/HeaderHome';
import ButtonSeeAll from '@components/atoms/ButtonSeeAll';
import FilterButton from '@components/molecules/FilterButton';
import ImageIntroCard from '@components/molecules/ImageIntroCard';
import CarouselBranding from '@components/organisms/CarouselBranding';

/* Images */
import imageBel from '@assets/images/bel.png';
import imageKiss from '@assets/images/kiss.png';

// Redux, Storage e API
import Api from '@modules/api/api-home';
import { saveLengthCart } from '@redux/actions';
import DeviceStorage from '@modules/services/device-storage';

/* Styles */
import Styles from './styles';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sections: [],
    };
  }

  componentDidMount() {
    this.getData();
    this.getLengthCart();
  }

  getData = async () => {
    const sections = [];
    const data = await Api.getHome();
    data.map((item, index) => this.generateSections(item, index, sections));
  };

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

  generateSections = (section, index, tempSections) => {
    const {
      title, theme, widgets, style
    } = section;
    const { navigation, lengthCart } = this.props;

    widgets.map((widget, widgetIndex) => {
      const key = widgetIndex + index;
      const { items, template, highlight } = widget;

      if (index === 0) {
        tempSections.push(
          <Section style={{ paddingTop: 64, ...Styles.section }} key={index}>
            <HeaderHome
              title={title}
              theme={theme}
              lengthCart={lengthCart}
              navigation={navigation}
            />
            <ListCard data={items} navigation={navigation} theme={theme} />
          </Section>
        );
      }

      if (template === 'swiper') {
        tempSections.push(
          <Section style={{ paddingTop: 16 }} key={key}>
            <CarouselBranding
              showFooter
              data={items}
              theme={theme}
              title="Marcas"
              showTitle={false}
              navigation={navigation}
            />
          </Section>
        );
      }

      if (highlight) {
        if (template === 'grid' && style === 'queridinhos') {
          tempSections.push(
            <Section style={[Styles.belSection, Styles.section]}>
              <View style={Styles.containerBel}>
                <View style={Styles.containerTitleBel}>
                  <Title
                    size="xlarge"
                    title={'Queri\ndinhos'}
                    style={Styles.belTitle}
                  />
                  <Image source={imageBel} style={Styles.belImage} />
                </View>
                <Image source={imageKiss} style={Styles.kissImage} />
              </View>
              <View style={{ paddingBottom: 44 }}>
                <IntroCard
                  price={highlight.price}
                  title={highlight.title}
                  image={highlight.image}
                />
              </View>
              <ListCard data={items} navigation={navigation} />
              <ButtonSeeAll theme={theme} />
            </Section>
          );
        }

        if (template === 'grid' && style === 'default') {
          tempSections.push(
            <Section style={{ paddingTop: 48 }} theme={theme}>
              <Title
                theme={theme}
                title={title}
                style={Styles.novidadeBellTitle}
              />
              <ImageIntroCard title={highlight.title} image={highlight.image} />
              <View style={Styles.section}>
                <ListCard data={items} theme={theme} navigation={navigation} />
              </View>
              <ButtonSeeAll theme={theme} />
            </Section>
          );
        }
      }

      if (template === 'bullets') {
        tempSections.push(
          <Section key={key}>
            <Title title={title} style={{ marginLeft: 16 }} />
            <FilterButton
              data={items}
              onClick={() => navigation.navigate('Category')}
            />
          </Section>
        );
      }

      if (template === 'links') {
        tempSections.push(
          <Section key={key} style={{ paddingVertical: 0 }}>
            <LinkHelp data={items} />
          </Section>
        );
      }
      return true;
    });

    this.setState({ sections: tempSections });
  };

  render() {
    const { sections } = this.state;

    return (
      <>
        <ScrollView alwaysBounceVertical showsVerticalScrollIndicator={false}>
          {sections}
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

const mapDispatchToProps = dispatch => bindActionCreators({ saveLengthCart }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
