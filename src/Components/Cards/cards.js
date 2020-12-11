import React, { useState, useEffect } from 'react';
// import styles from './css/style';
//import TouchableButton from '../../Button/button';
import Icon from 'react-native-vector-icons/FontAwesome';
import DropDownPicker from 'react-native-dropdown-picker';
//import SliderRange from '../Slider/slider';
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
    Button
} from 'react-native';


const PropertyCard = (props) => {
    // console.log('Props Data >>', props.data);
    const PropertyItems = props.PropertyItems;
    const renderItem = ({ item }) => (
        <PropertyItems
            image={item.image}
            title={item.title}
            verify={item.verify}
            location={item.location}
            titanium={item.titanium}
            updated={item.updated}
            price={item.price}
        />
    );

    return (
        <View style={{ flex: 1 }}>
            <View>
                <FlatList
                    data={props.data}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                // horizontal={true}
                />

            </View>
        </View>
    )
}

export default PropertyCard;