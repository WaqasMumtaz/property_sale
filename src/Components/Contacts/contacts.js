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

const Contacts = (props) => {
 console.log('Contacts Props .>', props)
    return (
        <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
            {props.email !== '0' ?
                <TouchableOpacity
                    onPress={() => props.contactLinks('email')}
                    style={styles.msgsBtns}>
                    <View style={{ marginRight: 8 }}>
                        {props.emailIcon}
                    </View>
                    <View>
                        <Text style={{ color: '#32CD32' }}>{props.btnsTitls.email}</Text>
                    </View>
                </TouchableOpacity>
                : null
            }

            <TouchableOpacity
                onPress={() => props.contactLinks('phone')}
                style={styles.phoneBtn}
            >
                <View style={{ marginRight: 8 }}>
                    {props.callIcon}
                </View>
                <View>
                    <Text style={{ color: '#fff', fontWeight: 'bold' }}>{props.btnsTitls.phone}</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => props.contactLinks('text')}
                style={styles.messagBtn}
            >
                <View style={{ marginRight: 8 }}>
                    {props.messgIcon}
                </View>
                <View>
                    <Text style={{ color: '#32CD32' }}>{props.btnsTitls.messag}</Text>
                </View>
            </TouchableOpacity>
            {props.whatsappNo !== '0' ?
                <TouchableOpacity
                    onPress={() => props.contactLinks('whatsapp')}
                    style={styles.whatsAppBtn}>
                    <View >
                        {props.whatsappIcons}
                    </View>
                </TouchableOpacity>
                :
                null
            }


        </View>
    )
}

export default Contacts;