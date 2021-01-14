//Import React and Hook we needed
import React, { useState, useEffect } from 'react';
import styles from './css/style';
//import TouchableButton from '../../Button/button';
import Icon from 'react-native-vector-icons/FontAwesome';
import DropDownPicker from 'react-native-dropdown-picker';
import PropertyCard from '../Cards';
import { HeaderBackButton } from '@react-navigation/stack';
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
const { scrolHeight } = Dimensions.get('window').height;
const imagePath = <Image source={require('../Assets/flats-img.jpg')}
    style={{ width: "100%", height: "100%" }}
    resizeMode="stretch"
/>

const data = [
    {
        id: '1',
        icon: () => (<Icon name="filter" size={20} color="#7DE24E" />),
        title: 'Filter',
    },
    {
        id: '2',
        icon: () => (<Icon name="caret-down" size={20} color="#000" />),
        title: 'Location',

    },
    {
        id: '3',
        icon: () => (<Icon name="caret-down" size={20} color="#000" />),
        title: 'Price Range',


    },
    {
        id: '4',
        icon: () => (<Icon name="caret-down" size={20} color="#000" />),
        title: 'Bedrooms',


    },
    {
        id: '5',
        icon: () => (<Icon name="caret-down" size={20} color="#000" />),
        title: 'Bathrooms',


    },
]

const propertyData = [
    {
        id: '1',
        image: imagePath,
        verify: 'VERIFIED',
        titanium: 'TITANIUM',
        price: 'PKR 59.68 Lac',
        location: 'B-17 , Islamabad',
        title: 'Flat For Sale',
        updated: '1 hour ago',

    }
]

const Item = ({ title, Icon, id }) => (
    <TouchableOpacity style={styles.item} key={id}>
        <View style={{ marginRight: 10 }}>{<Icon />}</View>
        <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>

);

const CityPropties = ({ route, navigation }) => {
    // console.log('Params Data >>', route);
    let userSearchedData = route.params.userSearchedData;
    console.log('Params Data >>', userSearchedData);

    navigation.setOptions({
        headerLeft: (props) => (
            <HeaderBackButton
                {...props}
                onPress={() => {
                    navigation.navigate('Home')
                }}
            />
        ),
    });

    const renderItem = ({ item }) => (
        <Item title={item.title} Icon={item.icon} id={item.id} />
    );
    // const propertyDetail=()=>{
    //     navigation.navigate('Details Property')
    // }
    const PropertyItems = ({ id, price, priceUnit, cityName, areaSizeUnit, areaSizeValue, countryCode, date, email, latitude,
        location, baths, bedRooms, longitude, mobileNo, month, propertyDescription, propertyCategory, propertyType, purpose,
        status, whatsappNo, year, propertyId, propertyImages
    }) => (
        <TouchableOpacity
            id={id}
            style={styles.propertyItemContainer}
            onPress={() => navigation.navigate('Details', {
                propertyDetail: {
                    price: price,
                    priceUnit: priceUnit,
                    location: location,
                    cityName: cityName,
                    areaSizeUnit: areaSizeUnit,
                    areaSizeValue: areaSizeValue,
                    baths: baths,
                    bedRooms: bedRooms,
                    countryCode: countryCode,
                    date: date,
                    email: email,
                    latitude: latitude,
                    longitude: longitude,
                    mobileNo: mobileNo,
                    month: month,
                    propertyDescription: propertyDescription,
                    propertyCategory: propertyCategory,
                    propertyType: propertyType,
                    purpose: purpose,
                    status: status,
                    whatsappNo: whatsappNo,
                    year: year,
                    propertyId: propertyId,
                    propertyImages: propertyImages
                }
            })}
        >
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', height: 150 }}>
                <View style={{
                    // backgroundColor: 'red',
                    width: '50%'
                }}>
                    {/* {image} */}
                    <Image
                        source={{ uri: `${propertyImages[0]}` }}
                        style={{ width: "100%", height: "100%" }}
                        resizeMode="stretch"
                    />
                </View>
                <View style={{
                    // backgroundColor: 'skyblue', 
                    justifyContent: "space-between",
                    width: '47%'
                }}>
                    <View style={{
                        flexDirection: 'row',
                        // backgroundColor: 'yellow',
                        justifyContent: 'flex-end',
                    }}>
                        {/* <Text style={{
                            marginRight: 10,
                            fontSize: 8,
                            backgroundColor: '#000',
                            color: '#fff',
                            padding: 3,
                            borderRadius: 10
                        }}>{titanium}</Text> */}
                        <Text style={{
                            fontSize: 8,
                            borderWidth: 0.5,
                            borderColor: '#307ecc',
                            color: '#307ecc',
                            padding: 3,
                            borderRadius: 10
                        }}>{status}</Text>
                    </View>
                    <View >
                        <Text style={{ fontWeight: 'bold', paddingVertical: 2 }}>{`${priceUnit} ${price}`}</Text>
                        <Text style={{ fontSize: 12, paddingVertical: 2, color: 'gray' }}>{cityName}</Text>
                        <Text style={{ fontSize: 12, paddingVertical: 2, color: 'gray' }}>{`This property available for ${purpose}`}</Text>
                        {/* <Text style={{ fontSize: 12, paddingVertical: 2, color: 'gray' }}>UPDATE: {updated}</Text> */}
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 2 }}>
                        {bedRooms > 0 ?
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                <Icon name="bed" size={12} color="#000" />
                                <Text style={{ fontSize: 10, marginLeft: 3 }}>{bedRooms}</Text>
                            </View>
                            : null
                        }
                        {baths > 0 ?
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                <Icon name="bath" size={12} color="#000" />
                                <Text style={{ fontSize: 10, marginLeft: 3 }}>{baths}</Text>
                            </View>
                            : null
                        }

                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 10 }}>{`${areaSizeValue} ${areaSizeUnit}`}</Text>
                        </View>
                        <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginRight: 3 }}>
                            <Icon name="heart" size={20} color="#000" />
                        </TouchableOpacity>

                    </View>

                </View>

                {/* <View>
                    
                </View> */}
            </View>

        </TouchableOpacity>
    )



    return (
        <View style={styles.mainContainer}>
            <ScrollView style={{ flex: 1, height: scrolHeight }}
                contentContainerStyle={{ flexGrow: 1 }}
                automaticallyAdjustContentInsets="automatic"

            >
                <View style={styles.listBtnsContainer}>
                    <FlatList
                        data={data}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                        horizontal={true}
                    />

                </View>

                {
                    userSearchedData.length > 0 ?
                        <View>
                            <PropertyCard data={userSearchedData} PropertyItems={PropertyItems} />
                        </View>
                        :
                        <View style={{ flexDirection: 'column', justifyContent: 'center', alignSelf: 'center' }}>
                            <Text style={{ fontWeight: 'bold' }}>Data Not Founded Yet....</Text>
                        </View>
                }

            </ScrollView>
        </View>
    )
}

export default CityPropties;