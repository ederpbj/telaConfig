import React, { Component } from 'react';

// createBottomTabNavigator
// createMaterialBottomTabNavigator
// createMaterialTopTabNavigator

import { createStackNavigator, createAppContainer } from 'react-navigation';

import Foto from './Foto';
import Mosaico from './Mosaico';
import Perfil from './Perfil';

const AppNavigator = createStackNavigator({
  Foto:{
    screen:Foto
  },
  Mosaico:{
    screen:Mosaico
  },
  Perfil:{
    screen:Perfil
  }
}, {
  defaultNavigationOptions:{
    tabBarOptions:{
      showIcon:false,
      labelStyle:{
        fontSize:30
      }
    }
  }


});

export default createAppContainer(AppNavigator);
