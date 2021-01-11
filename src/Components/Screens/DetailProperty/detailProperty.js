import React, { useState, useEffect } from 'react';
import styles from './css/style';
//import TouchableButton from '../../Button/button';
import Icon from 'react-native-vector-icons/FontAwesome';
import Swiper from 'react-native-swiper';
import Contacts from '../../Contacts';
import { HeaderBackButton } from '@react-navigation/stack';
import Geolocation from '@react-native-community/geolocation';
import {
    phonecall,
    email,
    text,
    web
} from 'react-native-communications';

//import { SliderBox } from "react-native-image-slider-box";

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
const { scrolHeight } = Dimensions.get('window').height;
const imagePath = <Image source={require('../../Assets/flats-img.jpg')}
    style={{ width: "100%", height: "100%" }}
    resizeMode="stretch"
/>



const DetailProperty = ({ route, navigation }) => {
    navigation.setOptions({
        headerRight: () => (
            <View style={{ flexDirection: 'row', paddingHorizontal: 10 }}>
                <TouchableOpacity style={{ marginRight: 20 }}>
                    <Icon name="heart" size={20} color="#fff" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon name="share" size={20} color="#fff" />
                </TouchableOpacity>
            </View>

        )
    });
    const [currentLoc, setCurrentLoc] = useState({});
    const emailIcon = <Icon name="envelope" size={18} color="#32CD32" />;
    const callIcon = <Icon name="phone" size={20} color="#fff" />;
    const messgIcon = <Icon name="sticky-note" size={18} color="#32CD32" />;
    const whatsappIcons = <Icon name="whatsapp" size={18} color="#32CD32" />;

    const btnsTitls = {
        email: 'EMAIL',
        phone: "CALL",
        messag: 'SMS'
    }

    const paramsData = route.params.propertyDetail;
    //const imgPath = paramsData.propertyDetail.image;
    useEffect(() => {
        Geolocation.getCurrentPosition(info =>
            setCurrentLoc(info.coords)
        );
    }, [])

    const contactLinks = (links) => {
        if (links === 'email') {
            return email(
                [
                    `${paramsData.email}`,
                ],
                null,
                null,
                null,
                `I would like to inquire about your property .
                 Please contact me at your earliest convenience.
                `,
            )
        }
        else if (links === 'phone') {
            return phonecall(`${paramsData.mobileNo}`, true)
        }
        else if (links === 'text') {
            return text(
                `${paramsData.mobileNo}`,
                `I would like to inquire about your property.
                Please contact me at your earliest convenience.
               `
            )
        }
        else if (links === 'whatsapp') {
            web(`whatsapp://send?phone=${paramsData.whatsappNo}&text=
            I would like to inquire about your property .
            Please contact me at your earliest convenience.`)
        }
    }

    return (
        <>
            <ScrollView style={{ flex: 1, height: scrolHeight }}
                contentContainerStyle={{ flexGrow: 1 }}
                automaticallyAdjustContentInsets="automatic"

            >
                <View>
                    <View style={{ height: '30%' }}>
                        <Swiper style={styles.wrapper} showsButtons={true}
                            height={'40%'}
                            showsPagination={false}
                        >
                            <View style={styles.sliderImgsContainer}>
                                {imagePath}
                            </View>
                            <View style={styles.sliderImgsContainer}>
                                {imagePath}
                            </View>
                            <View style={styles.sliderImgsContainer}>
                                {imagePath}
                            </View>
                        </Swiper>
                    </View>
                    <View style={styles.priceHeading}>
                        <Text style={{ fontSize: 22, fontWeight: 'bold' }}>{`${paramsData.price} ${paramsData.priceUnit}`}</Text>
                    </View>
                    <View style={styles.borderLine}></View>
                    <View style={{ marginHorizontal: 12, marginVertical: 15 }}>
                        <Text style={{ fontWeight: 'bold' }}>{paramsData.propertyDescription}</Text>
                        <Text style={{ fontSize: 14, marginTop: 5 }}>
                            {`${paramsData.location} , ${paramsData.cityName}`}
                        </Text>
                    </View>
                    <View style={styles.borderLine}></View>
                    <View style={styles.shortDetailContainer}>
                        <View style={styles.shortIconsTexts}>
                            <Icon name="area-chart" size={15} color="gray" />
                            <Text style={{ marginLeft: 8 }}>{`${paramsData.areaSizeValue} ${paramsData.areaSizeUnit}`}</Text>
                        </View>
                        {paramsData.baths != undefined ?
                            <View style={styles.shortIconsTexts}>
                                <Icon name="bath" size={15} color="gray" />
                                <Text style={{ marginLeft: 8 }}>{`${paramsData.baths} Baths`}</Text>
                            </View>
                            : null
                        }
                        {paramsData.bedRooms != undefined ?
                            <View style={styles.shortIconsTexts}>
                                <Icon name="bed" size={15} color="gray" />
                                <Text style={{ marginLeft: 8 }}>{`${paramsData.bedRooms} Bedrooms`}</Text>
                            </View>
                            :
                            null
                        }

                    </View>
                    <View style={styles.borderLine}></View>
                    <Text style={{ marginHorizontal: 12, fontWeight: 'bold', marginVertical: 10 }}>Details</Text>
                    <View style={styles.detailsContainer}>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', backgroundColor: '#f5f0ed' }}>
                            <View style={styles.iconAndTitleContainer}>
                                <Icon name="search" size={18} color="gray" />
                                <Text >Property Id</Text>
                            </View>
                            <View style={styles.textContainer}>
                                <Text>{paramsData.propertyId}</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', }}>
                            <View style={styles.iconAndTitleContainer}>
                                <Icon name="home" size={18} color="gray" />
                                <Text style={{ marginLeft: 15 }}>Type</Text>
                            </View>
                            <View style={styles.textContainer}>
                                <Text>{paramsData.propertyType}</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', backgroundColor: '#f5f0ed' }}>
                            <View style={styles.iconAndTitleContainer}>
                                <Icon name="tags" size={18} color="gray" />
                                <Text style={{ marginLeft: 15 }}>Price</Text>
                            </View>
                            <View style={styles.textContainer}>
                                <Text>{`${paramsData.price} ${paramsData.priceUnit}`}</Text>
                            </View>
                        </View>
                        {paramsData.bedRooms != undefined ?
                            <View style={{ flexDirection: 'row', justifyContent: 'center', }}>
                                <View style={styles.iconAndTitleContainer}>
                                    <Icon name="bed" size={18} color="gray" />
                                    <Text style={{ marginLeft: 15 }}>Bed(s)</Text>
                                </View>
                                <View style={styles.textContainer}>
                                    <Text>{paramsData.bedRooms}</Text>
                                </View>
                            </View>
                            :
                            null
                        }
                        {paramsData.baths != undefined ?
                            <View style={{ flexDirection: 'row', justifyContent: 'center', backgroundColor: '#f5f0ed' }}>
                                <View style={styles.iconAndTitleContainer}>
                                    <Icon name="bath" size={18} color="gray" />
                                    <Text style={{ marginLeft: 15 }}>Bath(s)</Text>
                                </View>
                                <View style={styles.textContainer}>
                                    <Text>{paramsData.baths}</Text>
                                </View>
                            </View>
                            :
                            null
                        }
                        <View style={{ flexDirection: 'row', justifyContent: 'center', }}>
                            <View style={styles.iconAndTitleContainer}>
                                <Icon name="area-chart" size={18} color="gray" />
                                <Text style={{ marginLeft: 15 }}>Area</Text>
                            </View>
                            <View style={styles.textContainer}>
                                <Text>{`${paramsData.areaSizeValue} ${paramsData.areaSizeUnit}`}</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', backgroundColor: '#f5f0ed' }}>
                            <View style={styles.iconAndTitleContainer}>
                                <Icon name="check" size={18} color="gray" />
                                <Text style={{ marginLeft: 15 }}>Purpose</Text>
                            </View>
                            <View style={styles.textContainer}>
                                <Text>For {paramsData.purpose}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.borderLine}></View>
                    <TouchableOpacity style={styles.mapScreenBtn} onPress={() => navigation.navigate('Map', { coordsData: currentLoc })}>
                        <Icon name="map" size={20} />
                        <View>
                            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Location & Nearby</Text>
                            <Text style={{ fontSize: 12, color: 'gray' }}>View property location and nearby{"\n"}amenities</Text>
                        </View>
                        <Icon name="arrow-right" size={20} />
                    </TouchableOpacity>

                    {/* </View> */}
                </View>
            </ScrollView>
            <View style={styles.bottomBtns}>
                <Contacts
                    emailIcon={emailIcon}
                    callIcon={callIcon}
                    messgIcon={messgIcon}
                    whatsappIcons={whatsappIcons}
                    btnsTitls={btnsTitls}
                    contactLinks={contactLinks}
                    whatsappNo={paramsData.whatsappNo}
                    email={paramsData.email}
                />
            </View>
        </>


    )
}

export default DetailProperty;