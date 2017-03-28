/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  ListView,
  Navigator,
  Image
} from 'react-native';

import { Container, Header, Title, Content, List, ListItem, Footer, Form, Item, FooterTab, Left, Button, Body, Right, Icon, InputGroup, Input, Card, CardItem, Text } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';


import  DetailPanel  from "./APP/DetailPanel";
import  Login  from "./APP/Login";
import  MyViewList  from './APP/MyViewList';
import  NewsPanel  from './APP/NewsPanel';
import  SearchPanel  from './APP/SearchPanel';
import MedDetail from './APP/MedDetail';
var idList={
  Login:"Login",
  Nav:"MedKnower",
  SearchPanel:"SearchPanel",
  DetailPanel:"DetailPanel",
  NewsPanel:"NewsPanel",
  MedDetail:"MedDetail"
}



export default class MedKnower extends Component {
  constructor(props){
    super(props);

  }
  render() {
    return (
        <Navigator initialRoute={
        {
          id:idList.Login,
          passProps:{},
          type:"Right"  //从右边滑入
        }
          } renderScene={ this.renderScene} configureScene={this.configureScene} />

    
    );
  }
 renderScene(route, navigator) {
    //假设在push的时候弹出    
   // console.log(route);
   console.log("正在渲染:");
   console.log(route);
    console.log(navigator);
    switch(route.id){
      
      case idList.Login:{
              console.log("正在渲染:Login");  
              return <Login navigator={navigator} {...route.passProps} />;}
      case idList.DetailPanel:{
              console.log("正在渲染:DetailPanel");  
              return <DetailPanel navigator={navigator} {...route.passProps} />;}
      case idList.NewsPanel:{
               console.log("正在渲染:NewsPanel");  
              return <NewsPanel navigator={navigator} {...route.passProps} />;}
      case idList.MyViewList:{
              console.log("正在渲染:MyViewList");  
              return <MyViewList navigator={navigator} {...route.passProps} />;}   
      case idList.SearchPanel:{
              console.log("正在渲染:SearchPanel");  
              return <SearchPanel navigator={navigator} {...route.passProps} />;}   
       case idList.MedDetail:{
              console.log("正在渲染:MedDetail");  
              return <MedDetail navigator={navigator} {...route.passProps} />;}          
      default:{
              return <Login navigator={navigator} {...route.passProps} />; }

    }

  
  }
 configureScene(route, routeStack) {
    switch (route.type) {
      case "Right": {
        return Navigator.SceneConfigs.PushFromRight;
      }
      case "Left": {
        return Navigator.SceneConfigs.PushFromLeft;
      }
      case "Top": {
        return Navigator.SceneConfigs.FadeAndroid;
      }
      case "Bottom": {
        return Navigator.SceneConfigs.FloatFromBottomAndroid
      }
      default: {
        return Navigator.SceneConfigs.PushFromRight;
      }

    }



  }







}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('MedKnower', () => MedKnower);
