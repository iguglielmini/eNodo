import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

/* Icons */
import SearchIcon from '@assets/svg/search';
import ProductIcon from '@assets/svg/product';
import ProfileIcon from '@assets/svg/profile';
import ScheduleIcon from '@assets/svg/schedule';

/* Routes */
import Home from './Home';
import Search from './Search';
import Product from './Product';
import Profile from './Profile';

const Tab = createBottomTabNavigator();

const Routes = () => (
  <Tab.Navigator
    lazy
    initialRouteName="Home"
    tabBarOptions={{
      tabStyle: {
        height: 50,
        padding: 10,
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
        tabBarIcon: ProductIcon,
      }}
    />
    <Tab.Screen
      name="Search"
      component={Search}
      options={{
        title: '',
        tabBarIcon: SearchIcon,
      }}
    />
    <Tab.Screen
      name="Product"
      component={Product}
      options={{
        title: '',
        tabBarIcon: ScheduleIcon,
      }}
    />
    <Tab.Screen
      name="Profile"
      component={Profile}
      options={{
        title: '',
        tabBarIcon: ProfileIcon,
      }}
    />
  </Tab.Navigator>
);

export default Routes;
