import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  View,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';

/* Components */
import Title from '@components/atoms/Title';
import Badge from '@components/atoms/Badge';
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
    const { title, theme, widgets } = section;
    const { navigation, lengthCart } = this.props;

    if (index === 0) {
      tempSections.push(
        <Section style={{ paddingTop: 64, ...Styles.section }} key={index}>
          <HeaderHome title={title} theme={theme} lengthCart={lengthCart} />
          {/* <ListCard data={firstSectionData} navigation={navigation} /> */}
        </Section>
      );
    }

    widgets.map((widget, widgetIndex) => {
      const key = widgetIndex + index;
      const { items, template } = widget;

      if (template === 'swiper')
        tempSections.push(
          <Section style={{ paddingTop: 16 }} key={key}>
            {/* <CarouselBranding
              showFooter
              data={items}
              title="Marcas"
              navigation={navigation}
            /> */}
          </Section>
        );

      if (template === 'links' || template === 'bullets') {
        tempSections.push(
          <Section key={key}>
            {template === 'bullets' && (
              <>
                <Title title={title} />
                <FilterButton
                  data={items}
                  onClick={() => navigation.navigate('Category')}
                />
              </>
            )}
            {template === 'links' && <LinkHelp data={items} />}
          </Section>
        );
      }
    });

    this.setState({ sections: tempSections });
  };

  render() {
    const { sections } = this.state;

    return (
      <>
        <ScrollView alwaysBounceVertical showsVerticalScrollIndicator={false}>
          {sections}

          {/* Novidades */}
          {/* <Section style={{ paddingTop: 48 }} theme="dark">
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
          </Section> */}
          {/* End Novidades */}
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
