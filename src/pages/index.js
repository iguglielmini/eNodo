import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

/* Icons */
import SearchIcon from '@assets/svg/search';
import ProductIcon from '@assets/svg/product';
import ProfileIcon from '@assets/svg/profile';
import ScheduleIcon from '@assets/svg/schedule';
import SearchOutlineIcon from '@assets/svg/searchOutline';
import ProductOutlineIcon from '@assets/svg/productOutline';
import ProfileOutlineIcon from '@assets/svg/profileOutline';
import ScheduleOutlineIcon from '@assets/svg/scheduleOutline';

/* Routes */
import Home from './Home';
import Search from './Search';
import Profile from './Profile';
import Calendar from './Calendar';

const Tab = createBottomTabNavigator();

function focusedTab(Icon, IconOutline, focused) {
  if (focused) return <Icon />;
  return <IconOutline />;
}

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
        tabBarIcon: ({ focused }) => focusedTab(ProductIcon, ProductOutlineIcon, focused),
      }}
    />
    <Tab.Screen
      name="Search"
      component={Search}
      options={{
        title: '',
        tabBarIcon: ({ focused }) => focusedTab(SearchIcon, SearchOutlineIcon, focused),
      }}
    />
    <Tab.Screen
      name="Calendar"
      component={Calendar}
      options={{
        title: '',
        tabBarIcon: ({ focused }) => focusedTab(ScheduleIcon, ScheduleOutlineIcon, focused),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={Profile}
      options={{
        title: '',
        tabBarIcon: ({ focused }) => focusedTab(ProfileIcon, ProfileOutlineIcon, focused),
      }}
    />
  </Tab.Navigator>
);

export default Routes;
