import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

/* Routes */

import Home from './src/pages/Home';
import Search from './src/pages/Search';
import Product from './src/pages/Product';
import Profile from './src/pages/Profile';

const Tab = createMaterialBottomTabNavigator();

const Routes = () => {
  return (
    <Tab.Navigator
      inactiveColor="rgba(0,0,0,0.5)"
      activeColor="#000000"
      barStyle={{ backgroundColor: '#E5E5E5' }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Product"
        component={Product}
        options={{
          tabBarLabel: 'Product',
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Routes;
