import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import {MaterialIcons} from '@expo/vector-icons';
import Faq from '../Screems/Faq';
import Photos from '../Screems/Photos';
import Views from '../Components/Views';
import StackNav from './HomeStackNav';
import Colors from '../styles/Colors';


const RouteConfig = {
    Home : {
        screen:StackNav,
        navigationOptions:{
            tabBarIcon: (tabInfo) => <MaterialIcons name='home' size={24} color={tabInfo.tintColor}/>,
            title:'Home'
        }
    },
     Photos : {
        screen:Photos,
        navigationOptions:{
            tabBarIcon: (tabInfo) => <MaterialIcons name='mail' size={24} color={tabInfo.tintColor}/>,
            title:'Photos'
        }
    },
    Shopapp : {
        screen:Views,
        navigationOptions:{
            tabBarIcon: (tabInfo) => <MaterialIcons name='perm-device-information' size={24} color={tabInfo.tintColor}/>,
            title:'Produit'
        }
    }
}

const TabNavigatorConfig = {
    tabBarOptions:{
        inactiveTintColor:Colors.darkGrey,
        activeTintColor:Colors.header
    }
}


const  BottomTabNav= createBottomTabNavigator(RouteConfig ,TabNavigatorConfig);
export default createAppContainer (BottomTabNav);
