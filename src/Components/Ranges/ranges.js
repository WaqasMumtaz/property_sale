//Import React and Hook we needed
import React, { useState, useEffect } from 'react';
import styles from './css/style';
//import TouchableButton from '../../Button/button';
import Icon from 'react-native-vector-icons/FontAwesome';
import DropDownPicker from 'react-native-dropdown-picker';
import SliderRange from '../Slider/slider';
//Import all required component
import {
    StyleSheet,
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
    Animated,
  } from 'react-native';

  
  const SelectRange = (props)=>{   
    //   const PriceIcon = props.PriceIcon;  
    return(
        <View style={styles.mainContainer}>
           {/* <Text>Hello Range Component</Text> */}
           <View style={{flexDirection:'row',justifyContent:'space-between'}}>
              <View style={{width:'30%', flexDirection:'row',
                  justifyContent:'space-between', paddingVertical:10}}>
                  {/* <Icon name="calculator" size={15} color="#D3D3D3"/> */}
                  {props.setIcon}
              <Text>{props.title}</Text>
              </View>
              <View style={{width:'30%'}}>
                <TouchableOpacity 
                style={{flexDirection:'row',justifyContent:'space-between',paddingVertical:10}}
                >
                  <Text>{props.selectValue}</Text>
                  <Icon name="caret-down" size={18} color="#000"/>
                </TouchableOpacity>
              </View>
           </View>
           <View >
               <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                   <TextInput
                     placeholder="0"
                     style={{height:40,backgroundColor:'#ebe9e6',width:'30%',borderRadius:10}}
                   />
                   <Text style={{paddingVertical:10}}>TO</Text>
                   <TextInput
                     placeholder="any"
                     style={{height:40,backgroundColor:'#ebe9e6',width:'30%',borderRadius:10}}
                   />
               </View>
           </View>
          {/* <View>
              <SliderRange/>
          </View> */}
        </View>
    )
  }
  export default SelectRange;