import React from 'react';
import { connect } from 'react-redux';
import { View, Text, Image } from 'react-native';

// Utils
import { convertToPriceText } from '@modules/utils';

// Styles
import Styles from './styles';

function CardCart({ products }) {
  return (
    <>
      <View style={Styles.containerList}>
        {products.map((item, index) => {
          const key = index;
          const { image, price, title } = item.product;
          return (
            <View style={Styles.contaninerCard} key={key}>
              <View style={Styles.containerImage}>
                <Image
                  style={Styles.image}
                  source={{
                    uri: image.url,
                    width: image.width,
                    height: image.height,
                  }}
                />
              </View>
              <View style={Styles.contaninerTitle}>
                <Text style={Styles.titleProduct}>{title}</Text>
                <Text style={Styles.titlePrice}>{convertToPriceText(price.current)}</Text>
              </View>
            </View>
          );
        })}
      </View>
    </>
  );
}

const mapStateToProps = store => ({
  products: store.cart.products,
});

export default connect(
  mapStateToProps,
  null
)(CardCart);
