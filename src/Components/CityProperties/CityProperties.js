//Import React and Hook we needed
import React, { useState, useEffect } from 'react';
import styles from './css/style';
//import TouchableButton from '../../Button/button';
import Icon from 'react-native-vector-icons/FontAwesome';
import DropDownPicker from 'react-native-dropdown-picker';
import PropertyCard from '../Cards';
import { HeaderBackButton } from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';
import { RadioButton } from 'react-native-paper';

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
    Button,
    BackHandler,
    Modal,
    TouchableHighlight
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
        title: 'Baths',


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



const CityPropties = ({ route, navigation }) => {
    // console.log('Params Data >>', route);
    let userSearchedData = route.params.userSearchedData;
    //console.log('Params Data >>', route.params.userSelectType);
    let userSelectType = route.params.userSelectType;
    //const { navigate } = navigation;

    navigation.setOptions({
        headerLeft: (props) => (
            <HeaderBackButton
                {...props}
                onPress={() => {
                    navigation.popToTop();
                }}
            />
        ),
    });

    const [modalVisible, setModalVisible] = useState(false);
    const [filterTitle, setFilterTitle] = useState('');
    const [selectUserLocation, setSelectUserLocation] = useState('');
    const [selectUserPrice, setSelectUserPrice] = useState(0);
    const [selectUserPriceTo, setSelectUserPriceTo] = useState(0);
    const [selectUserBedRooms, setSelectUserBedRooms] = useState(0);
    const [selectUserBaths, setSelectUserBaths] = useState(0);


    const filterFunc = (data) => {
        //console.log('Data clicked >>', data);
        if (data === 'Filter') {
            navigation.navigate('FILTRS');
        }
        else if (data === 'Location') {
            setModalVisible(true);
            setFilterTitle(data);

        }
        else if (data === 'Price Range') {
            setModalVisible(true);
            setFilterTitle(data);
        }
        else if (data === 'Bedrooms') {
            setModalVisible(true);
            setFilterTitle(data);
        }
        else if (data === 'Baths') {
            setModalVisible(true);
            setFilterTitle(data);
        }
    }

    const Item = ({ title, Icon, id }) => (
        <TouchableOpacity
            onPress={() => filterFunc(title)}
            style={styles.item}
            key={id}
        >
            <View style={{ marginRight: 10 }}>{<Icon />}</View>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>

    );

    const renderItem = ({ item }) => (
        <Item title={item.title} Icon={item.icon} id={item.id} />
    );

    const saveViewData = (item) => {
        if (userSelectType !== undefined && userSelectType === 'buy') {
            let arr = [];
            AsyncStorage.getItem("viewBuyerProperty").then(value => {
                if (!value) {
                    arr.push(item)
                    AsyncStorage.setItem("viewBuyerProperty", JSON.stringify(arr))
                }
                else {
                    var data = JSON.parse(value)
                    var filteredData = data.filter((items) => items._id === item._id)
                    if (filteredData.length === 0) {
                        data.push(item)
                    }
                    AsyncStorage.setItem('viewBuyerProperty', JSON.stringify(data));
                    // console.log('Total Data >>', data);
                }
            })
        }
        else if (userSelectType !== undefined && userSelectType === 'rent') {
            let arr = [];
            AsyncStorage.getItem("viewRentProperty").then(value => {
                if (!value) {
                    arr.push(item)
                    AsyncStorage.setItem("viewRentProperty", JSON.stringify(arr))
                }
                else {
                    var data = JSON.parse(value)
                    var filteredData = data.filter((items) => items._id === item._id)
                    if (filteredData.length === 0) {
                        data.push(item)
                    }
                    AsyncStorage.setItem('viewRentProperty', JSON.stringify(data));
                    // console.log('Total Data >>', data);
                }
            })
        }
    }

    const PropertyItems = ({ item, id, price, priceUnit, cityName, areaSizeUnit, areaSizeValue, countryCode, date, email, latitude,
        location, baths, bedRooms, longitude, mobileNo, month, propertyDescription, propertyCategory, propertyType, purpose,
        status, whatsappNo, year, propertyId, propertyImages
    }) => (
        <TouchableOpacity
            id={id}
            style={styles.propertyItemContainer}
            onPress={() => {
                navigation.navigate('Details', {
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
                }), saveViewData(item)
            }}
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

    function handleBackButtonClick() {
        navigation.popToTop();
        return true;
    }

    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
        return () => {
            BackHandler.removeEventListener('hardwareBackPress', handleBackButtonClick);
            setSelectUserLocation('');
            setSelectUserBaths(0);
            setSelectUserBedRooms(0);
            setSelectUserPrice(0);
            setSelectUserPriceTo(0);
        };
    
    }, [])


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
                    selectUserLocation !== '' ?
                        <View >
                            <Text style={styles.itemsFilter}>{selectUserLocation}</Text>
                        </View>
                        :
                        null
                }
                {
                    selectUserPrice !== 0 ?
                        <View>
                            <Text style={styles.itemsFilter}>{`${selectUserPrice} - ${selectUserPriceTo}`}</Text>
                        </View>
                        :
                        null
                }
                {
                    selectUserBedRooms !== 0 ?
                        <View>
                            <Text style={styles.itemsFilter}>{selectUserBedRooms}</Text>
                        </View>
                        :
                        null
                }
                {
                    selectUserBaths !== 0 ?
                        <View>
                            <Text style={styles.itemsFilter}>{selectUserBaths}</Text>
                        </View>
                        :
                        null
                }


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
                

                <View style={styles.modalContainer}>
                    <Modal
                        animationType="fade"
                        transparent={true}
                        visible={modalVisible}
                    // onRequestClose={() => {
                    //     setModalVisible(!modalVisible)
                    // }}

                    >
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <View style={styles.headingWithBtn}>
                                    <Text style={styles.modalText}>{filterTitle}</Text>
                                    <TouchableHighlight
                                        style={styles.btnContainer}
                                        onPress={() => {
                                            setModalVisible(!modalVisible);
                                        }}
                                    >
                                        <Text style={styles.textStyle}>Close</Text>
                                    </TouchableHighlight>
                                </View>
                                <ScrollView style={styles.scrolView}
                                    contentContainerStyle={{ flexGrow: 1 }}
                                    automaticallyAdjustContentInsets="automatic"

                                >
                                    {
                                        filterTitle === 'Location' ?
                                            <View style={styles.citiesStyle}>
                                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 5 }}>
                                                    <Text>Karachi</Text>
                                                    <RadioButton
                                                        value={selectUserLocation}
                                                        status={selectUserLocation === 'Karachi' ? 'checked' : 'unchecked'}
                                                        onPress={() => setSelectUserLocation('Karachi')}
                                                        color='#7DE24E'
                                                    />
                                                </View>
                                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 5 }}>
                                                    <Text>Lahore</Text>
                                                    <RadioButton
                                                        value={selectUserLocation}
                                                        status={selectUserLocation === 'Lahore' ? 'checked' : 'unchecked'}
                                                        onPress={() => setSelectUserLocation('Lahore')}
                                                        color='#7DE24E'
                                                    />
                                                </View>
                                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 5 }}>
                                                    <Text>Islamabad</Text>
                                                    <RadioButton
                                                        value={selectUserLocation}
                                                        status={selectUserLocation === 'Islamabad' ? 'checked' : 'unchecked'}
                                                        onPress={() => setSelectUserLocation('Islamabad')}
                                                        color='#7DE24E'
                                                    />
                                                </View>
                                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 5 }}>
                                                    <Text>Rawalpindi</Text>
                                                    <RadioButton
                                                        value={selectUserLocation}
                                                        status={selectUserLocation === 'Rawalpindi' ? 'checked' : 'unchecked'}
                                                        onPress={() => setSelectUserLocation('Rawalpindi')}
                                                        color='#7DE24E'
                                                    />
                                                </View>
                                            </View>
                                            : filterTitle === 'Price Range' ?
                                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 15 }}>
                                                    <TextInput
                                                        placeholder="0"
                                                        style={{ height: 40, backgroundColor: '#ebe9e6', width: '30%', borderRadius: 10 }}
                                                        onChangeText={(value) => setSelectUserPrice(value)}
                                                        keyboardType="numeric"
                                                        value={selectUserPrice}
                                                    />
                                                    <Text style={{ paddingVertical: 10 }}>TO</Text>
                                                    <TextInput
                                                        placeholder="any"
                                                        style={{ height: 40, backgroundColor: '#ebe9e6', width: '30%', borderRadius: 10 }}
                                                        onChangeText={(value) => setSelectUserPriceTo(value)}
                                                        keyboardType="numeric"
                                                        value={selectUserPriceTo}
                                                    />
                                                </View>
                                                : filterTitle === 'Bedrooms' ?
                                                    <View style={{ marginTop: 15 }}>
                                                        <TextInput
                                                            placeholder="0"
                                                            style={{ height: 40, backgroundColor: '#ebe9e6', flex: 1, borderRadius: 10 }}
                                                            onChangeText={(value) => setSelectUserBedRooms(value)}
                                                            keyboardType="numeric"
                                                            value={selectUserBedRooms}
                                                        />
                                                    </View>
                                                    : filterTitle === 'Baths' ?
                                                        <View style={{ marginTop: 15 }}>
                                                            <TextInput
                                                                placeholder="0"
                                                                style={{ height: 40, backgroundColor: '#ebe9e6', flex: 1, borderRadius: 10 }}
                                                                onChangeText={(value) => setSelectUserBaths(value)}
                                                                keyboardType="numeric"
                                                                value={selectUserBaths}
                                                            />
                                                        </View>
                                                        :
                                                        null
                                    }

                                </ScrollView>
                            </View>
                        </View>
                    </Modal>
                </View>

            </ScrollView>
        </View>
    )
}

export default CityPropties;