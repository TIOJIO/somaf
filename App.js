import React from "react";
import MainNavigator from './routes/DrawerNav';
import StackNav from './routes/HomeStackNav';
import BottomTabNav from './routes/NavigationTab';

import AppLoading from 'expo-app-loading';
import {
  useFonts,
  InriaSans_300Light,
  InriaSans_300Light_Italic,
  InriaSans_400Regular,
  InriaSans_400Regular_Italic,
  InriaSans_700Bold,
  InriaSans_700Bold_Italic,
} from '@expo-google-fonts/inria-sans';


export default function App (){

  let [fontsLoaded] = useFonts({
    InriaSans_300Light,
    InriaSans_300Light_Italic,
    InriaSans_400Regular,
    InriaSans_400Regular_Italic,
    InriaSans_700Bold,
    InriaSans_700Bold_Italic,
  });

  if(!fontsLoaded){
      return <AppLoading/>
  }else{
    return  <BottomTabNav/>
  }
}



