import React, { Component } from 'react';
import { SafeAreaView } from 'react-navigation';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Platform,
} from 'react-native';
import { changeStatusBar } from '@modules/utils';

// Image
import bgCalendar from '@assets/images/bgCalendar.png';
import AndroidImage from '@assets/images/android_donwload.png';
import IosImage from '@assets/images/ios_donwload.png';

/* Styles */
import { WHITE } from '@assets/style/colors';
import Styles from './styles';

class Calendar extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    props.navigation.addListener('focus', () => changeStatusBar('dark-content'));
  }

  render() {
    return (
      <SafeAreaView style={{ backgroundColor: WHITE }}>
        <ScrollView alwaysBounceVertical showsVerticalScrollIndicator={false}>
          <View style={Styles.content}>
            <Image style={Styles.imageBg} source={bgCalendar} />
            <Text style={Styles.titlePage}>Salão da Bel</Text>
            {/* Title */}
            <View style={Styles.contentTitle}>
              <Text style={Styles.titleCalendar}>
                Agende seu horário em um de nossos Salões da Bel
              </Text>
            </View>
            {/* Sub Title */}
            <View style={Styles.contentSubTitle}>
              <Text style={Styles.subTitleCalendar}>
                Baixe agora o app e agende um horário na Belshop mais próxima de
                você.
              </Text>
            </View>
            {/* Image about plataform ios or Android */}
            <View style={Styles.contentSubTitle}>
              <TouchableOpacity onPress={() => {}} activeOpacity={1}>
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
