import React, {useEffect} from 'react'
import { FlatList, Text, View,Button,Pressable, Image } from 'react-native';
import { globalStyles } from '../styles/AppStyle';
import Colors from '../styles/Colors';
import img1 from './images/img1.jpg';
import img2 from './images/img2.jpg';
import img3 from './images/img3.jpg';
import img4 from './images/img4.jpg';
import img5 from './images/img5.jpg';
import img6 from './images/img6.jpg';
import img7 from './images/img7.jpg';

const Photos = ({navigation}) => {
     
  useEffect(()=>{
    console.log('photos est monte')
 return()=>{
   console.log('photos est demonte')
  }
});

const DATA=[
  {
      id:'1',
      name:'Jose Pricesse',
      desc:'Etudiante a iuc depuis 2020 en genie logicil institue universitaire de la cote de douala',
      country:'Canada',
      totalImg:'3',
      img:img1
  },
  {
      id:'2',
      name:'Feujio Rochinel',
      desc:'Etudiant a iuc depuis 2020 en genie logicil institue universitaire de la cote de douala',
      country:'Allemagne',
      totalImg:'1',
      img:img2
  },
  {
      id:'3',
      name:'Paul Denilson',
      desc:'Etudiant a iuc depuis 2020 en genie logicil institue universitaire de la cote de douala',
      country:'Canada',
      totalImg:'3',
      img:img3
  },
  {
      id:'4',
      name:'Tadjou Jacqu',
      desc:'Etudiant a iuc depuis 2020 en genie logicil institue universitaire de la cote de douala',
      country:'Canada',
      totalImg:'4',
      img:img4
  },
  {
      id:'5',
      name:'Roberto Azebaze',
      desc:'Etudiant a iuc depuis 2020 en genie logicil institue universitaire de la cote de douala',
      country:'Canada',
      totalImg:'5',
      img:img5
  },
  {
      id:'6',
      name:'Jean Paul',
      desc:'Etudiant a iuc depuis 2020 en genie logicil institue universitaire de la cote de douala',
      country:'Bresil',
      totalImg:'6',
      img:img6
  },
  {
      id:'7',
      name:'Paki Jordan',
      desc:'Etudiant a iuc depuis 2020 en genie logicil institue universitaire de la cote de douala',
      country:'Italia',
      totalImg:'3',
      img:img7
  },
];




   const renderProfiles=({item})=>{
         return(
          <Pressable 
          // onPress={() =>navigation.push('PhotosInfo',item)}
           onPress={() =>navigation.navigate({
               routeName:'PhotosInfo',
               params:{
                name:item.name,
                country:item.country,
                totalImg:item.totalImg,
               }
           })}

           style={({pressed}) => [
               {backgroundColor:pressed? Colors.clicked : Colors.white},
                globalStyles.container
           ]}

          >
               <Text style={globalStyles.titleText1}> {item.name}</Text>
               <Image
                  style={globalStyles.profilStyle}
                  source={item.img}
               />
                   <View style={globalStyles.infoItems}>
                     <Text style={globalStyles.titleText2}> {item.country} </Text>
                     <Text style={globalStyles.titleText2}>  {item.totalImg}</Text>
                   </View>

          </Pressable>

         )
   }


  return (
    <View style={globalStyles.container}>
          <FlatList
             data={DATA}
             renderItem={renderProfiles}
             keyExtractor={item =>item.id}
          />
    </View>
  )
}

Photos.navigationOptions={
  headerTitle:'Users',
  headerStyle:{
    backgroundColor:'orange'
  },
  headerTintColor: Colors.white,
  headerTitleStyle:{
    fontWeight:'bold',
  },
  
}

export default Photos
