import { StyleSheet, Text, View,Button,TextInput,ScrollView,FlatList } from 'react-native';
import React,{useState} from "react";

const App =({handlechange,produit,handlesubmit})=> {

  return (
      
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            onChangeText={handlechange}
            value={produit}
            placeholder='nom du produit'
          />

             <Text>.</Text>
             <Button onPress={handlesubmit} style={{backgroundColor: 'lightblue',}} title='enregistrer'/>
             <Text>.</Text>
        </View>
     
    
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop:30,
    paddingLeft:10,
    paddingRight:10,
    width:'auto',
  },

  input: {
    backgroundColor: 'lightblue',
    border:'2px solid black',
    height:40,
    borderRadius:10,
    width:'90%',
  },


});
