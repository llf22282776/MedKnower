'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ListView,
  Navigator,
  Image
} from 'react-native';
import { Container, Header, Title, Content, List,ListItem,Footer,Form,Item, FooterTab, Left,Button,Body,Right, Icon, InputGroup,Input ,Card,CardItem,Text} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import ImagePicker from 'react-native-image-picker';


import DetailPanel from "../APP/DetailPanel";
import Login from "../APP/Login";
import MyViewList from '../APP/MyViewList';
import SearchPanel from '../APP/SearchPanel';
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
export default class NewsPanel extends Component { //传进来一个药品新闻列表吧,newlist
  constructor(props){
      super(props);
     // this.props.id=idList.NewsPanel; //登陆界面
     this.returnLastOne=this.returnLastOne.bind(this);
     var ds=new ListView.DataSource({rowHasChanged:(r1,r2)=>r1 !== r2});;
       this.state={
          dataSource:ds.cloneWithRows(this.props.news),
        }
  }
  render(){
    return(
     <Container>
         <Header> 
          <Left>
            <Button transparent iconLeft onPress={this.returnLastOne}>
               <Icon name='arrow-back' />
               <Text>相关新闻</Text>
            </Button>
          </Left>
          <Body>
          </Body>

         </Header>
         <Content>
           <Grid>
            <Row style={{  height: 200 }}>
                <Card>
                <CardItem  cardBody>
                    <Image source={require("./2.png")} />
                </CardItem>
               
                </Card>
          </Row>
            <Row style={{  height: 400 }}>
            <ListView dataSource={this.state.dataSource} renderRow={
              (rowData)=>{
                console.log(this.props.news);
                return (    
                    <Card>
                      
                      <CardItem  content>
                        <Text>{rowData.title}</Text>
                      </CardItem>
                      <CardItem  content>
                        <Text note>{rowData.newUrl}</Text>
                      </CardItem>
                       <CardItem  content>
                        <Text>{rowData.content}</Text>
                      </CardItem>
                    </Card>
                );
              }} />   
              </Row> 
          </Grid>
         </Content>    
       </Container>
  );
  }

  returnLastOne(){
      this.props.navigator.pop();
    }
}

const styles = StyleSheet.create({
  container: { //大面板
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
   style1: {
    color:'#666666'

  },
  wordStyle:{ //文本样式

  },
  RowStyle:{  //每行的样式，等下要是每行不一样的话，再改

  },
  ColStyle:{ //行样式，最好平分

  },
  wordStyle_register:{ //文本样式

  },
  buttonStyle_LogUp:{ //登陆

  },
  wordStyle_LogUp:{




  },

});