import { StyleSheet, Text, View,Alert,TextInput,ScrollView,FlatList } from 'react-native';
import React,{useState} from "react";
import Produits from './Produits';
import AddData from './AddData';

const App =()=> {

  const [produit , setProduit]=useState('');
  const [myproduits , setMyproduits]=useState([]);

  const handlechange =(val)=>{
    setProduit(val)
  }

  const handlesubmit =()=>{
    if(produit.length !=0){
      const id=Date.now().toString();
      setMyproduits([ { key:id ,name:produit},...myproduits]);
      setProduit('');
    }else{
       Alert.alert('DESOLE','veillez  entrer une valeur',[
          {
            text:'ok',
          }
        ],
        {
          cancelable:true
        }
       );
    }
   
  }

  const handledelete =(key)=>{
    setMyproduits(myproduits =>{
        return  myproduits.filter(produit =>produit.key !=key)
    })
  }

  return (
    <View style={styles.main}>
      <Text style={styles.txt}>ShoppingApp</Text>
      
        <AddData
           handlesubmit={handlesubmit}
           handlechange={handlechange}
           produit={produit}
        />
     
     <ScrollView>
     <View style={styles.element}>
           <FlatList
              data={myproduits}
              renderItem={({item}) =>
                    <Produits 
                      item={item}
                      id={item.key}
                      handledelete={handledelete}
                    />
                  }
            />
             </View>
       </ScrollView>

    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop:30
  },
  main: {
    marginTop:80,
    fontSize:100
  },
  txt: {
    textAlign:'center',
    fontWeight:'bold',
     color:'green',

  },
  input: {
    border:'1px solid black',
    height:30,
    borderRadius:10,
    width:90,
    paddingLeft:11
  },
  element: {
    marginTop:50,
    alignItems:'center'
  },
  items: {
    backgroundColor:'green',
    width:90,
    height:40,
    margin:'auto',
    marginVertical:6
  },
  item: {
   color:'white',
   marginLeft:20,
   marginTop:10,
   alignItems:'center'
  },
});
