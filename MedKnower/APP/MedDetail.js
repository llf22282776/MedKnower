'use strict';
import {
  StyleSheet,
  View,
  ListView,
  Navigator,
  Image
} from 'react-native';
import React, { Component } from 'react';
import { Container, Header, Title, Content, List,ListItem,Footer,Form,Item, FooterTab, Left,Button,Body,Right, Icon, InputGroup,Input ,Card,CardItem,Text} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import  ImagePicker  from 'react-native-image-picker';
import Login from "../APP/Login";
import NewsPanel from '../APP/NewsPanel';
import SearchPanel  from '../APP/SearchPanel';
var idList={
  Login:"Login",
  Nav:"MedKnower",
  SearchPanel:"SearchPanel",
  DetailPanel:"DetailPanel",
  NewsPanel:"NewsPanel",
  MedDetail:"MedDetail"
}
var photoOptions={
    cancelButtonTitle:'取消',
    takePhotoButtonTitle:'拍照',
    chooseFromLibraryButtonTitle:'选择相册',
    quality:0.75,
    allowsEditing:true,
    noData:false,
    storageOptions: {
        skipBackup: true,
        path:'images'
    }
}

export default class MedDetail extends Component {

      constructor(props){
            super(props);
         this.returnLastOne=this.returnLastOne.bind(this);
      }
        render(){
         return(<Container>
         <Header> 
          <Left>
            <Button transparent iconLeft onPress={this.returnLastOne}>
               <Icon name='arrow-back' />
               <Text>药品说明</Text>
            </Button>
          </Left>
          <Body>
          </Body>

         </Header>
         <Content>
         <Card>
            <CardItem bordered content>
                    <Text>{this.props.detial}</Text>
         </CardItem>
            
         </Card>
        </Content>    
         </Container>);        

      }
      returnLastOne(){
        this.props.navigator.pop();
        }

}