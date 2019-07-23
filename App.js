import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { createStackNavigator,createAppContainer } from 'react-navigation';
import  home from './screen/home';
import picscreen from './screen/picscreen';


const Navigation = createStackNavigator(
  {
  Home: {screen: home},
  pictureScreen: {screen: picscreen},
  },
  {
    headerMode: 'none',
  }
);
export default createAppContainer(Navigation) ;