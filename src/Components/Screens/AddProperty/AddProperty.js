import React, { useState, useEffect } from 'react';
import styles from './css/style';
//import TouchableButton from '../../Button/button';
import Icon from 'react-native-vector-icons/FontAwesome';
import DropDownPicker from 'react-native-dropdown-picker';
import TabTopNav from '../../../Navigation/TabTopNav';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();
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

const AddProperty = () => {
    const [purposeValue, setPurposeValue] = useState('sell')
    return (
        <>
            <ScrollView style={{ flex: 1, height: scrolHeight }}
                contentContainerStyle={{ flexGrow: 1 }}
                automaticallyAdjustContentInsets="automatic"
            >
                <View>
                    <View style={styles.locationContainer}>
                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <Icon name="map-marker" size={18} color="#000" />
                            <Text style={{ marginLeft: 7 }}>Location</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 15 }}>
                            <View style={{ width: '50%', flexDirection: 'row', paddingVertical: 7 }}>
                                <Text>Adding in</Text>
                                <Text style={{ marginLeft: 10, fontWeight: 'bold' }}>Islamabad</Text>
                            </View>
                            <TouchableOpacity style={{ width: '50%', flexDirection: 'row', paddingVertical: 7, justifyContent: 'flex-end' }}>
                                <Text style={{ fontWeight: 'bold', color: '#307ecc' }}>Change City</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginTop: 10 }}>
                            <TextInput
                                placeholder="Search Location"
                                style={styles.inputText}
                            />
                        </View>
                    </View>
                    <View style={styles.borderLine}></View>
                    <View style={styles.propertyTypeContainer}>
                        <View style={{ flexDirection: 'row' }}>
                            <Icon name="building" size={18} color="#000" />
                            <Text style={{ marginLeft: 7 }}>Property Types</Text>
                        </View>
                        <View>
                            {<TabTopNav />}
                        </View>
                    </View>
                    <View style={styles.borderLine}></View>
                    <View style={{ marginHorizontal: 12 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Icon name="tty" size={18} color="#000" />
                            <Text style={{ marginLeft: 7 }}>Purpose</Text>
                        </View>
                        <View style={styles.btnsContainer}>
                            <TouchableOpacity
                                onPress={() => setPurposeValue('sell')}
                                style={[purposeValue !== 'sell' ? styles.btnStyle : styles.clckdBtnStyle]}
                            >
                                <Text style={[purposeValue !== 'sell' ? styles.txt : styles.clickdText]}>Sell</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => setPurposeValue('rent')}
                                style={[purposeValue !== 'rent' ? styles.btnStyle : styles.clckdBtnStyle]}
                            >
                                <Text style={[purposeValue !== 'rent' ? styles.txt : styles.clickdText]}>Rent</Text>
                            </TouchableOpacity>
                            {/* <TouchableOpacity
                                onPress={() => setPurposeValue('wanted')}
                                style={[purposeValue !== 'wanted' ? styles.btnStyle : styles.clckdBtnStyle]}
                            >
                                <Text style={[purposeValue !== 'wanted' ? styles.txt : styles.clickdText]}>Wanted</Text>
                            </TouchableOpacity> */}
                        </View>
                    </View>
                    <View style={styles.borderLine}></View>
                    <View style={{ marginHorizontal: 12 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Icon name="yc" size={18} color="#000" />
                            <Text style={{ marginLeft: 7 }}>Property Detail</Text>
                        </View>
                        <View style={{ marginTop: 12, marginLeft: 20 }}>
                            <TextInput
                                placeholder="Property Title*"
                                style={styles.detailProprtyInput}
                            />
                        </View>
                        <View style={{ marginTop: 12, marginLeft: 20 }}>
                            <TextInput
                                placeholder="Property Description*"
                                style={styles.detailProprtyInput}
                            />
                        </View>
                    </View>
                </View>
            </ScrollView>
            <View style={{ justifyContent: 'flex-end' ,margin:12}}>
                <View style={styles.bottomBtnsContainer}>
                    {/* <TouchableOpacity
                    style={styles.uploadLateBtn}
                    >
                        <Text style={{color:"#7DE24E",fontWeight:'bold'}}>UPLOAD LATER</Text>
                    </TouchableOpacity> */}
                    <TouchableOpacity
                    style={styles.uploadNowBtn}
                    >
                        <Text style={{color:'#fff', fontWeight:'bold'}}>UPLOAD NOW</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )

}

export default AddProperty;