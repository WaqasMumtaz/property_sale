import React, { useState, useEffect } from 'react';
import styles from './css/style';
//import TouchableButton from '../../Button/button';
import Icon from 'react-native-vector-icons/FontAwesome';
import { RadioButton } from 'react-native-paper';
//import TabTopNav from '../../../Navigation/TabTopNav';
//import SelectRange from '../../Ranges';

//Import all required component
import {
  TextInput,
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  Keyboard,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Dimensions,
  FlatList,
} from 'react-native';
const { scrolHeight } = Dimensions.get('window').height;

const MapScreen =()=>{

    return(
        <View>
            <Text>This Map Screen </Text>
        </View>
    )
}

export default MapScreen;