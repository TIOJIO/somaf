import React ,{useEffect} from 'react'
import { StyleSheet, Text, View,Button } from 'react-native';
import { globalStyles } from '../styles/AppStyle';


const Portefolio = ({navigation}) => {
       
  useEffect(()=>{
    console.log('portfolio est monte')
 return()=>{
   console.log('portefolio est demonte')
  }
})

  const handlepress =()=>{
    navigation.push('Photos') 
   }

  return (
    <View style={styles.container}>
       <Text style={styles.txt}>Portefolio</Text>

       <Button onPress={handlepress} title='vers photos'/>
       <Text ></Text>
    </View>
  )
}

export default Portefolio;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'lightgreen',
      alignItems: 'center',
      justifyContent: 'center',
    },
    txt: {
        alignItems: 'center',
        justifyContent: 'center',
      },
  });