import { StyleSheet } from 'react-native';
import Colors from './Colors';

export  const globalStyles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop:20,
      paddingLeft:20,
      paddingRight:20,
    },
    titleText1: {
        fontSize:20,
        padding:9,
        alignItems: 'center',
        fontFamily:'nriaSans_700Bold',
        fontWeight:'bold',
      },
      titleText2: {
        fontSize:15,
        padding:9,
        fontFamily:'nriaSans_700Bold'
      },
      profilStyle:{
        width:'100%',
        height:250,
        borderRadius:14,

      },
      info:{
        display:'flex',
        flexDirection:'column',
        float:'left',

      },
      infoItems:{
        width:'90%',
         flexDirection:'row',
        justifyContent:'space-around'

      },
  });