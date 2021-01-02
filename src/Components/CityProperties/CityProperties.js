//Import React and Hook we needed
import React, { useState, useEffect } from 'react';
import styles from './css/style';
//import TouchableButton from '../../Button/button';
import Icon from 'react-native-vector-icons/FontAwesome';
import DropDownPicker from 'react-native-dropdown-picker';
import PropertyCard from '../Cards';
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
    const userSearchedData = route.params.userSearchedData;
    console.log('Params Data >>', userSearchedData);
    const renderItem = ({ item }) => (
        <Item title={item.title} Icon={item.icon} id={item.id} />
    );
    // const propertyDetail=()=>{
    //     navigation.navigate('Details Property')
    // }
    const PropertyItems = ({ id, title, verify, titanium, price, location, areaSize, baths, bedRooms }) => (
        <TouchableOpacity
            id={id}
            style={styles.propertyItemContainer}
            onPress={() => navigation.navigate('Details', {
                propertyDetail: {
                    //image:image,
                    //titanium,
                    verify: verify,
                    price: price,
                    title: title,
                    // updated:updated,
                    location: location

                }
            })}
        >
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', height: 150 }}>
                <View style={{
                    // backgroundColor: 'red',
                    width: '50%'
                }}>
                    {/* {image} */}
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
                        }}>{verify}</Text>
                    </View>
                    <View >
                        <Text style={{ fontWeight: 'bold', paddingVertical: 2 }}>{price}</Text>
                        <Text style={{ fontSize: 12, paddingVertical: 2, color: 'gray' }}>{location}</Text>
                        <Text style={{ fontSize: 12, paddingVertical: 2, color: 'gray' }}>{title}</Text>
                        {/* <Text style={{ fontSize: 12, paddingVertical: 2, color: 'gray' }}>UPDATE: {updated}</Text> */}
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 2 }}>
                        {bedRooms ?
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                <Icon name="bed" size={12} color="#000" />
                                <Text style={{ fontSize: 10, marginLeft: 3 }}>1</Text>
                            </View>
                            : null
                        }
                        {baths ?
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                <Icon name="bath" size={12} color="#000" />
                                <Text style={{ fontSize: 10, marginLeft: 3 }}>{baths}</Text>
                            </View>
                            : null
                        }

                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 10 }}>{areaSize}</Text>
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
                <View>
                    <PropertyCard data={userSearchedData} PropertyItems={PropertyItems} />
                </View>
            </ScrollView>
        </View>
    )
}

export default CityPropties;