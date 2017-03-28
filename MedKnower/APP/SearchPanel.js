'use strict'
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ListView,
  Navigator,
  Image
} from 'react-native';
import { Container, Header, Title, Content, List,ListItem,Footer,Form,Item,Thumbnail, FooterTab, Left,Button,Body,Right, Icon, InputGroup,Input ,Card,CardItem,Text} from 'native-base';
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
    title:'请选择',
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

    var dataList=[
        {
          name:   "桉柠蒎肠溶软胶囊"    ,
          viewTimes:5,
          comments:47,
          imgUrl: "http://192.168.90.2:8080/Struts2Test/style/1.jpg",
          medSeq: "国药准字H20070006"  ,
          detial:"【药品名称】\n通用名称：桉柠蒎肠溶软胶囊 英文名称：Eucalyptol，LimoneneandPineneEntericSoftCapsules 商品名称：切诺 \n【成份】\n本品由桃金娘科桉属和芸香科桔属及松科松属植物的提取物所组成。主要成份为桉油精，柠檬烯及-蒎烯。\n【性状】本品为黄色肠溶软胶囊，内容物为浅黄色透明油状液体。	\n【适应症】\n本品为黏液溶解性祛痰药。 适用于急、慢性鼻窦炎。 适用于急慢性支气管炎、肺炎、支气管扩张、肺脓肿、慢性阻塞性肺部疾患、肺部真菌感染、肺结核和矽肺等呼吸道疾病。亦可用于支气管造影术后，促进造影剂的排出。\n【规格】\n按桉柠蒎油计为0.3g/粒	\n【用法用量】\n口服。成人：急性患者一次0.3g(1粒)，一日3-4次；慢性患者一次0.3g(1粒)，一日2次。本品宜于餐前半小时，凉开水送服，禁用热开水；不可打开或嚼破后服用。\n【不良反应】\n不良反应轻微，偶有胃肠道不适及过敏反应，如皮疹、面部浮肿、呼吸困难和循环障碍。\n【禁忌】\n对本品过敏者禁用。	\n【注意事项】\n尚不明确。	\n【孕妇及哺乳期妇女用药】\n慎用。	\n【儿童用药】\n尚不明确。	\n【老年用药】\n尚不明确。	\n【药物相互作用】\n尚不明确。	\n【药物过量】\n尚不明确。	\n【药理作用】\n试验结果表明，本品能使小鼠气管段分泌量增加，改善气管黏膜纤毛运动，促进呼吸道腺体的分泌作用，并使黏液移动速度增加，有助痰液排出。并能使豚鼠咳嗽潜伏期延长。文献显示本品具有抗炎作用，能通过减轻支气管黏膜肿胀面起到舒张支气管作用。\n【毒理研究】\n【药代动力学】\n口服给药后，桉柠蒎油中的单萜成分吸收迅速且完全，动物实验表明口服后1-3小时单萜成分达最大血药浓度。深入的研究表明柠檬烯在大鼠及其它动物和人类很快被代谢，口服给药后，柠檬烯主要通过动物和人类的尿排泄，约60%在24小时内经尿排泄，5%经粪便排泄，2%经呼出的CO2排泄。柠檬烯的主要代谢产物是双氢紫苏酸和紫苏酸，由约35%的血浆中的柠檬烯转化而得。柠檬烯-1，2-二醇是另一主要代谢产物 (由约18%的柠檬烯初始量转化而得)。服用柠檬烯后在血浆中可检测到紫苏酸甲酯和双氢紫苏酸甲酯，但仅有5%是从初始的柠檬烯转化而来的。桉柠蒎肠溶软胶囊中的其它萜类成分的动力学特性类似于柠檬烯，但代谢途径少有细致的研究。\n【贮藏】\n密闭，在阴凉(不超过20℃)处保存。	\n【包装】\n铝塑包装，6粒/盒；12粒/盒；18粒/盒。	\n【有效期】\n36个月	\n【执行标准】\nWS1 -(X-020)-2009Z	\n【批准文号】\n国药准字H20052401	\n【生产企业】\n北京九和药业有限公司	\n【核准日期】\n2007年01月04日	\n【修改日期】\n2007年03月05日 2008年06月11日 2009年11月01日 2010年10月31日",
          news:[
           
             {
              title:"四川",
              newUrl:'http://www.zyzhan.com/news/Detail/54372.html',
              content:'原标题：这些儿童常用剂型，您用对了吗？（固体<a href="http://www.zyzhan.com/product/T2825/list.html" target="_blank">制剂</a>篇）<br />　　<br />　　<strong>【中国制药网 市场分析】</strong>儿童的身体抵抗能力较弱，用药更需谨慎，当您拿到孩子的药品时，是否注意过包装上的&ldquo;片&rdquo;、&ldquo;咀嚼片&rdquo;、&ldquo;干混悬剂&rdquo;、&ldquo;口服液&rdquo;等字样？其实，这些代表了不同剂型。使用儿童药品，需要注意哪些剂型相关问题呢？<div style="text-align: center"><br /><img width="400" height="263" alt="" src="http://img53.zyzhan.com/9/20160607/636008859830578792273.jpg" /></div>　　<br /><strong>　　小小片剂大不同</strong><br /><br />　　片剂是药物与辅料均匀混合后压制而成的片状制剂，除了普通口服片，还包括含片、咀嚼片、泡腾片、分散片、缓释片、控释片等。普通片用水送服即可。分散片既可像普通片一样服，也能用水化后送服，或直接口含。<br />　　<br />　　如果宝宝还小，不能吞咽片剂，怎么办？大部分普通片是可以用水化开后喂服的。如药师和医生告知您不可溶后服，请咨询是否需要更换至更适的剂型或其它药品。<br />　　<br />　　含片，如地喹氯铵含片、溶菌酶含片等，使用时应含在嘴里，慢慢化开，不要嚼碎或直接吞下。并且，含服完半小时内尽量不要喝水吃东西，保持咽喉部位有较高的局部药物浓度，从而更好发挥疗效。<br />　　<br />　　咀嚼片，如孟鲁斯特钠咀嚼片，可以当糖嚼着吃，不宜直接吞服。如果医生开了0.8片等用法时，还需要特别注意用干净的剪刀或刀片切割掉1/5，再给小朋友吃剩余的4/5片。<br />　　<br />　　泡腾片，如葡萄糖电解质泡腾片、维生素C泡腾片，万万不可粗心地直接放入孩子口中，不然会在口腔及胃肠道迅速释放大量的气体，刺激黏膜，甚至造成意窒息等严重后果！应该用适宜的冷或温水冲配，待药物完全溶解后服用。<br />　　<br />　　缓释、控释片、肠溶片通常需整片吞服，不能掰开、嚼碎或研成粉末，否则会失去缓释或控释作用，药物突然大量释放，可能会加大毒副作用风险。但鉴于控释、缓释的技术原理不同，有的缓释片、控释片是可掰开的，如您想确认，务必仔细阅读说明书，或咨询医生、药师。如丙戊酸钠缓释片，可以沿着药片上事先刻好的刻痕掰开为两半。服用此类药品的患儿有时会在大便里排出&ldquo;完整&rdquo;的药片，家长们不可担心，其&ldquo;完整的药片&rdquo;只是使药物缓、控释的外壳而已。<br />　　<br /><strong>　　胶囊有软也有硬</strong><div style="text-align: center"><strong><br /><img width="400" height="188" alt="" src="http://img55.zyzhan.com/9/20160607/636008860244573708771.jpg" /></strong></div>　　<br />　　硬胶囊是将一定的药物及适当的辅料制成均匀的粉末或颗粒，填充于空心胶囊中制成的。通常不宜将胶囊拆开服用。但如果处方为某胶囊&ldquo;0.8片&rdquo;，就需要打开胶囊倒出1/5的药粉，再把胶囊盖起来吃。若孩子无法吞咽，对某些药物来说，可将其粉末倒出，混和于易消化的食物中送服。具体可行与否请咨询医药师。<br />　　<br />　　软胶囊是将一定量的药物溶于适当辅料中，再用压制法或滴制法使之密封于球形或橄榄形的软质胶囊中制成。有的软胶囊既可整体吞服，也可剪开后挤出药物滴服，如维生素D3、维生素AD滴剂（胶囊型）等。<br />　　<br />　　如有&ldquo;肠溶&rdquo;字样的，则应该整体吞服，不可打开或嚼破。如桉柠蒎肠溶软胶囊，适宜餐前半小时用凉开水整体吞服，禁用热开水。<br />　　<br /><strong>　　干混、颗粒调一调</strong><div style="text-align: center"><strong><br /><img width="450" height="363" alt="" src="http://img53.zyzhan.com/9/20160607/636008860434141821676.jpg" /></strong></div>　　<br />　　干混悬剂，如头孢克洛干混悬剂、克拉霉素干混悬剂、阿奇霉素干混悬剂，不能直接吞服，因为干混悬剂一般为细小的粉末，容易呛入气管引起窒息，应用水调化混匀。有些干混悬剂预先装在瓶子里，第一次用时加入水至刻度线，之后每次混匀后量取一定体积服用，剩余的放4&deg;C冰箱保存。<br />　　<br />　　颗粒剂是药物与适宜的辅料配合而制成的颗粒状制剂。中成药颗粒一般用水冲服，注意分辨说明书或包装上标注的是&ldquo;开水&rdquo;、&ldquo;温开水&rdquo;还是&ldquo;凉开水&rdquo;。某些颗粒剂则有特殊服法，如某种孟鲁斯特钠颗粒，既可直接服用，又可与软性食物混合服用，或溶于配方奶粉或母乳中服用，不可直接用水溶，但是服药后可以饮水。<br />　　<br /><strong>　　丸、散也分内与外<br /></strong>　　<br />　　丸剂，如羚黄宝儿丸、王氏保赤丸、胃肠安丸、大补阴丸，请务必看清用量的单位：是&ldquo;丸&rdquo;，还是&ldquo;支&rdquo;、&ldquo;瓶&rdquo;等。值得注意的是，并非所有看起来是丸状的都能口服，比如复方丁香开胃贴里面有三颗药丸，曾有粗心的家长误以为要吃，但其实正确用法是用贴纸每次把一颗药丸固定在肚脐处外用。<br />　　<br />　　散剂，如珠珀保婴散、回春散、小儿葫芦散是口服，而银胡感冒散是外用的，先用手轻揉脐部约一分钟，后将小瓶药油倒进药包对准脐眼贴上；若重症，则加一贴在大椎穴，位于颈后。</div>'
            }

          ]
        },
        {
          name:   "桉柠蒎肠溶软胶囊"    ,
          viewTimes:5,
          comments:47,
          imgUrl: "http://192.168.90.2:8080/Struts2Test/style/2.jpg",
          medSeq: "国药准字H20052401" ,
          detial:"【药品名称】\n通用名称：桉柠蒎肠溶软胶囊 英文名称：Eucalyptol，LimoneneandPineneEntericSoftCapsules 商品名称：切诺 \n【成份】\n本品由桃金娘科桉属和芸香科桔属及松科松属植物的提取物所组成。主要成份为桉油精，柠檬烯及-蒎烯。\n【性状】本品为黄色肠溶软胶囊，内容物为浅黄色透明油状液体。	\n【适应症】\n本品为黏液溶解性祛痰药。 适用于急、慢性鼻窦炎。 适用于急慢性支气管炎、肺炎、支气管扩张、肺脓肿、慢性阻塞性肺部疾患、肺部真菌感染、肺结核和矽肺等呼吸道疾病。亦可用于支气管造影术后，促进造影剂的排出。\n【规格】\n按桉柠蒎油计为0.3g/粒	\n【用法用量】\n口服。成人：急性患者一次0.3g(1粒)，一日3-4次；慢性患者一次0.3g(1粒)，一日2次。本品宜于餐前半小时，凉开水送服，禁用热开水；不可打开或嚼破后服用。\n【不良反应】\n不良反应轻微，偶有胃肠道不适及过敏反应，如皮疹、面部浮肿、呼吸困难和循环障碍。\n【禁忌】\n对本品过敏者禁用。	\n【注意事项】\n尚不明确。	\n【孕妇及哺乳期妇女用药】\n慎用。	\n【儿童用药】\n尚不明确。	\n【老年用药】\n尚不明确。	\n【药物相互作用】\n尚不明确。	\n【药物过量】\n尚不明确。	\n【药理作用】\n试验结果表明，本品能使小鼠气管段分泌量增加，改善气管黏膜纤毛运动，促进呼吸道腺体的分泌作用，并使黏液移动速度增加，有助痰液排出。并能使豚鼠咳嗽潜伏期延长。文献显示本品具有抗炎作用，能通过减轻支气管黏膜肿胀面起到舒张支气管作用。\n【毒理研究】\n【药代动力学】\n口服给药后，桉柠蒎油中的单萜成分吸收迅速且完全，动物实验表明口服后1-3小时单萜成分达最大血药浓度。深入的研究表明柠檬烯在大鼠及其它动物和人类很快被代谢，口服给药后，柠檬烯主要通过动物和人类的尿排泄，约60%在24小时内经尿排泄，5%经粪便排泄，2%经呼出的CO2排泄。柠檬烯的主要代谢产物是双氢紫苏酸和紫苏酸，由约35%的血浆中的柠檬烯转化而得。柠檬烯-1，2-二醇是另一主要代谢产物 (由约18%的柠檬烯初始量转化而得)。服用柠檬烯后在血浆中可检测到紫苏酸甲酯和双氢紫苏酸甲酯，但仅有5%是从初始的柠檬烯转化而来的。桉柠蒎肠溶软胶囊中的其它萜类成分的动力学特性类似于柠檬烯，但代谢途径少有细致的研究。\n【贮藏】\n密闭，在阴凉(不超过20℃)处保存。	\n【包装】\n铝塑包装，6粒/盒；12粒/盒；18粒/盒。	\n【有效期】\n36个月	\n【执行标准】\nWS1 -(X-020)-2009Z	\n【批准文号】\n国药准字H20052401	\n【生产企业】\n北京九和药业有限公司	\n【核准日期】\n2007年01月04日	\n【修改日期】\n2007年03月05日 2008年06月11日 2009年11月01日 2010年10月31日",
          news:[
            {
              title:"儿科常用剂型有区分 儿童用药需谨慎",
              newUrl:'http://www.zyzhan.com/news/Detail/54372.html',
              content:'原标题：这些儿童常用剂型，您用对了吗？（固体<a href="http://www.zyzhan.com/product/T2825/list.html" target="_blank">制剂</a>篇）<br />　　<br />　　<strong>【中国制药网 市场分析】</strong>儿童的身体抵抗能力较弱，用药更需谨慎，当您拿到孩子的药品时，是否注意过包装上的&ldquo;片&rdquo;、&ldquo;咀嚼片&rdquo;、&ldquo;干混悬剂&rdquo;、&ldquo;口服液&rdquo;等字样？其实，这些代表了不同剂型。使用儿童药品，需要注意哪些剂型相关问题呢？<div style="text-align: center"><br /><img width="400" height="263" alt="" src="http://img53.zyzhan.com/9/20160607/636008859830578792273.jpg" /></div>　　<br /><strong>　　小小片剂大不同</strong><br /><br />　　片剂是药物与辅料均匀混合后压制而成的片状制剂，除了普通口服片，还包括含片、咀嚼片、泡腾片、分散片、缓释片、控释片等。普通片用水送服即可。分散片既可像普通片一样服，也能用水化后送服，或直接口含。<br />　　<br />　　如果宝宝还小，不能吞咽片剂，怎么办？大部分普通片是可以用水化开后喂服的。如药师和医生告知您不可溶后服，请咨询是否需要更换至更适的剂型或其它药品。<br />　　<br />　　含片，如地喹氯铵含片、溶菌酶含片等，使用时应含在嘴里，慢慢化开，不要嚼碎或直接吞下。并且，含服完半小时内尽量不要喝水吃东西，保持咽喉部位有较高的局部药物浓度，从而更好发挥疗效。<br />　　<br />　　咀嚼片，如孟鲁斯特钠咀嚼片，可以当糖嚼着吃，不宜直接吞服。如果医生开了0.8片等用法时，还需要特别注意用干净的剪刀或刀片切割掉1/5，再给小朋友吃剩余的4/5片。<br />　　<br />　　泡腾片，如葡萄糖电解质泡腾片、维生素C泡腾片，万万不可粗心地直接放入孩子口中，不然会在口腔及胃肠道迅速释放大量的气体，刺激黏膜，甚至造成意窒息等严重后果！应该用适宜的冷或温水冲配，待药物完全溶解后服用。<br />　　<br />　　缓释、控释片、肠溶片通常需整片吞服，不能掰开、嚼碎或研成粉末，否则会失去缓释或控释作用，药物突然大量释放，可能会加大毒副作用风险。但鉴于控释、缓释的技术原理不同，有的缓释片、控释片是可掰开的，如您想确认，务必仔细阅读说明书，或咨询医生、药师。如丙戊酸钠缓释片，可以沿着药片上事先刻好的刻痕掰开为两半。服用此类药品的患儿有时会在大便里排出&ldquo;完整&rdquo;的药片，家长们不可担心，其&ldquo;完整的药片&rdquo;只是使药物缓、控释的外壳而已。<br />　　<br /><strong>　　胶囊有软也有硬</strong><div style="text-align: center"><strong><br /><img width="400" height="188" alt="" src="http://img55.zyzhan.com/9/20160607/636008860244573708771.jpg" /></strong></div>　　<br />　　硬胶囊是将一定的药物及适当的辅料制成均匀的粉末或颗粒，填充于空心胶囊中制成的。通常不宜将胶囊拆开服用。但如果处方为某胶囊&ldquo;0.8片&rdquo;，就需要打开胶囊倒出1/5的药粉，再把胶囊盖起来吃。若孩子无法吞咽，对某些药物来说，可将其粉末倒出，混和于易消化的食物中送服。具体可行与否请咨询医药师。<br />　　<br />　　软胶囊是将一定量的药物溶于适当辅料中，再用压制法或滴制法使之密封于球形或橄榄形的软质胶囊中制成。有的软胶囊既可整体吞服，也可剪开后挤出药物滴服，如维生素D3、维生素AD滴剂（胶囊型）等。<br />　　<br />　　如有&ldquo;肠溶&rdquo;字样的，则应该整体吞服，不可打开或嚼破。如桉柠蒎肠溶软胶囊，适宜餐前半小时用凉开水整体吞服，禁用热开水。<br />　　<br /><strong>　　干混、颗粒调一调</strong><div style="text-align: center"><strong><br /><img width="450" height="363" alt="" src="http://img53.zyzhan.com/9/20160607/636008860434141821676.jpg" /></strong></div>　　<br />　　干混悬剂，如头孢克洛干混悬剂、克拉霉素干混悬剂、阿奇霉素干混悬剂，不能直接吞服，因为干混悬剂一般为细小的粉末，容易呛入气管引起窒息，应用水调化混匀。有些干混悬剂预先装在瓶子里，第一次用时加入水至刻度线，之后每次混匀后量取一定体积服用，剩余的放4&deg;C冰箱保存。<br />　　<br />　　颗粒剂是药物与适宜的辅料配合而制成的颗粒状制剂。中成药颗粒一般用水冲服，注意分辨说明书或包装上标注的是&ldquo;开水&rdquo;、&ldquo;温开水&rdquo;还是&ldquo;凉开水&rdquo;。某些颗粒剂则有特殊服法，如某种孟鲁斯特钠颗粒，既可直接服用，又可与软性食物混合服用，或溶于配方奶粉或母乳中服用，不可直接用水溶，但是服药后可以饮水。<br />　　<br /><strong>　　丸、散也分内与外<br /></strong>　　<br />　　丸剂，如羚黄宝儿丸、王氏保赤丸、胃肠安丸、大补阴丸，请务必看清用量的单位：是&ldquo;丸&rdquo;，还是&ldquo;支&rdquo;、&ldquo;瓶&rdquo;等。值得注意的是，并非所有看起来是丸状的都能口服，比如复方丁香开胃贴里面有三颗药丸，曾有粗心的家长误以为要吃，但其实正确用法是用贴纸每次把一颗药丸固定在肚脐处外用。<br />　　<br />　　散剂，如珠珀保婴散、回春散、小儿葫芦散是口服，而银胡感冒散是外用的，先用手轻揉脐部约一分钟，后将小瓶药油倒进药包对准脐眼贴上；若重症，则加一贴在大椎穴，位于颈后。</div>'
           },
             

          ]
        }
    ];
     var ds=new ListView.DataSource({rowHasChanged:(r1,r2)=>r1 !== r2}); 
export default class SearchPanel extends Component{   //搜索界面，又或者是其他界面
//default
  constructor(props){
        super(props);
      //  this.props.id=idList.SearchPanel; //登陆界面
       // this.props.medName="";//药品名称
      
        this.state={
          dataSource:ds.cloneWithRows([]),
          medName:"",
          responesGetted:false
        };
        this.toDetailPanel=this.toDetailPanel.bind(this);
        this.changeText=this.changeText.bind(this);
        this.imageDeal=this.imageDeal.bind(this);
        this.responseFromServer=this.responseFromServer.bind(this);
        this.catchExpection=this.catchExpection.bind(this);
        this.showDetialPanel = this.showDetialPanel.bind(this);
        this.rowRenderFuc = this.rowRenderFuc.bind(this);
        this.uploadImage=this.uploadImage.bind(this);
    }
 
  render(){
    return(
       <Container>
         <Header searchBar rounded> 
                     <Button transparent  onPress={this.toDetailPanel}> 
                            <Text>搜索</Text>
                        </Button>
                    <Item>
                        <Icon name="md-search"  onPress={this.toDetailPanel} />
                        <Input placeholder="Search" onChangeText={this.changeText}/>
                    </Item>
         </Header>
         <Content>
      
             <ListView enableEmptySections dataSource={this.state.dataSource} navigator={this.props.navigator}
                  renderRow={this.rowRenderFuc}
                />
                
             

           
         
         </Content>
         <Footer>
           <FooterTab>
              <Button  active onPress={()=>{}}>
                  <Icon  active name="md-search" />
                  <Text>搜索</Text>
              </Button >
              <Button >
                <Icon  active name="md-search" />
                <Text>社区</Text>
              </Button>
              <Button onPress={()=>{}}>
                <Icon active  name="md-search" />
                <Text>药程管理</Text>
              </Button>
              <Button onPress={()=>{}}>
                <Icon active name="md-search"/>
                <Text>设置</Text>
              </Button>
           </FooterTab>
         </Footer>
       </Container>
    );
  }
  changeText(medName){
    this.setState({medName:medName,navigator:this.props.navigator});
  }
  toDetailPanel(){
    //网络搜索(根基props.medName) -> 得到结果->保存在状态里->展示在ListView里面
    /**
     * 
     * 这里就是网络代码，先假装设置下
     * 
     */
  //模拟一下这个药
    ImagePicker.showImagePicker(photoOptions,this.imageDeal);
    //传图片
    
    //
    
  
   
  }
  imageDeal(respones){
     console.log('respones');
     console.log(respones);
     //获得相机图片

     //上传
     var formData1=new FormData();
     formData1.append(
       {"imgdata":respones}
       
       );
    //  if(respones.didCancel == true){
    //    return; //什么的不做
    //  }
     this.uploadImage(formData1);

  }
  uploadImage(formData){
    // console.log(formData);
    //   var url="http://localhost:8080/struts2Test/";
    //   fetch(url,{  
    //     method:'POST',  
    //     headers:{  
    //     'Content-Type':'multipart/form-data',  
    //     },  
    //      body:formData,  
    // }).then(this.responseFromServer).catch(this.catchExpection);
      var dataList1=dataList;
       this.setState({dataSource:ds.cloneWithRows(dataList1)}); //刷新
  }
  responseFromServer(respones){
    //来自服务器的响应
    console.log("更新数据源:");
    var dataList1=dataList;
    this.setState({dataSource:ds.cloneWithRows(dataList1)}); //刷新
   
  }
  catchExpection(error){
    //错误处理，弹出信息框说明的
    var dataList1=dataList;
    this.setState({dataSource:ds.cloneWithRows(dataList1)}); //刷新



  }
  rowRenderFuc(rowData, sectionID, rowID, highlightRow){//图片地址，药品名称，药品批准文号 
      //加载一个图片
      //文字
      //批准文号
        if(rowData == null )return;
        var imgContentUri=rowData.imgUrl,medicinalName=rowData.name,Medseq=rowData.medSeq; //从rowData里面取出来
        console.log("链接地址:"+imgContentUri);
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
                <Image square   source={{uri:imgContentUri}}  style={{width: 200, height: 200}}/>  
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