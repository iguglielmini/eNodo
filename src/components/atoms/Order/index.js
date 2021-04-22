import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { BORDERGREY, BLACK } from '@assets/style/colors';
import ArrowRight from '@assets/svg/arrowRight';
import { Image, Text, View } from 'react-native';
import ApiAuth from '@modules/api/api-auth';
import { TouchableOpacity } from 'react-native-gesture-handler';
import config from '@/config';
import Styles from './styles';

export default function Order({ data, navigation }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log(data);
    setProducts(data.items);
  }, [data]);

  const showOrderDetails = async () => {
    const token = await ApiAuth.getToken();

    if (token) {
      const source = {
        uri: `${config.urls.api}/shopping/orders/${data.orderNumber}`,
      };

      source.headers = {
        'x-api-key': config.apiKey,
        Authorization: `Bearer ${token}`,
      };
      navigation.navigate('ExternalLink', { source });
    }
  };

  return (
    <View style={Styles.orderContainer}>
      <View
        style={[
          Styles.orderItemsContainer,
          Styles.rowContainer,
          products.length && { justifyContent: 'center' },
        ]}
      >
        {products.slice(0, 2).map(({ id, image }) => (
          <Image
            key={id}
            source={{
              uri: image.url,
              width: image.width * 0.15,
              height: image.height * 0.15,
            }}
          />
        ))}
        {products.length > 2 && (
          <TouchableOpacity style={Styles.moreItemsButton}>
            <Text>
              +
              {products.length - 2}
            </Text>
          </TouchableOpacity>
        )}
      </View>
      <View
        style={{
          height: 1,
          backgroundColor: BORDERGREY,
          opacity: 0.2,
        }}
      />
      <View
        style={{
          paddingHorizontal: 32,
          paddingTop: 20,
        }}
      >
        <TouchableOpacity
          style={Styles.rowContainer}
          onPress={showOrderDetails}
        >
          <View style={{ justifyContent: 'center' }}>
            <Text style={[Styles[data.status]]}>{data.statusMessageLine1}</Text>
            {data.statusMessageLine2 && (
              <Text style={{ color: BORDERGREY }}>
                {data.statusMessageLine2}
              </Text>
            )}
          </View>
          <ArrowRight size={10} color={BLACK} />
        </TouchableOpacity>
      </View>
      <View />
    </View>
  );
}

Order.propTypes = {
  data: PropTypes.objectOf(PropTypes.any),
};

Order.defaultProps = {
  data: {},
};
