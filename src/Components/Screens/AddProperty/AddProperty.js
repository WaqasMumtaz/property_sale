import React, { useState, useEffect } from 'react';
import styles from './css/style';
//import TouchableButton from '../../Button/button';
import Icon from 'react-native-vector-icons/FontAwesome';
import DropDownPicker from 'react-native-dropdown-picker';
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


const HomeScreen = () => {
    const [userSelectProperty, setUserSelectProperty] = useState('all');
    return (

        <View style={{ paddingVertical: 15, }}>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <TouchableOpacity
                    onPress={() => setUserSelectProperty('all')}
                    style={[userSelectProperty !== 'all' ? styles.iconBtn : styles.iconBtnSelectd]}
                >
                    <Icon name="clone" size={20} style={[userSelectProperty !== 'all' ? styles.iconStyle : styles.selctdIcon]} />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => setUserSelectProperty('home')}
                    style={[userSelectProperty !== 'home' ? styles.iconBtn : styles.iconBtnSelectd]}
                >
                    <Icon name="home" size={20} style={[userSelectProperty !== 'home' ? styles.iconStyle : styles.selctdIcon]} />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => setUserSelectProperty('building')}
                    style={[userSelectProperty !== 'building' ? styles.iconBtn : styles.iconBtnSelectd]}
                >
                    <Icon name="building" size={20} style={[userSelectProperty !== 'building' ? styles.iconStyle : styles.selctdIcon]} />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => setUserSelectProperty('uperPortion')}
                    style={[userSelectProperty !== 'uperPortion' ? styles.iconBtn : styles.iconBtnSelectd]}
                >
                    <Icon name="university" size={20} style={[userSelectProperty !== 'uperPortion' ? styles.iconStyle : styles.selctdIcon]} />
                </TouchableOpacity>
            </View>

            <View style={{
                flexDirection: 'row',
                marginLeft: 12,
                justifyContent: 'space-between', alignItems: 'center'
            }}>
                <TouchableOpacity
                    onPress={() => setUserSelectProperty('all')}
                // style={{backgroundColor:'red',alignItems:'center',flexDirection:'row'}}
                >
                    <Text style={[userSelectProperty !== 'all' ? styles.textStyle : styles.slctTextStyle]}>All</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => setUserSelectProperty('home')}
                >
                    <Text style={[userSelectProperty !== 'home' ? styles.textStyle : styles.slctTextStyle]}>Houses</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => setUserSelectProperty('building')}
                >
                    <Text style={[userSelectProperty !== 'building' ? styles.textStyle : styles.slctTextStyle]}>Flats</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => setUserSelectProperty('uperPortion')}
                >
                    <Text style={[userSelectProperty !== 'uperPortion' ? styles.textStyle : styles.slctTextStyle]}>Uper{"\n"}Portion</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const PlotsScreen = () => {
    const [userSelectProperty, setUserSelectProperty] = useState('all');
    return (
        <View style={{ paddingVertical: 15, }}>
            <View style={{ paddingVertical: 15, }}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    //  marginHorizontal:10
                }}>
                    <TouchableOpacity
                        onPress={() => setUserSelectProperty('all')}
                        style={[userSelectProperty !== 'all' ? styles.iconBtn : styles.iconBtnSelectd]}
                    >
                        <Icon name="clone" size={20} style={[userSelectProperty !== 'all' ?
                            styles.iconStyle : styles.selctdIcon]} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => setUserSelectProperty('residential')}
                        style={[userSelectProperty !== 'residential' ? styles.iconBtn : styles.iconBtnSelectd]}
                    >
                        <Icon name="home" size={20} style={[userSelectProperty !== 'residential' ? styles.iconStyle : styles.selctdIcon]} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => setUserSelectProperty('comercialPlot')}
                        style={[userSelectProperty !== 'comercialPlot' ? styles.iconBtn : styles.iconBtnSelectd]}
                    >
                        <Icon name="building" size={20} style={[userSelectProperty !== 'comercialPlot' ? styles.iconStyle : styles.selctdIcon]} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => setUserSelectProperty('agricultural')}
                        style={[userSelectProperty !== 'agricultural' ? styles.iconBtn : styles.iconBtnSelectd]}
                    >
                        <Icon name="university" size={20} style={[userSelectProperty !== 'agricultural' ? styles.iconStyle : styles.selctdIcon]} />
                    </TouchableOpacity>
                </View>

                <View style={{
                    flexDirection: 'row',
                    marginTop: 7,
                    justifyContent: 'space-between', alignItems: 'center',
                }}>
                    <TouchableOpacity
                        onPress={() => setUserSelectProperty('all')}
                    // style={{alignItems:'center',justifyContent:'center'}}
                    >
                        <Text style={[userSelectProperty !== 'all' ? styles.textStyle : styles.slctTextStyle]}>All</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => setUserSelectProperty('residential')}
                    // style={{m, backgroundColor:'red',}}
                    >
                        <Text style={[userSelectProperty !== 'residential' ? styles.textStyle : styles.slctTextStyle]}>Residential</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => setUserSelectProperty('comercialPlot')}
                    >
                        <Text style={[userSelectProperty !== 'comercialPlot' ? styles.textStyle : styles.slctTextStyle]}>Commercial</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => setUserSelectProperty('agricultural')}
                    >
                        <Text style={[userSelectProperty !== 'agricultural' ? styles.textStyle : styles.slctTextStyle]}>Agricultural </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const CommercialScreen = () => {
    const [userSelectProperty, setUserSelectProperty] = useState('all');
    return (
        <View style={{ paddingVertical: 15, }}>
            <View style={{ paddingVertical: 15, }}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <TouchableOpacity
                        onPress={() => setUserSelectProperty('all')}
                        style={[userSelectProperty !== 'all' ? styles.iconBtn : styles.iconBtnSelectd]}
                    >
                        <Icon name="clone" size={20} style={[userSelectProperty !== 'all' ? styles.iconStyle : styles.selctdIcon]} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => setUserSelectProperty('office')}
                        style={[userSelectProperty !== 'office' ? styles.iconBtn : styles.iconBtnSelectd]}
                    >
                        <Icon name="home" size={20} style={[userSelectProperty !== 'office' ? styles.iconStyle : styles.selctdIcon]} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => setUserSelectProperty('shop')}
                        style={[userSelectProperty !== 'shop' ? styles.iconBtn : styles.iconBtnSelectd]}
                    >
                        <Icon name="building" size={20} style={[userSelectProperty !== 'shop' ? styles.iconStyle : styles.selctdIcon]} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => setUserSelectProperty('warehouse')}
                        style={[userSelectProperty !== 'warehouse' ? styles.iconBtn : styles.iconBtnSelectd]}
                    >
                        <Icon name="university" size={20} style={[userSelectProperty !== 'warehouse' ? styles.iconStyle : styles.selctdIcon]} />
                    </TouchableOpacity>
                </View>

                <View style={{
                    flexDirection: 'row',
                    marginLeft: 12,
                    justifyContent: 'space-between', alignItems: 'center'
                }}>
                    <TouchableOpacity
                        onPress={() => setUserSelectProperty('all')}
                    // style={{alignItems:'center',justifyContent:'center'}}
                    >
                        <Text style={[userSelectProperty !== 'all' ? styles.textStyle : styles.slctTextStyle]}>All</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => setUserSelectProperty('office')}
                    >
                        <Text style={[userSelectProperty !== 'office' ? styles.textStyle : styles.slctTextStyle]}>Office</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => setUserSelectProperty('shop')}
                    >
                        <Text style={[userSelectProperty !== 'shop' ? styles.textStyle : styles.slctTextStyle]}>Shop</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => setUserSelectProperty('warehouse')}
                    >
                        <Text style={[userSelectProperty !== 'warehouse' ? styles.textStyle : styles.slctTextStyle]}>Warehouse</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}


const MyTabs = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: '#32CD32',
                inactiveTintColor: 'gray',

            }}
        >
            <Tab.Screen name="Home" component={HomeScreen}
                options={{
                    tabBarIcon: () => (
                        <Icon name="Home" size="20" />
                    )
                }}
            />
            <Tab.Screen name="Plots" component={PlotsScreen}
                options={{
                    tabBarLabel: 'Plots',
                    tabBarIcon: () => (
                        <Icon name="arrow-circle-right" size="20" />
                    )
                }}
            />
            <Tab.Screen name="Commercial" component={CommercialScreen}
                options={{
                    tabBarLabel: 'Commercial',
                    tabBarIcon: () => (
                        <Icon name="arrow-circle-right" size="20" />
                    )
                }}
            />
        </Tab.Navigator>
    );
}



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
                            {<MyTabs />}
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
                            <TouchableOpacity
                                onPress={() => setPurposeValue('wanted')}
                                style={[purposeValue !== 'wanted' ? styles.btnStyle : styles.clckdBtnStyle]}
                            >
                                <Text style={[purposeValue !== 'wanted' ? styles.txt : styles.clickdText]}>Wanted</Text>
                            </TouchableOpacity>
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
                    <TouchableOpacity
                    style={styles.uploadLateBtn}
                    >
                        <Text style={{color:"#7DE24E",fontWeight:'bold'}}>UPLOAD LATER</Text>
                    </TouchableOpacity>
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