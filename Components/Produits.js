import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TouchableOpacity,Alert,ScrollView,FlatList } from 'react-native';
import React  from "react";

const App =({item,handledelete,id})=> {
 
  return (
  <TouchableOpacity
    activeOpacity={0.5}
    onPress={()=> handledelete(id)}
    /* onPress={
        Alert.alert('SUPRIMER','voulez-vous supprimer?',[
            {
              text:'ok',
              onPress:()=> handledelete(id)
            }
          ],
          {
            cancelable:true
          }
         )
     }*/
  >
     <View style={styles.items}>
          <Text style={styles.item}>{item.name}</Text>
      </View>
   </TouchableOpacity>
  );
}
  
export default App;

const styles = StyleSheet.create({
  element: {
    marginTop:40,
  },
  items: {
    backgroundColor:'green',
    width:320,
    height:40,
    margin:'auto',
    marginVertical:6,
    marginTop:10,
  },
  item: {
   color:'white',
   marginLeft:20,
   marginTop:10,
   alignItems:'center'
  },
});
