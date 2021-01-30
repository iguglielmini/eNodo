import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native-safe-area-context';

// Pages
import InitialPage from '@pages';
import Cart from '@pages/Cart';
import Category from '@pages/Category';
import Checkout from '@pages/Checkout';
import ProductDetailsPage from '@pages/ProductDetails';

// color
import { BGGREY, BLACK, WHITE } from '@assets/style/colors';

const Stack = createStackNavigator();

function Router() {
  const [statusBarColor, setStatusBarColor] = useState(BGGREY);
  const statusBarColors = {
    Home: {
      color: BGGREY,
      style: 'dark-content',
    },
    Cart: {
      color: WHITE,
      style: 'dark-content',
    },
    Category: {
      color: BLACK,
      style: 'light-content',
    },
    CategorySub: {
      color: BLACK,
      style: 'light-content',
    },
    ProductDetails: {
      color: WHITE,
      style: 'dark-content',
    },
    Checkout: {
      color: WHITE,
      style: 'dark-content',
    },
  };

  const routeChange = route => {
    const selectRouter = route.routes[route.index];
    const colors = statusBarColors[selectRouter.name];
    setStatusBarColor(colors.color);
    StatusBar.setBarStyle(colors.style);
  };
  return (
    <>
      <NavigationContainer onStateChange={routeChange}>
        <SafeAreaView style={{ backgroundColor: statusBarColor }}>
          <StatusBar backgroundColor={statusBarColor} barStyle="dark-content" />
        </SafeAreaView>

        <Stack.Navigator initialRouteName="Home" detachInactiveScreens>
          <Stack.Screen
            name="Home"
            component={InitialPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ProductDetails"
            component={ProductDetailsPage}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Category"
            component={Category}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Cart"
            component={Cart}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Checkout"
            component={Checkout}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default Router;
