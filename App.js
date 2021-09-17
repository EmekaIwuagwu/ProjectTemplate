import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  AsyncStorage
} from 'react-native';

import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

import Splash from './src/Splash';
import About from './src/About';
import Home from './src/Home';
import Login from './src/Login';


const HomeNavigator = createStackNavigator({
  'Home': {
    screen: Home,
    navigationOptions: ({navigation}) => ({
      headerLeft: () => (
        <TouchableOpacity
          style={{marginLeft: 20}}
          onPress={() => navigation.toggleDrawer()}>
          <Icon name="menu" size={12} />
        </TouchableOpacity>
      ),
    }),
  },
});

const LogoutNavigator = createStackNavigator({
  'Login': {
    screen: Home,
    navigationOptions: ({navigation}) => ({
      headerLeft: () => (
        <TouchableOpacity
          style={{marginLeft: 20}}
          onPress={() => navigation.navigate('Login')}>
          <Icon name="menu" size={12} />
        </TouchableOpacity>
      ),
    }),
  },
});

const AboutNavigator = createStackNavigator({
  'About': {
    screen: About,
    navigationOptions: ({navigation}) => ({
      headerLeft: () => (
        <TouchableOpacity
          style={{marginLeft: 20}}
          onPress={() => navigation.toggleDrawer()}>
          <Icon name="menu" size={12} />
        </TouchableOpacity>
      ),
    }),
  },
});

const DrawerNavigator = createDrawerNavigator({

  Home: {
    navigationOptions: {
      drawerLabel: 'Overview',
    },
    screen: HomeNavigator,
  },

  Login: {
    navigationOptions: {
      drawerLabel: 'Logout',
    },
    screen: LogoutNavigator,
  },

  About: {
    navigationOptions: {
      drawerLabel: 'About',
    },
    screen: AboutNavigator,
  },
});

const AppSwitchNavigator = createSwitchNavigator(
  {
    Splash: {screen: Splash},
    Login: {screen: Login},
    Drawer: {screen: DrawerNavigator},
  },
  {
    initialRouteName: 'Splash',
  },
);

const App = createAppContainer(AppSwitchNavigator);
export default App;