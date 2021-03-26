import React, { Component } from 'react';
import { SafeAreaView } from 'react-navigation';
import {
  View, Text, ScrollView, TouchableOpacity, Image, Platform
} from 'react-native';
import { changeStatusBar } from '@modules/utils';

// Image
import AndroidImage from '@assets/images/android_donwload.png';
import IosImage from '@assets/images/ios_donwload.png';

/* Styles */
import Styles from './styles';

class Calendar extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    props.navigation.addListener(
      'focus',
      () => changeStatusBar('dark-content')
    );
  }


  render() {
    return (
      <SafeAreaView>
        <ScrollView alwaysBounceVertical showsVerticalScrollIndicator={false}>
          <View style={Styles.content}>
            <View style={Styles.titlePageContent}>
              <Text style={Styles.titlePage}>Salão da Bel</Text>
            </View>
            {/* image not defined */}
            <View style={Styles.contentImage}>
              <View style={Styles.Image} />
            </View>
            {/* Title */}
            <View style={Styles.contentTitle}>
              <Text style={Styles.titleCalendar}>
              Agende seu horário em um de nossos Salões da Bel
              </Text>
            </View>
            {/* Sub Title */}
            <View style={Styles.contentSubTitle}>
              <Text style={Styles.subTitleCalendar}>
              Baixe agora o app e agende um horário na Belshop mais próxima de você.
              </Text>
            </View>
            {/* Image about plataform ios or Android */}
            <View style={Styles.contentSubTitle}>
              <TouchableOpacity
                onPress={() => {}}
                activeOpacity={1}
              >
                <Image
                  style={Styles.imagePlataform}
                  source={Platform.OS === 'android' ? AndroidImage : IosImage}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default Calendar;
