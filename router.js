import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

// Pages
import Cart from '@pages/Cart';
import Filter from '@pages/Filter';
import FilterResult from '@pages/FilterResult';
import Category from '@pages/Category';
import Checkout from '@pages/Checkout';
import ProductDetailsPage from '@pages/ProductDetails';
import Login from '@pages/Login';
import ExternalLink from '@pages/ExternalLink';
import Account from '@pages/Account';

// Initial Page
import InitialPage from '@pages';

const Stack = createStackNavigator();
const RootStack = createStackNavigator();

function Router() {
  return (
    <>
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
          name="FilterResult"
          component={FilterResult}
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
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ExternalLink"
          component={ExternalLink}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Account"
          component={Account}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </>
  );
}

const RootNavigator = () => (
  <RootStack.Navigator initialRouteName="Main" mode="modal" headerMode="none">
    <RootStack.Screen name="Main" component={Router} />
    <RootStack.Screen name="Filter" component={Filter} options={{ ...TransitionPresets.ModalSlideFromBottomIOS }} />
  </RootStack.Navigator>
);

export default RootNavigator;
