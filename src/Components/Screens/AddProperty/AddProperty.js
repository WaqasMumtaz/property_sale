import React, { useState, useEffect, useRef } from 'react';
import styles from './css/style';
//import TouchableButton from '../../Button/button';
import Icon from 'react-native-vector-icons/FontAwesome';
//import { Dropdown } from 'react-native-material-dropdown';
import DropDownPicker from 'react-native-dropdown-picker';
import TabTopNav from '../../../Navigation/TabTopNav';
import PhoneInput from 'react-native-phone-input'
import AsyncStorage from '@react-native-community/async-storage';
import Loader from '../../Loader';
import HttpUtilsFile from '../../Services/HttpUtils';


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
    Alert,
} from 'react-native';
const { scrolHeight } = Dimensions.get('window').height;




const AddProperty = ({ route, navigation }) => {
    let nameOfUserProperty = 'home';
    let nameOfCategoryUserSelected = 'Home';
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
    const [loading, setLoading] = useState(false);
    const date = new Date().getDate(); //To get the Current Date
    const month = new Date().getMonth() + 1; //To get the Current Month
    const year = new Date().getFullYear();
    let [cityName, setCityName] = useState('Islamabad');
    const [locationArea , setLocationArea] = useState('');
    const [address , setAddress] = useState(false);
    const [currentUserData, setCurrentUserData] = useState({})
    // const [propertyTypeData, setPropertyTypeData] = 'user'
    const [purposeValue, setPurposeValue] = useState('sell');
    const [propertyTitle, setPropertyTitle] = useState('');
    const [requirePropertyTitleField, setRequirePropertyTitleField] = useState(false);
    const [propertyDescription, setPropertyDescription] = useState('');
    const [requirePropertyDescriptionField, setRequirePropertyDescriptionField] = useState(false);
    const [latitude, setLetitude] = useState(0);
    const [requireLatitudeField, setRequireLatitudeField] = useState(false);
    const [longitude, setLongitude] = useState(0);
    const [requireLongitudeField, setRequireLongitudeField] = useState(false);
    const [bedrooms, setBedrooms] = useState(0);
    const [requireBedroomField, setRequireBedroomField] = useState(false);
    const [baths, setBaths] = useState(0);
    const [requireBathField, setRequireBathField] = useState(false)
    const [email, setEmail] = useState(0);
    const [areaSizeValue, setAreaSizeValue] = useState(0);
    const [requireAreasizeField, setRequireAreasizeField] = useState(false);
    const [priceValue, setPriceValue] = useState(0);
    const [requirePriceField, setRequirePriceField] = useState(false)
    const [areaSizeUnit, setAreaSizeUnit] = useState('Sq. Ft.');
    const [priceValueUnit, setPriceValueUnit] = useState('PKR');
    const [requireFields, setRequireFields] = useState(false);
    // const [countryData, setCountryData] = useState('');
    const [mobileNumber, setMobileNumber] = useState(0);
    const [whatsappNo, setWhatsappNo] = useState(0);
    const [validMobile, setValidMobile] = useState(false);
    const [valideWhatsapp, setValidWhatsapp] = useState(false);
    const [countryCode, setCountryCode] = useState(0);
    const [startNumber, setStartNumber] = useState(false);
    const [startWhatsappNumber, setStartWhatsappNumber] = useState(false);
    const [userCategory, setUserCategory] = useState('');
    const [userPropertySelect, setUserPropertySelect] = useState('');
    // const [userPropertyData , setUserPropertyData]= useState({})
    const phone = useRef(null);
    const onPressFlag = () => {
        myCountryPicker.open()
    }


    const getPropertyData = (routeName, userSelectProperty) => {
        nameOfCategoryUserSelected = routeName;
        nameOfUserProperty = userSelectProperty;
        // console.log('User Property Select >>', nameOfUserProperty, 'Category >>', nameOfCategoryUserSelected)

        // setUserCategory(routeName);
        // setUserPropertySelect(userSelectProperty)

        // if (nameOfCategoryUserSelected === 'Home' && nameOfUserProperty === 'home' || nameOfUserProperty === 'flats' || nameOfUserProperty === 'uperPortion') {
        //if (userSelectProperty === 'home' || userSelectProperty === 'flats' || userSelectProperty === 'uperPortion') {
        //console.log('This is Home Data')
        // const a = {
        //     nameOfCategoryUserSelected: nameOfCategoryUserSelected,
        //     nameOfUserProperty: nameOfUserProperty
        // }
        // setUserPropertyData(a);
        //console.log('User Property Select >>', nameOfUserProperty, 'Category >>', nameOfCategoryUserSelected)
        // }
        //}
        // else if (routeName === 'Plots' && userSelectProperty === 'residential' || userSelectProperty === 'comercialPlot' || userSelectProperty === 'agricultural') {
        // if (userSelectProperty === 'comercialPlot' || userSelectProperty === 'agricultural') {
        // console.log('This is Plots Data')
        // nameOfCategoryUserSelected = routeName;
        // nameOfUserProperty = userSelectProperty;
        //console.log('User Property Select >>', nameOfUserProperty, 'Category >>', nameOfCategoryUserSelected)
        // }
        //}
        // else if (routeName === 'Commercial' && userSelectProperty === 'office' || userSelectProperty === 'shop' || userSelectProperty === 'warehouse') {
        //     //if (userSelectProperty === 'shop' || userSelectProperty === 'warehouse') {
        //     //console.log('This is Commercial Data')
        //     nameOfCategoryUserSelected = routeName;
        //     nameOfUserProperty = userSelectProperty;
        //     console.log('User Property Select >>', nameOfUserProperty, 'Category >>', nameOfCategoryUserSelected)

        //     //}
        // }
    }

    const propertyTypeData = {
        nameOfCategoryUserSelected: nameOfCategoryUserSelected,
        nameOfUserProperty: nameOfUserProperty
    }

    const uploadAddProperty = async () => {
        
        if(address == ''){
            setAddress(true);
            Alert.alert('Please fill location detail address');
            return;
        }
        if(address !== ''){
            setAddress(false);
        }

        if (propertyTitle == '') {
            setRequirePropertyTitleField(true);
            Alert.alert('Please fill property title');
            return;
        }
        if (propertyTitle !== '') {
            setRequirePropertyTitleField(false);
        }
        if (propertyDescription == '') {
            setRequirePropertyDescriptionField(true);
            Alert.alert('Please fill property description');
            return;
        }
        if (propertyDescription !== '') {
            setRequirePropertyDescriptionField(false);
        }
        if (latitude == 0) {
            setRequireLatitudeField(true);
            Alert.alert('Please fill latitude field');
            return;
        }
        if (latitude !== 0) {
            setRequireLatitudeField(false);
        }
        if (longitude == 0) {
            setRequireLongitudeField(true);
            Alert.alert('Please fill logitude field');
            return;
        }
        if (longitude !== 0) {
            setRequireLongitudeField(false);
        }
        if (areaSizeValue == 0) {
            setRequireAreasizeField(true);
            Alert.alert('Please fill area size field');
            return;
        }
        if (areaSizeValue !== 0) {
            setRequireAreasizeField(false);
        }
        if (priceValue == 0) {
            setRequirePriceField(true);
            Alert.alert('Please fill price field');
            return;
        }
        if (priceValue !== 0) {
            setRequirePriceField(false);
        }
        if (nameOfCategoryUserSelected === 'Home' && bedrooms == 0) {
            setRequireBedroomField(true);
            Alert.alert('Please fill bedroom field');
            return;
        }
        if (nameOfCategoryUserSelected === 'Home' && bedrooms !== 0) {
            setRequireBedroomField(false);
        }

        if (nameOfCategoryUserSelected === 'Home' && baths == 0) {
            setRequireBathField(true);
            Alert.alert('Please fill bath field');
            return;
        }
        if (nameOfCategoryUserSelected === 'Home' && baths !== 0) {
            setRequireBathField(false);
        }
        if (mobileNumber === 0) {
            return Alert.alert('Please insert mobile number')
        }
        const addPropertyAllData = {
            userId: currentUserData.content._id,
            status: 'pending',
            date: date,
            month: month,
            year: year,
            cityName: cityName,
            locationArea: locationArea,
            propertyTypeData: propertyTypeData,
            purposeValue: purposeValue,
            propertyTitle: propertyTitle,
            propertyDescription: propertyDescription,
            latitude: latitude,
            longitude: longitude,
            bedrooms: bedrooms,
            baths: baths,
            email: email,
            areaSizeValue: areaSizeValue,
            priceValue: priceValue,
            areaSizeUnit: areaSizeUnit,
            priceValueUnit: priceValueUnit,
            mobileNo: mobileNumber,
            whatsappNo: whatsappNo,
            countryCode: countryCode,

        }
        //console.log('countryCode >>', countryCode , 'whatsapp >>', whatsappNo);
        try {
            setLoading(true);
            const userData = await HttpUtilsFile.post('addproperty', addPropertyAllData);
            console.log('Api user data response >>', userData);
            if(userData.code == 200){
            setLoading(false);

            }
        }
        catch (error) {
            console.log('catch error >>', error);
        }
    }


    const getStorageData = async () => {
        const getData = await AsyncStorage.getItem("userSelectedLocation");
        const getCurrentUser = await AsyncStorage.getItem("currentUser");
        //console.log('getCurrentUser >>',JSON.parse(getCurrentUser));
        const parseData = JSON.parse(getCurrentUser);
        setCityName(getData);
        setCurrentUserData(parseData);
    }

    useEffect(() => {
        getStorageData();
    })

    //console.log('nameOfCategoryUserSelected Return Se Pehly >>', nameOfCategoryUserSelected)
    return (
        <>
            <Loader loading={loading} />
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
                                <Text style={{ marginLeft: 10, fontWeight: 'bold' }}>{cityName}</Text>
                            </View>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Search', { name: 'Enter & Select City' })}
                                style={{ width: '50%', flexDirection: 'row', paddingVertical: 7, justifyContent: 'flex-end' }}>
                                <Text style={{ fontWeight: 'bold', color: '#307ecc' }}>Change City</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginTop: 10 }}>
                            <TextInput
                                placeholder="Location e.g Address"
                                onChangeText={value => setLocationArea(value)}
                               // onFocus={() => navigation.navigate('Search', { name: 'Search Location' })}
                                keyboardType="default"
                                style={[styles.inputText, address !== false ? styles.inputTextError : null]}
                                value={locationArea}
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
                            {<TabTopNav getPropertyData={getPropertyData} />}
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
                                style={[styles.detailProprtyInput, requirePropertyTitleField !== false ? styles.detailProprtyInputError : null]}
                                onChangeText={value => setPropertyTitle(value)}
                                value={propertyTitle}
                            />
                        </View>
                        <View style={{ marginTop: 12, marginLeft: 20 }}>
                            <TextInput
                                placeholder="Property Description*"
                                style={[styles.detailProprtyInput, requirePropertyDescriptionField !== false ? styles.detailProprtyInputError : null]}
                                onChangeText={value => setPropertyDescription(value)}
                                value={propertyDescription}
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
                                style={[styles.latitudeInputs, requireLatitudeField !== false ? styles.latitudeInputsError : null]}
                                onChangeText={(value) => setLetitude(value)}
                                keyboardType="number-pad"
                                value={latitude}
                            />
                        </View>
                        <View style={styles.latitudsContainer}>
                            <Text style={{ marginLeft: 10 }}>Longitude</Text>
                            <TextInput
                                placeholder="0"
                                style={[styles.latitudeInputs, requireLongitudeField !== false ? styles.latitudeInputsError : null]}
                                onChangeText={(value) => setLongitude(value)}
                                keyboardType="number-pad"
                                value={longitude}
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
                                style={[styles.areaSizeInputsStyle, requireAreasizeField !== false ? styles.areaSizeInputsStyleError : null]}
                                onChangeText={(value) => setAreaSizeValue(value)}
                                keyboardType="number-pad"
                                value={areaSizeValue}
                            />
                            <DropDownPicker
                                defaultValue={areaSizeUnit}
                                items={areaSizeData}
                                containerStyle={{ height: 40, width: '45%', borderRadius: 12 }}
                                style={{ borderRadius: 12, }}
                                onChangeItem={(e) => setAreaSizeUnit(e.value)}
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
                                style={[styles.areaSizeInputsStyle, requirePriceField !== false ? styles.areaSizeInputsStyleError : null]}
                                onChangeText={(value) => setPriceValue(value)}
                                keyboardType="number-pad"
                                value={priceValue}
                            />
                            <DropDownPicker
                                defaultValue={priceValueUnit}
                                items={priceData}
                                containerStyle={{ height: 40, width: '45%', borderRadius: 12 }}
                                onChangeItem={(e) => setPriceValueUnit(e.value)}
                            />
                        </View>

                    </View>
                    {
                        nameOfCategoryUserSelected !== 'Plots' && nameOfCategoryUserSelected !== 'Commercial' ?
                            <>
                                <View style={styles.borderLine}></View>
                                <View style={{ marginHorizontal: 12, }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Icon name="bed" size={20} />
                                        <Text style={{ marginLeft: 10 }}>Bedrooms</Text>
                                    </View>
                                    <View >
                                        <TextInput
                                            placeholder="Type number of bedrooms"
                                            style={[styles.bedroomInput, requireBedroomField !== false ? styles.bedroomInputError : null]}
                                            onChangeText={value => setBedrooms(value)}
                                            keyboardType="number-pad"
                                            value={bedrooms}
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
                                            style={[styles.bedroomInput, requireBathField !== false ? styles.bedroomInputError : null]}
                                            onChangeText={value => setBaths(value)}
                                            keyboardType="number-pad"
                                            value={baths}
                                        />
                                    </View>
                                </View>
                            </>
                            :
                            null
                    }

                    <View style={styles.borderLine}></View>
                    <View style={{ marginHorizontal: 12, marginBottom: 15 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Icon name="tty" size={20} />
                            <Text style={{ marginLeft: 10 }}>Contacts</Text>
                        </View>
                        <View style={{ marginTop: 10, }}>
                            <TextInput
                                placeholder="Type email here"
                                style={styles.emailStyle}
                                keyboardType="email-address"
                                onChangeText={value => setEmail(value)}
                                value={email}
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
                                        setMobileNumber(phone.current.getValue()),
                                            setValidMobile(phone.current.isValidNumber()),
                                            setCountryCode(phone.current.getCountryCode()),
                                            setStartNumber(true)
                                    }
                                    }
                                    // onChangePhoneNumber={()=>setValidMobile(phone.current.isValidNumber())}
                                    onSelectCountry={() => setCountryCode(phone.current.getCountryCode())}
                                    value={mobileNumber}
                                    style={[styles.contactNoInputs,
                                    validMobile !== true && startNumber !== false ? styles.errorInput
                                        : null]}


                                />
                            </View>
                            <View style={{ flexDirection: "row", marginTop: 10 }}>
                                <Text style={{ marginTop: 10 }}>Whatsapp No :</Text>
                                {/* <TextInput
                                    placeholder="Whatsapp no."
                                    style={styles.contactNoInputs}
                                />  */}
                                <PhoneInput
                                    ref={phone}
                                    allowZeroAfterCountryCode={false}
                                    textProps={{ placeholder: 'Whatsapp number' }}
                                    onChangePhoneNumber={() => {
                                        setWhatsappNo(phone.current.getValue()),
                                            setValidWhatsapp(phone.current.isValidNumber()),
                                            setStartWhatsappNumber(true)
                                    }
                                    }
                                    //onSelectCountry={() => setCountryCode(phone.current.getCountryCode())}
                                    value={whatsappNo}
                                    style={[styles.contactNoInputs,
                                    valideWhatsapp !== true && startWhatsappNumber !== false ? styles.errorInput
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
                        onPress={uploadAddProperty}
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