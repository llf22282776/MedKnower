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



export  default class DetailPanel extends Component { //药品面板，传入  图片uri，评论数，说明，新闻，浏览次数,
  constructor(props){
    super(props);
    this.returnLastOne=this.returnLastOne.bind(this);
    this.toNewsPanel= this.toNewsPanel.bind(this);
    this.old=this.old.bind(this);
    this.show=this.show.bind(this);
    var imgurl=(this.props.imgUrl).slice(0,(this.props.imgUrl).indexOf(".jpg"));
    this.state={
      spreadDet:"药品说明",
      viewTimes:this.props.viewTimes,
      comments:this.props.comments,
      s2:"相关新闻",
      s1:"你的评价",
      imgurl:imgurl
    };

  }
  render(){
    return (
        <Container>
         <Header> 
          <Left>
            <Button transparent iconLeft onPress={this.returnLastOne}>
               <Icon name='arrow-back' />
               <Text>药品详情</Text>
            </Button>
          </Left>
          <Body>
          </Body>
         </Header>
          <Content> 
            <Card>
              <CardItem cardBody> 
                <Image source={{uri:this.props.imgUrl}}  style={{width: 200, height: 200}} />  
              </CardItem>
              <CardItem> 
                <Left> 
                 <Text> {this.props.viewTimes}</Text>
                </Left>
                <Right>
                  <Button transparent iconRight>
                    <Icon active name="chatbubbles" />
                    <Text>{this.props.comments} 评论</Text>
                  </Button>
                </Right>
              </CardItem>
            </Card>
               <ListItem itemDivider>
               <Text> </Text>
            </ListItem>
            <ListItem icon onPress={()=>{}}>
                        <Left>
                            <Icon active name="wifi" />
                        </Left>
                        <Body>
                          <Text>{this.state.s1}</Text>
                        </Body>    
            </ListItem>
           
            <ListItem itemDivider>
               <Text> </Text>
            </ListItem>
            <ListItem icon onPress={ 
              /*if(this.state.spreadDet == "药品说明")
                  this.setState({
                    spreadDet:this.props.detial,
                    s1:this.state.s1,
                    s2:this.state.s2
                    
                    });
                  
              else this.setState({spreadDet:"药品说明"});
             
              */
               this.show
              
              }/*设置说明书*/>
                 <Left>
                    <Icon active name="wifi" />
                </Left>
                <Body>
                     <Text>{this.state.spreadDet}</Text>
                </Body>
                 
            </ListItem>
            <ListItem itemDivider>
               <Text> </Text>
            </ListItem>
            <ListItem icon onPress={this.toNewsPanel}>
                        <Left>
                            <Icon name="wifi" />
                        </Left>
                        <Body>
                          <Text>{this.state.s2}</Text>
                        </Body>    
            </ListItem>
         </Content>
          <Footer>
                    <FooterTab>
                        <Button full iconLeft onPress={()=>{}}>
                            <Text>加入药程管理</Text>
                            <Icon name='medkit' />
                        </Button>
                    </FooterTab>
          </Footer>
       </Container>);
  }
  old(){
     return (
        <Container>
         <Header> 
          <Left>
            <Button transparent iconLeft onPress={this.returnLastOne}>
               <Icon name='arrow-back' />
               <Text>药品详情</Text>
            </Button>
          </Left>
          <Body>
          </Body>
         </Header>
         <Content> 
            <Card>
              <CardItem cardBody> 
                <Image source={require("./1.jpg")} />  
              </CardItem>
              <CardItem> 
                <Left> 
                  {this.props.viewTimes}
                </Left>
                <Right>
                  <Button transparent iconRight>
                    <Icon active name="chatbubbles" />
                    <Text>{this.props.comments} 评论</Text>
                  </Button>
                </Right>
              </CardItem>
            </Card>
            <ListItem itemDivider>
               <Text> </Text>
            </ListItem>
            <ListItem icon onPress={()=>{}}>
                        <Left>
                            <Icon active name="wifi" /> {/*编辑图标*/}
                        </Left>
                        <Body>
                          <Text>你的评价</Text>
                        </Body>    
            </ListItem>
           
            <ListItem itemDivider>
               <Text> </Text>
            </ListItem>
            <ListItem icon onPress={ 
              
              this.show
              
              
              
              /*设置说明书*/}>
              {
                ()=>{
                    if (this.state.spreadDet == true) {
                      return (
                        <Text>
                          {this.props.detial}
                        </Text>
                      );
               }else
               {
                  return(
                    <Body>
                     <Text>
                    药品说明
                     </Text>
                  </Body>

                  );
               }
                }
              }    
            </ListItem>
            <ListItem itemDivider> {/*接下来是新闻*/}
               <Text> </Text>
            </ListItem>
             <ListItem icon onPress={this.toNewsPanel}> {/*跳转函数，到新闻界面*/}
                        <Left>
                            <Icon name="wifi" /> {/*新闻图标*/}
                        </Left>
                        <Body>
                          <Text>相关新闻</Text>
                        </Body>    
            </ListItem>
         </Content>
           <Footer>
                    <FooterTab>
                        <Button full iconLeft onPress={()=>{}}>
                            <Icon name='medkit' />
                            <Text>加入药程管理</Text>
                          
                        </Button>
                    </FooterTab>
          </Footer>
       </Container>);

       
  }

 returnLastOne(){
    this.props.navigator.pop();


  }
 toNewsPanel(){
      // this.props.MedMsg=rowData; //药品详细信息
        var routeTemp={
            id:idList.NewsPanel,
            passProps:this.props,
            type:"Right"  //从右边滑入
        };
        this.props.navigator.push(routeTemp);
  }
 returnPanel(){
}
  show(){
    this.props.navigator.push({
        id:idList.MedDetail,
        passProps:this.props,
        type:"Right"
    });
    

}
  
 



}

      