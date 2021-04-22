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
import Favorites from '@pages/Favorites';
import YourOrders from '@pages/YourOrders';
import OnBoarding from '@pages/OnBoarding';
import Notification from '@pages/Notification';
import FilterResult from '@pages/FilterResult';
import ExternalLink from '@pages/ExternalLink';
import ForgotPassword from '@pages/ForgotPassword';
import ProductDetailsPage from '@pages/ProductDetails';
import LoadError from '@pages/LoadError';

// Initial Page
import InitialPage from '@pages';

const Stack = createStackNavigator();
const RootStack = createStackNavigator();

function Router() {
  return (
    <>
      <Stack.Navigator
        initialRouteName="OnBoarding"
        headerMode="none"
        detachInactiveScreens
      >
        <Stack.Screen name="Home" component={InitialPage} />
        <Stack.Screen name="ProductDetails" component={ProductDetailsPage} />
        <Stack.Screen name="Category" component={Category} />
        <Stack.Screen name="FilterResult" component={FilterResult} />
        <Stack.Screen name="Notification" component={Notification} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="Checkout" component={Checkout} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ExternalLink" component={ExternalLink} />
        <Stack.Screen name="Account" component={Account} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="YourOrders" component={YourOrders} />
        <Stack.Screen name="Favorites" component={Favorites} />
        <Stack.Screen name="OnBoarding" component={OnBoarding} />
        <Stack.Screen
          initialParams={{ reload: false }}
          name="LoadError"
          component={LoadError}
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
