import React ,{useEffect} from 'react'
import { StyleSheet, Text, View,Button } from 'react-native';
import { globalStyles } from '../styles/AppStyle';
import Colors from '../styles/Colors';
import {HeaderButtons,Item} from 'react-navigation-header-buttons'
import MaterialIconsHeader from '../Components/MaterialIconsHeader'

const PhotosInfo = ({navigation}) => {

  return (
    <View style={styles.container}>
       <Text style={styles.txt}>{navigation.getParam('name')}</Text>
       <Text style={styles.txt}>{navigation.getParam('country')}</Text>
       <Text style={styles.txt}>{navigation.getParam('totalImg')}</Text>
        
       <Text ></Text>
    </View>
  )
}




  PhotosInfo.navigationOptions=(navigationData)=>{
     const name = navigationData.navigation.getParam('name');
     return{
      headerTitle:name,
      headerStyle:{
        backgroundColor:Colors.headerback
      },
      headerTintColor: Colors.white,
      headerTitleStyle:{
        fontWeight:'bold',
      },
      headerRight:()=>(
       <HeaderButtons
         HeaderButtonComponent={MaterialIconsHeader}
       >
           <Item
              title='infoss'
              iconName='info-outline'
              onPress={()=>alert(' plus jinformation sur '+name)}
           />

            <Item
              title='infoss'
              iconName='mail'
              onPress={()=>alert(' plus jinformation sur '+name)}
           />
       </HeaderButtons>
     )
     }
  }


export default PhotosInfo;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    txt: {
        alignItems: 'center',
        justifyContent: 'center',
        fontSize:20
      },
  });