import React, { useState, useEffect } from 'react';
import styles from './css/style';
//import TouchableButton from '../../Button/button';
import Icon from 'react-native-vector-icons/FontAwesome';
import DropDownPicker from 'react-native-dropdown-picker';
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
    Button
} from 'react-native';
const { scrolHeight } = Dimensions.get('window').height;

const Search = () => {


    return (
        <View style={styles.mainContainer}>
            <View style={{ marginTop: 10, marginHorizontal: 12 }}>
                <TextInput
                    placeholder="Search Location"
                    style={styles.inputText}
                />
            </View>
            <View style={styles.borderLine}></View>
            <ScrollView style={{ flex: 1, height: scrolHeight }}
                contentContainerStyle={{ flexGrow: 1 }}
                automaticallyAdjustContentInsets="automatic"
            >
            <View style={styles.mainLocationBody}>
                  <View>
                      <Text style={{fontWeight:'bold'}}>Popular Cities</Text>
                  </View>
                  <TouchableOpacity style={{marginLeft:12,marginVertical:15}}>
                      <Text>Islamabad</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{marginLeft:12,marginVertical:15}}>
                      <Text>Karachi</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{marginLeft:12,marginVertical:15}}>
                      <Text>Lahore</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{marginLeft:12,marginVertical:15}}>
                      <Text>Rawalpindi</Text>
                  </TouchableOpacity>
                  <View style={{marginTop:12}}>
                      <Text style={{fontWeight:'bold'}}>Other Cities</Text>
                  </View>
                  <TouchableOpacity style={{marginLeft:12,marginVertical:15}}>
                      <Text>Abbottabad</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{marginLeft:12,marginVertical:15}}>
                      <Text>Abdul Hakim</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{marginLeft:12,marginVertical:15}}>
                      <Text>Ahmedpur East</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{marginLeft:12,marginVertical:15}}>
                      <Text>Ali Pur</Text>
                  </TouchableOpacity>
            </View>
            
           </ScrollView>
        </View>
    )
}

export default Search;