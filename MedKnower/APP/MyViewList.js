'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ListView,
  Navigator,
  Image,
  TouchableHighlight

} from 'react-native';
import { Container, Header, Title, Content, List,ListItem,Footer,Form,Item, Thumbnail,FooterTab, Left,Button,Body,Right, Icon, InputGroup,Input ,Card,CardItem,Text} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import ImagePicker from 'react-native-image-picker';


import DetailPanel from "../APP/DetailPanel";
import Login from "../APP/Login";
import NewsPanel from '../APP/NewsPanel';


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
var Dimensions = require('Dimensions');
var { width_, height_ } = Dimensions.get('window');

export default class MyViewList extends Component {   //这个就是动态的界面,需要传过来数据，数据源，就像listView
    constructor(props){
        super(props);      
        var ds=new ListView.DataSource({rowHasChanged:(r1,r2)=>r1 !== r2}); 
        this.state={
          dataSource:ds.cloneWithRows(this.props.dataSource),
        }
        console.log("准备渲染列表!");
     this.showDetialPanel = this.showDetialPanel.bind(this);
     this.rowRenderFuc = this.rowRenderFuc.bind(this);

    }   
    
    render(){
      return(
        //根据属性渲染这个
        <ListView enableEmptySections dataSource={this.state.dataSource} renderRow={this.rowRenderFuc} /> 
      // <ListView  /> 

      );

    }
    
     rowRenderFuc(rowData, sectionID, rowID, highlightRow){//图片地址，药品名称，药品批准文号 
      //加载一个图片
      //文字
      //批准文号
        if(rowData == null )return;
        var imgContentUri=rowData.imgUrl,medicinalName=rowData.name,Medseq=rowData.medSeq; //从rowData里面取出来
            return(
            
              <Card> 
              <CardItem cardBody onPress={()=>{
                                    this.props.navigator.push({
                                          id:idList.DetailPanel,
                                          passProps:rowData,
                                          type:"Right"  //从右边滑入
                                          });
                }}>

                <Body>
                <Image   source={require("./1.jpg")} />  
                </Body>
                <Right>
                </Right>
              </CardItem>
              <CardItem Content>
               
                <Body>
                  <Text>
                    {medicinalName}
                  </Text>
                </Body>
                <Right>
                </Right>
              </CardItem>
              <CardItem Content>
               
                <Body>
                  <Text note>
                    {Medseq}
                  </Text>
                </Body>
                <Right>
                </Right>
              </CardItem>
              </Card>
             
            );

    }
    
    showDetialPanel(rowData){
      //console.log("pressed!!");
      //进去到详细页面里面去
    
       console.log("navigator:");
       console.log(this.props.navigator);
       console.log("rowData:");
       console.log(rowData);
       this.props.navigator.push({
          id:idList.DetailPanel,
          passProps:rowData,
          type:"Right"  //从右边滑入
      });//进入这个界面，detail界面
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