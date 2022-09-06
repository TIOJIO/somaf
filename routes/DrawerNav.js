import { createAppContainer } from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import Faq from '../Screems/Faq';
import StackNav from './HomeStackNav';


const RouteConfig = {
     Home : {
         screen :StackNav
     },
     Faq : {
        screen:Faq
    },

}

const  MainNavigator= createDrawerNavigator(RouteConfig);
export default createAppContainer(MainNavigator);
