import React ,{useEffect} from 'react'
import { StyleSheet,ScrollView, Pressable,Text, View,Button,Image } from 'react-native';
import { globalStyles } from '../styles/AppStyle';
import MaterialIconsHeader from '../Components/MaterialIconsHeader';
import {HeaderButtons,Item} from 'react-navigation-header-buttons';
import {MaterialIcons} from '@expo/vector-icons';
import img1 from './images/img1.jpg';
import Colors from '../styles/Colors';
import ProgressInput from './Use/ProgressInput'



const Home = ({navigation}) => {

   useEffect(()=>{
       console.log('home est monte')
    return()=>{
      console.log('home est demonte')
     }
   })


  const handlepress =()=>{
    navigation.push('Portefolio') 
   }
   const handlepresss =()=>{
    navigation.push('Photos') 
   }
   const handlepressss =()=>{
    navigation.push('Views') 
   }

  return (
    <ScrollView style={styles.container}>
       <Text style={styles.txt}>  You are Welcom ! </Text>

       <Pressable style={styles.mainpress}>
            <Image style={styles.logo} source={require('./images/log.jpg')}/>  
            <View>
                 <Text style={styles.txt1}>VISION  & MISSION</Text> 
                 <ProgressInput/>

            </View>
        </Pressable>

        <Text style={styles.txt}>  . </Text>
        <Text style={styles.txt}>  MANAGEMENT </Text>



        <View style={styles.pressBlock}>  

            <Pressable onPress={() =>navigation.push('PhotosInfo')} 
                 style={({pressed}) => [
                  {backgroundColor:pressed? Colors.clicked : Colors.white},
                  styles.Block
              ]}
            >
                 <View style={styles.think}>
                     <MaterialIcons name='person' size={40} color={Colors.headerback} />
                     <Text style={styles.Blockname}>Personnels</Text> 
                     <Text >lorem texte</Text> 

                  </View> 
                 <Text style={styles.count}>87</Text> 
            </Pressable>

            <Pressable 
                   onPress={() =>navigation.push('PhotosInfo')} 
                   style={({pressed}) => [
                    {backgroundColor:pressed? Colors.clicked : Colors.white},
                    styles.Block
                ]}
            >
                  <View style={styles.think}>
                     <MaterialIcons name='supervisor-account' size={40} color={Colors.headerback}  />
                     <Text style={styles.Blockname}>Employer</Text> 
                     <Text >lorem texte</Text> 
                  </View> 
                 <Text style={styles.count}>50</Text>
            </Pressable>

            <Pressable 
                onPress={() =>navigation.push('PhotosInfo')} 
                style={({pressed}) => [
                 {backgroundColor:pressed? Colors.clicked : Colors.white},
                 styles.Block
             ]}
            >
               <View style={styles.think}>
                     <MaterialIcons name='train' size={40} color={Colors.headerback}  />
                     <Text style={styles.Blockname}>Materiel</Text> 
                     <Text >lorem texte</Text> 
                  </View> 
                 <Text style={styles.count}>71</Text> 
            </Pressable>

            <Pressable 
                onPress={() =>navigation.push('PhotosInfo')} 
                style={({pressed}) => [
                 {backgroundColor:pressed? Colors.clicked : Colors.white},
                 styles.Block
             ]}
             >
                 <View style={styles.think}>
                     <MaterialIcons name='bookmarks' size={40} color={Colors.headerback}  />
                     <Text style={styles.Blockname}>Compatable</Text> 
                     <Text >lorem texte</Text> 
                  </View> 
                 <Text style={styles.count}>12</Text>
            </Pressable>
             
            <Pressable 
               onPress={() =>navigation.push('PhotosInfo')} 
               style={({pressed}) => [
                {backgroundColor:pressed? Colors.clicked : Colors.white},
                styles.Block
            ]}
            >
               <View style={styles.think}>
                     <MaterialIcons name='mail' size={40} color={Colors.headerback}  />
                     <Text style={styles.Blockname}>Abscence</Text> 
                     <Text >lorem texte</Text> 
                  </View> 
                 <Text style={styles.count}>01</Text>
            </Pressable>

            <Pressable 
               onPress={() =>navigation.push('PhotosInfo')} 
               style={({pressed}) => [
                {backgroundColor:pressed? Colors.clicked : Colors.white},
                styles.Block
            ]}
            >
                <View style={styles.think}>
                     <MaterialIcons name='person' size={40} color={Colors.headerback}  />
                     <Text style={styles.Blockname}>Permissions</Text> 
                     <Text >lorem texte</Text> 
                  </View> 
                 <Text style={styles.count}>44</Text>
            </Pressable>

            <Pressable 
               onPress={() =>navigation.push('PhotosInfo')} 
               style={({pressed}) => [
                {backgroundColor:pressed? Colors.clicked : Colors.white},
                styles.Block
            ]}
            >
                <View style={styles.think}>
                     <MaterialIcons name='person-pin-circle' size={40} color={Colors.headerback}  />
                     <Text style={styles.Blockname}>Localisation</Text> 
                     <Text >lorem texte</Text> 
                  </View> 
                 <Text style={styles.count}>23</Text>
            </Pressable>


            <Pressable 
               onPress={() =>navigation.push('PhotosInfo')} 
               style={({pressed}) => [
                {backgroundColor:pressed? Colors.clicked : Colors.white},
                styles.Block
            ]}
            >
                <View style={styles.think}>
                     <MaterialIcons name='info-outline' size={40} color={Colors.headerback}  />
                     <Text style={styles.Blockname}>Information</Text> 
                     <Text >lorem texte</Text> 
                  </View> 
                 <Text style={styles.count}></Text>
            </Pressable>


        </View>

       <Button onPress={handlepress} title='vers portfolio'/>
       <Text ></Text>
       <Button onPress={handlepresss} title='vers photo'/>
       <Text ></Text>
       <Button onPress={handlepressss} title='vers ShopApp'/>
    </ScrollView>
  )
}


Home.navigationOptions ={
     headerLeft:() =>(
         <HeaderButtons
            HeaderButtonComponent={MaterialIconsHeader}
         >
             <Item
                title='Menu'
                iconName='menu'
                onPress={()=> alert('drawer')}
             />
         </HeaderButtons>
     )
}


export default Home;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop:10,
      paddingLeft:10,
      paddingRight:10,
    },
    mainpress:{
       backgroundColor:'white',
       height:150,
       borderRadius:10,
      marginTop:10,
       flexDirection:'row',
       justifyContent:'space-around',
       shadowOffset: {width: -2, height: 4},  
       shadowColor: '#171717',  
       shadowOpacity: 0.2,  
       shadowRadius: 3,
     },
     pressBlock:{
      flexWrap:'wrap',
      flexDirection:'row',
      justifyContent:'space-between'
    },
    Block:{
      height:100,
      width:'48%',
      borderRadius:10,
      marginTop:10,
      flexWrap:'wrap',
      flexDirection:'row',
      justifyContent:'space-evenly',
      shadowOffset: {width: -2, height: 4},  
      shadowColor: '#171717',  
      shadowOpacity: 0.2,  
      shadowRadius: 3,
    },
    Blockname:{
       fontWeight:'bold'
    },
     txt: {
          fontFamily:'  InriaSans_400Regular_Italic,',
          fontWeight:'bold'
      },
      txt1: {
        fontFamily:'  InriaSans_400Regular_Italic,',
        fontWeight:'bold',
        marginTop:40
    },
      count: {
        fontFamily:'  InriaSans_400Regular_Italic,',
        fontWeight:'bold',
        fontSize:15,
        marginTop:60
    },
    think:{
      marginTop:10
    },
      logo: {
        width:180,
        height:130,
        marginTop:10
    },
  });