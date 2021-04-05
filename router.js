import 'react-native-gesture-handler';
import React from 'react';
import {
  TransitionPresets,
  createStackNavigator,
} from '@react-navigation/stack';

// Pages
import Cart from '@pages/Cart';
import Login from '@pages/Login';
import Filter from '@pages/Filter';
import Account from '@pages/Account';
import Category from '@pages/Category';
import Checkout from '@pages/Checkout';
import FilterResult from '@pages/FilterResult';
import Notification from '@pages/Notification';
import ExternalLink from '@pages/ExternalLink';
import ForgotPassword from '@pages/ForgotPassword';
import ProductDetailsPage from '@pages/ProductDetails';

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
          name="Notification"
          component={Notification}
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
          name="ForgotPassword"
          component={ForgotPassword}
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
  <RootStack.Navigator mode="modal" headerMode="none" initialRouteName="Main">
    <RootStack.Screen name="Main" component={Router} />
    <RootStack.Screen
      name="Filter"
      component={Filter}
      options={{ ...TransitionPresets.ModalSlideFromBottomIOS }}
    />
  </RootStack.Navigator>
);

export default RootNavigator;
