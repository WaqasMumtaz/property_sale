import React, { useState, useEffect, useRef } from 'react';
import styles from './css/style';
//import TouchableButton from '../../Button/button';
import Icon from 'react-native-vector-icons/FontAwesome';
//import { Dropdown } from 'react-native-material-dropdown';
import DropDownPicker from 'react-native-dropdown-picker';
import TabTopNav from '../../../Navigation/TabTopNav';
import PhoneInput from 'react-native-phone-input'

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
    Picker
} from 'react-native';
const { scrolHeight } = Dimensions.get('window').height;



const AddProperty = () => {

    const areaSizeData = [
        { label: 'Sq. Ft.', value: 'Sq. Ft.' },
        { label: 'Sq. M.', value: 'Sq. M.' },
        { label: 'Sq. Yd.', value: 'Sq. Yd.' },
        { label: 'Marla', value: 'Marla' },
        { label: 'Kanal', value: 'Kanal' },

    ]
    const priceData = [
        { label: 'PKR', value: 'PKR' },
        { label: 'US', value: 'US' },
    ]
    const [purposeValue, setPurposeValue] = useState('sell');
    const [areaSizeValue, setAreaSizeValue] = useState('Sq. Ft.');
    const [priceValue, setPriceValue] = useState('PKR');
    const [countryData, setCountryData] = useState('');
    const [mobileNo, setMobileNo] = useState(0);
    const [whatsappNo, setWhatsappNo] = useState(0);
    const [validMobile, setValidMobile] = useState(false);
    const [countryCode, setCountryCode] = useState(0);
    const [startNumber, setStartNumber] = useState(false);
    const [startWhatsappNumber , setStartWhatsappNumber]=useState(false);
    const phone = useRef(null);
    const onPressFlag = () => {
        myCountryPicker.open()
    }
    useEffect(() => {
        console.log('Country Code >>', countryCode, 'Valid', validMobile);
    })


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
                    <View style={styles.borderLine}></View>
                    <View style={{ marginHorizontal: 12, flexDirection: "row", }}>
                        <Icon name="map-marker" size={20} />
                        <View style={styles.latitudsContainer}>
                            <Text style={{ marginLeft: 10 }}>Latitude</Text>
                            <TextInput
                                placeholder="0"
                                style={styles.latitudeInputs}
                            />
                        </View>
                        <View style={styles.latitudsContainer}>
                            <Text style={{ marginLeft: 10 }}>Longitude</Text>
                            <TextInput
                                placeholder="0"
                                style={styles.latitudeInputs}
                            />
                        </View>

                    </View>
                    <View style={styles.borderLine}></View>
                    <View style={{ marginHorizontal: 12, }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Icon name="home" size={20} />
                            <Text style={{ marginLeft: 10 }}>Area Size</Text>
                        </View>
                        <View style={styles.areaSizeContainer}>
                            <TextInput
                                placeholder="0"
                                style={styles.areaSizeInputsStyle}
                            />
                            <DropDownPicker
                                defaultValue={areaSizeValue}
                                items={areaSizeData}
                                containerStyle={{ height: 40, width: '45%', borderRadius: 12 }}
                                style={{ borderRadius: 12, }}

                                onChangeItem={(e) => setAreaSizeValue(e.value)}
                            />
                        </View>

                    </View>
                    <View style={styles.borderLine}></View>
                    <View style={{ marginHorizontal: 12, }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Icon name="tag" size={20} />
                            <Text style={{ marginLeft: 10 }}>Price</Text>
                        </View>
                        <View style={styles.areaSizeContainer}>
                            <TextInput
                                placeholder="0"
                                style={styles.areaSizeInputsStyle}
                            />
                            <DropDownPicker
                                defaultValue={priceValue}
                                items={priceData}
                                containerStyle={{ height: 40, width: '45%', borderRadius: 12 }}
                                onChangeItem={(e) => setPriceValue(e.value)}
                            />
                        </View>

                    </View>
                    <View style={styles.borderLine}></View>
                    <View style={{ marginHorizontal: 12, }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Icon name="bed" size={20} />
                            <Text style={{ marginLeft: 10 }}>Bedrooms</Text>
                        </View>
                        <View >
                            <TextInput
                                placeholder="Type number of bedrooms"
                                style={styles.bedroomInput}
                            />
                        </View>
                    </View>
                    <View style={styles.borderLine}></View>
                    <View style={{ marginHorizontal: 12, }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Icon name="bath" size={20} />
                            <Text style={{ marginLeft: 10 }}>Baths</Text>
                        </View>
                        <View >
                            <TextInput
                                placeholder="Type number of baths"
                                style={styles.bedroomInput}
                            />
                        </View>
                    </View>
                    <View style={styles.borderLine}></View>
                    <View style={{ marginHorizontal: 12, marginBottom: 15 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Icon name="tty" size={20} />
                            <Text style={{ marginLeft: 10 }}>Contacts</Text>
                        </View>
                        <View style={{ marginTop: 10, }}>
                            <TextInput
                                placeholder="Type email here"
                                style={styles.bedroomInput}
                            />

                            <View style={{ flexDirection: "row", marginTop: 12 }}>
                                <Text style={{ marginTop: 10 }}>Mobile No :</Text>
                                {/* <TextInput
                                    placeholder="Mobile no."
                                    style={styles.contactNoInputs}
                                /> */}
                                <PhoneInput
                                    ref={phone}
                                    allowZeroAfterCountryCode={false}
                                    textProps={{ placeholder: 'Mobile number' }}
                                    onChangePhoneNumber={() => {
                                        setMobileNo(phone.current.getValue()),
                                        setValidMobile(phone.current.isValidNumber()),
                                        setStartNumber(true)
                                    }
                                    }
                                    // onChangePhoneNumber={()=>setValidMobile(phone.current.isValidNumber())}
                                    onSelectCountry={() => setCountryCode(phone.current.getCountryCode())}
                                    value={mobileNo}
                                    style={[styles.contactNoInputs,
                                    validMobile !== false && startNumber !== false ? styles.errorInput
                                        : null]}


                                />
                            </View>
                            <View style={{ flexDirection: "row", marginTop: 10 }}>
                                <Text style={{ marginTop: 10 }}>Whatsapp No :</Text>
                                {/* <TextInput
                                    placeholder="Whatsapp no."
                                    style={styles.contactNoInputs}
                                /> */}
                                <PhoneInput
                                    ref={phone}
                                    allowZeroAfterCountryCode={false}
                                    textProps={{ placeholder: 'Mobile number' }}
                                    onChangePhoneNumber={() => {
                                        setWhatsappNo(phone.current.getValue()),
                                        setValidMobile(phone.current.isValidNumber()),
                                        setStartWhatsappNumber(true)
                                    }
                                    }
                                    //onSelectCountry={() => setCountryCode(phone.current.getCountryCode())}
                                    value={mobileNo}
                                    style={[styles.contactNoInputs,
                                    validMobile !== false && startWhatsappNumber !== false ? styles.errorInput
                                        : null]}


                                />
                            </View>

                        </View>

                    </View>

                </View>
            </ScrollView>
            <View style={{ justifyContent: 'flex-end', margin: 12 }}>
                <View style={styles.bottomBtnsContainer}>
                    {/* <TouchableOpacity
                    style={styles.uploadLateBtn}
                    >
                        <Text style={{color:"#7DE24E",fontWeight:'bold'}}>UPLOAD LATER</Text>
                    </TouchableOpacity> */}
                    <TouchableOpacity
                        style={styles.uploadNowBtn}
                    >
                        <Text style={{ color: '#fff', fontWeight: 'bold' }}>UPLOAD NOW</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )

}

export default AddProperty;