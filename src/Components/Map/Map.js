import React, { useState, useEffect } from 'react';
import styles from './css/style';
//import TouchableButton from '../../Button/button';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { RadioButton } from 'react-native-paper';
import MapView, { Marker } from 'react-native-maps';
// import { API_KEY } from 'react-native-dotenv';
import { API_KEY } from "@env"
//import Geolocation from '@react-native-community/geolocation';

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
    Platform
} from 'react-native';
const { scrolHeight } = Dimensions.get('window').height;

const iconsWithTitle = [
    {
        title: 'SCHOOLS',
        icon: <Ionicons name="school" size={20} />
    },
    {
        title: 'RESTAURANTS',
        icon: <Ionicons name="fast-food" size={20} />
    },
    {
        title: 'HOSPITALS',
        icon: <MaterialCommunityIcons name="hospital-building" size={20} />
    },
    {
        title: 'PARKS',
        icon: <Icon name="gift" size={20} />
    },
]

const MapScreen = ({ route, navigation }) => {

    const paramsData = route.params.coordsData;
    //console.log('Params DAta >>', paramsData);
    const url  = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?';
    const location = `location=${paramsData.latitude},${paramsData.longitude}`;
    const radius = '&radius=1500';
    const type = '&keyword=restaurant';
    const key = `&key=${API_KEY}`;
   // const key = '&key=AIzaSyDoZ6NODMb5ImzMV6nYMcOVC4UUcF1SBuQ';
    const restaurantSearchUrl = url + location + radius + type + key;


    const getResturantsData = async () => {
        try {
        //   let response = await fetch(
        //     `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${paramsData.longitude},${paramsData.latitude}&radius=1500&type=restaurant&keyword=restaurant&key=AIzaSyDJ7NUyLAp2BxyDJRgKzr1Sv_hov7gZdKw`
        //   );
          let response = await fetch(restaurantSearchUrl)
          let json = await response.json();
          console.log('JSON API DATA >>', json);
          //return json;
        } catch (error) {
          console.error(error);
        }
      };

   useEffect(()=>{
           console.log('API_KEY >>',API_KEY);
   },[])   

    return (

        <View style={{justifyContent:'space-between'}}>
            <View style={styles.container}>
                <MapView
                    style={styles.map}
                    showsUserLocation={true}
                    initialRegion={{
                        latitude: paramsData.latitude,
                        longitude: paramsData.longitude,
                        latitudeDelta: 0.015,
                        longitudeDelta: 0.0121,
                    }}
                    zoomEnabled={true}
                    minZoomLevel={10}

                >
                    <Marker
                        draggable
                        coordinate={{
                            latitude: paramsData.latitude,
                            longitude: paramsData.longitude
                        }}
                        // onDragEnd={(e)=>{console.log('Drag end >>', e.nativeEvent)}}
                        // title={'Foo Place'}
                        // description={"123 Foo Drive"}
                    />
                </MapView>
            </View>
            {/* <ScrollView style={{ flex: 1, height: scrolHeight }}
                contentContainerStyle={{ flexGrow: 1 }}
                automaticallyAdjustContentInsets="automatic"

            >
                {/* <View>
                    <Text>This is body</Text>
                </View> 
            </ScrollView> */}
            <View style={styles.bottomContainer}>
                {/* <View style={styles.borderLine}></View> */}
                <ScrollView
                    horizontal
                    scrollEventThrottle={1}
                    showsHorizontalScrollIndicator={false}
                    height={40}
                    style={styles.chipScrollView}
                    contentInset={{
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 20
                    }}
                    contentContainerStyle={{
                        paddingRight: Platform.OS === 'android' ? 20 : 0
                    }}
                >
                    {iconsWithTitle.map((items, index) => (
                        <TouchableOpacity
                            onPress={getResturantsData}
                            style={styles.itemsContainer}
                            key={index}
                        >
                            <View style={{ marginRight: 8 }}>{items.icon}</View>
                            <Text>{items.title}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>
        </View>
    )
}

export default MapScreen;