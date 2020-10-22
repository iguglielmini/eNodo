import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

/* Routes */
import Home from './src/pages/Home';
import Search from './src/pages/Search';
import Product from './src/pages/Product';
import Profile from './src/pages/Profile';

/* Icons */
import SearchIcon from './src/assets/svg/search';
import ProductIcon from './src/assets/svg/product';
import ProfileIcon from './src/assets/svg/profile';
import ScheduleIcon from './src/assets/svg/schedule';

const Tab = createBottomTabNavigator();

const Routes = () => {
  return (
    <Tab.Navigator
      lazy
      initialRouteName="Home"
      tabBarOptions={{
        tabStyle: {
          height: 50,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-start',
          backgroundColor: '#ffffff',
        },
        activeTintColor: '#000000',
        inactiveTintColor: 'rgba(0,0,0,0.5)',
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: '',
          // eslint-disable-next-line react/prop-types
          tabBarIcon: ({ color }) => (
            <ProductIcon name="product" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          title: '',
          // eslint-disable-next-line react/prop-types
          tabBarIcon: ({ color }) => (
            <SearchIcon name="search" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Product"
        component={Product}
        options={{
          title: '',
          // eslint-disable-next-line react/prop-types
          tabBarIcon: ({ color }) => (
            <ScheduleIcon name="schedule" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          title: '',
          // eslint-disable-next-line react/prop-types
          tabBarIcon: ({ color }) => (
            <ProfileIcon name="profile" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Routes;
