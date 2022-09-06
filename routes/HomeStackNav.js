import { createStackNavigator } from 'react-navigation-stack';
 import { createAppContainer } from 'react-navigation';
import Home from '../Screems/Home';
import Portefolio from '../Screems/Portfolio';
import Photos from '../Screems/Photos';
import PhotosInfo from '../Screems/PhotosInfo';
import Views from '../Components/Views';
import Colors from '../styles/Colors';

const screens={
    Home:{
        screen:Home,
        navigationOptions:{
        title:'Home',
        }
    },
    Portefolio:{
      screen:Portefolio
    },
    Photos:{
       screen: Photos,
       navigationOptions:{
        title:'Users',
        }
    },
    PhotosInfo:{
      screen: PhotosInfo,
      navigationOptions:{
        title:'UsersInfo',
        }
   },
    Views:{
      screen: Views,
      navigationOptions:{
        title:'ShopView',
        }
   }
}

const defaultNavigationOptions = {
   defaultNavigationOptions:{
    headerStyle:{
      backgroundColor:'orange'
    },
    headerTintColor: Colors.white,
    headerTitleStyle:{
      fontWeight:'bold',
    },

   }
}

  const StackNav = createStackNavigator(screens ,defaultNavigationOptions);

 export default StackNav;