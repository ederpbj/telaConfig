import React, { Component } from './node_modules/react';

import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import Home from './src/screens/HomeTab/index';
import Explorar from './src/screens/ExplorarTab/index';



const AppNavigator = createBottomTabNavigator({
  Home:{
    screen:Home
  },
  Explorar:{
    screen:Explorar
  }
}, {
  defaultNavigationOptions:{
    //headerRight:<View style={{width:30, height:30, backgroundColor:'#FF0000'}}></View>,
    /* headerBackImage:() => (
      <View style={{width:30, height:30, backgroundColor:'#FF0000'}}> </View>
    ), */
    /* headerBackImage:() =>(
      <Text>Voltar</Text>
    ), */
    tabBarOptions:{
      showIcon:false,
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
