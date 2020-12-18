import React, { useState, useEffect } from 'react';
import styles from './css/style';
//import TouchableButton from '../../Button/button';
import Icon from 'react-native-vector-icons/FontAwesome';
import { RadioButton } from 'react-native-paper';
import MapView , { Marker } from 'react-native-maps';
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

const MapScreen = () => {
    const markers = [
        {
          latitude: 45.65,
          longitude: -78.90,
          title: 'Foo Place',
          subtitle: '1234 Foo Drive'
        }
      ];

    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: 45.65,
                    longitude: -78.90,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                }}
               
            >
             <Marker
             coordinate={{
                latitude: 45.65,
                longitude: -78.90}}
                title= {'Foo Place'}
                description={"123 Foo Drive"}
             />
            </MapView>
        </View>
    )
}

export default MapScreen;