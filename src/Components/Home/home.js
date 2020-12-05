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
} from 'react-native';
// import Loader from '../../Loader';

const Home = ()=>{
    return(
        <View style={styles.mainContainer}>
          <Text>This is Main Page</Text>
        </View>
    )

}

export default Home;
