import React, { useState, useEffect } from 'react';
import styles from './css/style';
import Icon from 'react-native-vector-icons/FontAwesome';
;

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

const Contacts =(props)=>{

    return(
        <View style={{flexDirection:'row',justifyContent:"space-between"}}>
            <TouchableOpacity style={styles.msgsBtns}>
                <View style={{marginRight:8}}>
                    {props.emailIcon}
                </View>
                <View>
                    <Text style={{color:'#7DE24E'}}>{props.btnsTitls.email}</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.phoneBtn}>
                <View style={{marginRight:8}}>
                   {props.callIcon}
                </View>
                <View>
                    <Text style={{color:'#fff', fontWeight:'bold'}}>{props.btnsTitls.phone}</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.messagBtn}>
                <View style={{marginRight:8}}>
                   {props.messgIcon}
                </View>
                <View>
                    <Text style={{color:'#7DE24E'}}>{props.btnsTitls.messag}</Text>
                </View>
            </TouchableOpacity>
             <TouchableOpacity style={styles.whatsAppBtn}>
                <View >
                 {props.whatsappIcons}
                </View>
            </TouchableOpacity>
            
        </View>
    )
}

export default Contacts;