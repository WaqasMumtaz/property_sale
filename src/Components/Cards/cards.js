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
     console.log('Props Data >>', props.data);
    const PropertyItems = props.PropertyItems;
    const renderItem = ({ item }) =>(
        //    console.log('items data >>', item)
                <PropertyItems
                item={item}
                price={item.priceValue}
                priceUnit={item.priceUnit}
                location={item.locationArea}
                cityName={item.cityName}
                areaSizeUnit={item.areaSizeUnit}
                areaSizeValue={item.areaSizeValue}
                baths={item.baths}
                bedRooms={item.bedRooms}
                countryCode={item.countryCode}
                date={item.date}
                email={item.email}
                latitude={item.latitude}
                longitude={item.longitude}
                mobileNo={item.mobileNo}
                month={item.month}
                propertyDescription={item.propertyDescription}
                propertyCategory={item.propertyTypeData.nameOfCategoryUserSelected}
                propertyType={item.propertyTypeData.nameOfUserProperty}
                purpose={item.purposeValue}
                status={item.status}
                whatsappNo={item.whatsappNo}
                year={item.year}
                propertyId={item._id}
                propertyImages={item.propertyImages !== undefined ? item.propertyImages : []}
                />
            )

    return (
        <View style={{ flex: 1 }}>
            <View>
                <FlatList
                    data={props.data}
                    renderItem={renderItem}
                    keyExtractor={item => item._id}
                // horizontal={true}
                />

            </View>
        </View>
    )
}

export default PropertyCard;