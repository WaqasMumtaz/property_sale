//Import React and Hook we needed
import React, { useState } from 'react';
import styles from './css/style';

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
  ImageBackground
} from 'react-native';
// import Loader from '../../Loader';
const image = { uri: "https://reactjs.org/logo-og.png" };

const Home = () => {
  return (
    // <ScrollView style={styles.scrollView}> 
    <View style={styles.mainContainer}>
        <View style={styles.toggleContainer}>
         {/* <ImageBackground source={require('../Images/sale.png')} 
            style={styles.imageStyle}
            resizeMode='stretch'
            > */}
           <View style={styles.toggleButton}>
             <TouchableOpacity
             style={styles.buyBtn}
             >
               <Text style={styles.buyTextStyle}>Buy</Text>
             </TouchableOpacity>
             <TouchableOpacity 
             style={styles.rentBtn}
             >
               <Text style={styles.rentTextStyle}>Rent</Text>
             </TouchableOpacity>
           </View>
         {/* </ImageBackground> */}
         {/* <Text>Hello World</Text> */}
        </View>


    </View>
    //  </ScrollView> 

  )

}

export default Home;
