import React, { Component } from 'react';

//import { View } from 'react-native';

// createBottomTabNavigator
// createMaterialBottomTabNavigator
// createMaterialTopTabNavigator

import { createStackNavigator, createAppContainer } from 'react-navigation';

import Feed from './Feed';
import Perfil from './Perfil';
import Config from './Config';

const AppNavigator = createStackNavigator({
  Feed:{
    screen:Feed
  },
  Perfil:{
    screen:Perfil
  },
  Config:{
    screen:Config
  }
}, {
  initialRouteName:"Feed",
  //headerTransitionPreset:true,
  //headerMode:'float',
  //headerLayoutPresent:'center',
  //headerBackTitleVisible:true,
  //headerMode:'screen',
  //headerMode:'none',
  
  defaultNavigationOptions:{
     //headerRight:<View style={{width:30, height:30, backgroundColor:'#FF0000'}}></View>,
    /* headerBackImage:() => (
      <View style={{width:30, height:30, backgroundColor:'#FF0000'}}> </View>
    ), */
    /* headerBackImage:() =>(
      <Text>Voltar</Text>
    ), */
    tabBarOptions:{
      showIcon:true,
      labelStyle:{
        fontSize:30
      }
      
    },
    //initialRouteName:'Explorar',
    headerMode:'screen',
    headerBackTitleVisible:true,
    headerLayoutPresent:'center',
    //headerTransitionPreset:true,
  //headerMode:'float',
  //headerMode:'none',
  }


});

export default createAppContainer(AppNavigator);
