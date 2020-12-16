import React, { useState, useEffect } from 'react';
import styles from './css/style';
//import TouchableButton from '../../Button/button';
import Icon from 'react-native-vector-icons/FontAwesome';
import Swiper from 'react-native-swiper';
import Contacts from '../../Contacts';
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

    const emailIcon = <Icon name="envelope" size={18} color="#32CD32" />;
    const callIcon = <Icon name="phone" size={20} color="#fff" />;
    const messgIcon = <Icon name="sticky-note" size={18} color="#32CD32" />;
    const whatsappIcons =  <Icon name="whatsapp" size={18} color="#32CD32" />;
    
    const btnsTitls={
        email:'EMAIL',
        phone:"CALL",
        messag:'SMS'
    }

    const paramsData = route.params;
    const imgPath = paramsData.propertyDetail.image;

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
                                {imgPath}
                            </View>
                            <View style={styles.sliderImgsContainer}>
                                {imgPath}
                            </View>
                            <View style={styles.sliderImgsContainer}>
                                {imgPath}
                            </View>
                        </Swiper>
                    </View>
                    <View style={styles.priceHeading}>
                        <Text style={{ fontSize: 22, fontWeight: 'bold' }}>{paramsData.propertyDetail.price}</Text>
                    </View>
                    <View style={styles.borderLine}></View>
                    <View style={{ marginHorizontal: 12, marginVertical: 15 }}>
                        <Text
                            style={{ fontWeight: 'bold' }}
                        >One Kanal Fully Furnished Braand New Dream Palace Design By Reputed Architect
                      </Text>
                        <Text style={{ fontSize: 14, marginTop: 5 }}>
                            {paramsData.propertyDetail.location}
                        </Text>
                    </View>
                    <View style={styles.borderLine}></View>
                    <View style={styles.shortDetailContainer}>
                        <View style={styles.shortIconsTexts}>
                            <Icon name="area-chart" size={15} color="gray" />
                            <Text style={{ marginLeft: 8 }}>4,500 Sq. Ft.</Text>
                        </View>
                        <View style={styles.shortIconsTexts}>
                            <Icon name="bath" size={15} color="gray" />
                            <Text style={{ marginLeft: 8 }}>7 Baths</Text>
                        </View>
                        <View style={styles.shortIconsTexts}>
                            <Icon name="bed" size={15} color="gray" />
                            <Text style={{ marginLeft: 8 }}>6 Beds</Text>
                        </View>
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
                                <Text>46847393</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', }}>
                            <View style={styles.iconAndTitleContainer}>
                                <Icon name="home" size={18} color="gray" />
                                <Text style={{ marginLeft: 15 }}>Type</Text>
                            </View>
                            <View style={styles.textContainer}>
                                <Text>House</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', backgroundColor: '#f5f0ed' }}>
                            <View style={styles.iconAndTitleContainer}>
                                <Icon name="tags" size={18} color="gray" />
                                <Text style={{ marginLeft: 15 }}>Price</Text>
                            </View>
                            <View style={styles.textContainer}>
                                <Text>{paramsData.propertyDetail.price}</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', }}>
                            <View style={styles.iconAndTitleContainer}>
                                <Icon name="bed" size={18} color="gray" />
                                <Text style={{ marginLeft: 15 }}>Bed(s)</Text>
                            </View>
                            <View style={styles.textContainer}>
                                <Text>6</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', backgroundColor: '#f5f0ed' }}>
                            <View style={styles.iconAndTitleContainer}>
                                <Icon name="bath" size={18} color="gray" />
                                <Text style={{ marginLeft: 15 }}>Bath(s)</Text>
                            </View>
                            <View style={styles.textContainer}>
                                <Text>7</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', }}>
                            <View style={styles.iconAndTitleContainer}>
                                <Icon name="area-chart" size={18} color="gray" />
                                <Text style={{ marginLeft: 15 }}>Area</Text>
                            </View>
                            <View style={styles.textContainer}>
                                <Text>4,500 Sq. Ft.</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', backgroundColor: '#f5f0ed' }}>
                            <View style={styles.iconAndTitleContainer}>
                                <Icon name="check" size={18} color="gray" />
                                <Text style={{ marginLeft: 15 }}>Purpose</Text>
                            </View>
                            <View style={styles.textContainer}>
                                <Text>For Sale</Text>
                            </View>
                        </View>
                    </View>
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
                />
            </View>
        </>


    )
}

export default DetailProperty;