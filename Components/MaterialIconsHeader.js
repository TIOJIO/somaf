import React from 'react';
import {HeaderButton} from 'react-navigation-header-buttons';
import {MaterialIcons} from '@expo/vector-icons';
import Colors from '../styles/Colors';


const MaterialIconsHeader = (props) => {
  return (
    <HeaderButton
       IconComponent={MaterialIcons}
       iconSize={23}
      {...props}
      color={Colors.white}
    />
    
  )
}

export default MaterialIconsHeader;
