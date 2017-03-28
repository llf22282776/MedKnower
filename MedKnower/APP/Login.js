'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ListView,
  Navigator,
  Image
} from 'react-native';
import { Container, Header, Title, Content, List,ListItem,Thumbnail,Footer,Form,Item, FooterTab, Left,Button,Body,Right, Icon, InputGroup,Input ,Card,CardItem,Text} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import ImagePicker from 'react-native-image-picker';


 import DetailPanel from "../APP/DetailPanel";
  import MyViewList from '../APP/MyViewList';
  import NewsPanel from '../APP/NewsPanel';
  import SearchPanel from '../APP/SearchPanel';

var idList={
  Login:"Login",
  Nav:"MedKnower",
  SearchPanel:"SearchPanel",
  DetailPanel:"DetailPanel",
  NewsPanel:"NewsPanel"

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
export default class Login extends Component {
  constructor(props){
      super(props);
     //this.props.id=idList.Login; //登陆界面
  }
  

  render() {
    return(
      <Container>
        <Content> 
                    <Text>  </Text>
                    <Text>  </Text>
                    <Text>  </Text>
                    <View>
                        <Left><Text>  </Text></Left> 
                     <Body><Image    style={{height:200,width:400}} source={require('./Med.png')} /></Body>
                      
                    </View>
                     
            <Form>
                  <Item>
                    <Input  placeholder="用户名" />
                  </Item>
                  <Item last>
                    <Input placeholder="密码" secureTextEntry={true} />
                  </Item>
                    
                
            </Form>
            <Text>  </Text>
            <Text>  </Text>
            <Button block onPress={()=>{
                                        this.props.navigator.push({
                                          id:idList.SearchPanel,
                                          passProps:this.props,
                                          type:"Right"
                                        });
                                          }

                                  }>
                                <Text>登陆</Text>
           </Button>
           <Grid>
             <Col style={styles.col_Style}>
                       <Left>
                            <Button textStyle={{textAlign:"Left"}} transparent> 
                              <Text >忘记密码</Text>
                            </Button>
                       </Left>
                      
             </Col>
            
             <Col style={styles.col_Style}>
             
             </Col>
              <Col style={styles.col_Style}>
                   
              
                   <Right>
                        <Button textStyle={{textAlign:"Right"}} transparent>
                              <Text>注册</Text>
                       </Button>
                   </Right>
             </Col>
           </Grid>






          
          

        
        </Content>
      </Container>);
    

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
  col_Style:{
      height:100

  },

});

