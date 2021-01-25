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
import { HeaderBackButton } from '@react-navigation/stack';
import { connect } from 'react-redux';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';



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
    TouchableHighlight,
    TouchableOpacity,
    ScrollView,
    ImageBackground,
    Dimensions,
    FlatList,
    Animated,
    Button,
    Alert,
    BackHandler,
    Modal
} from 'react-native';
const { scrolHeight } = Dimensions.get('window').height;


let nameOfUserProperty = 'houses';
let nameOfCategoryUserSelected = 'Home';
let imagesArr = [];

const AddProperty = (props) => {
    const { navigate } = props.navigation;
    const navigation = props.navigation;
    props.navigation.setOptions({
        headerLeft: (props) => (
            <HeaderBackButton
                {...props}
                onPress={() => {
                    navigation.popToTop()
                }}
            />
        ),
    });

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
    const [selectType, setSelectType] = useState('houses');
    const [selectedCategorey, setSelectedCategorey] = useState('Home');
    const [loading, setLoading] = useState(false);
    const date = new Date().getDate(); //To get the Current Date
    const month = new Date().getMonth() + 1; //To get the Current Month
    const year = new Date().getFullYear();
    const [cityName, setCityName] = useState('Islamabad');
    const [locationArea, setLocationArea] = useState('');
    const [address, setAddress] = useState(false);
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
    //const [bedrooms, setBedrooms] = useState(0);
    const [bedRooms, setBedrooms] = useState(0);
    const [baths, setBaths] = useState(0);
    const [requireBedroomField, setRequireBedroomField] = useState(false);
    //const [baths, setBaths] = useState(0);
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
    const [modalVisible, setModalVisible] = useState(false);
    const [propertyPhotos, setPropertyPhotos] = useState([]);
    const [loadingImgs, setLoadingImgs] = useState(false);
    // const [userPropertyData , setUserPropertyData]= useState({})
    const phone = useRef(null);
    const onPressFlag = () => {
        myCountryPicker.open()
    }


    const getPropertyData = (routeName, userSelectProperty) => {
        setSelectedCategorey(routeName);
        setSelectType(userSelectProperty);
        console.log('Category >>', selectedCategorey, 'Type >>', selectType);
    }


    const propertyTypeData = {
        nameOfCategoryUserSelected: selectedCategorey,
        nameOfUserProperty: selectType
    }

    const uploadAddProperty = async () => {
        if (cityName === '') {
            return Alert.alert('Please select city from Change City');

        }
        if (address === '') {
            setAddress(true);
            Alert.alert('Please fill location detail address');
            return;
        }
        if (address !== '') {
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
        if (latitude != 0) {
            setRequireLatitudeField(false);
        }
        if (longitude == 0) {
            setRequireLongitudeField(true);
            Alert.alert('Please fill logitude field');
            return;
        }
        if (longitude != 0) {
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
        if (selectedCategorey === 'Home' && bedRooms == 0) {
            setRequireBedroomField(true);
            Alert.alert('Please fill bedroom field');
            return;
        }
        if (selectedCategorey === 'Home' && bedRooms !== 0) {
            setRequireBedroomField(false);
        }

        if (selectedCategorey === 'Home' && baths == 0) {
            setRequireBathField(true);
            Alert.alert('Please fill bath field');
            return;
        }
        if (selectedCategorey === 'Home' && baths !== 0) {
            setRequireBathField(false);
        }
        if (mobileNumber === 0) {
            return Alert.alert('Please insert mobile number')
        }
        if (propertyPhotos.length === 0) {
            return Alert.alert('Please select property images')

        }
        const addPropertyAllData = {
            userId: currentUserData._id,
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
            bedRooms: bedRooms,
            baths: baths,
            email: email,
            areaSizeValue: areaSizeValue,
            priceValue: priceValue,
            areaSizeUnit: areaSizeUnit,
            priceUnit: priceValueUnit,
            mobileNo: mobileNumber,
            whatsappNo: whatsappNo,
            countryCode: countryCode,
            propertyImages: propertyPhotos

        }
        //console.log('countryCode >>', countryCode , 'whatsapp >>', whatsappNo);
        try {
            //console.log('addPropertyAllData >>', addPropertyAllData);
            setLoading(true);
            const userData = await HttpUtilsFile.post('addproperty', addPropertyAllData);
            console.log('Api user data response >>', userData);
            if (userData.code == 200) {
                setLoading(false);
                navigate('Home')
            }
        }
        catch (error) {
            console.log('catch error >>', error);
        }
    }

    const alertForPropertyApprovel = () =>
        Alert.alert(
            "Approvel",
            "Please verify this property from Admin Panel otherwise this property is not uploaded...",
            [
                { text: "OK", onPress: () => uploadAddProperty() }
            ],
            { cancelable: false }
        );


    const getStorageData = async () => {
        AsyncStorage.getItem("currentUser").then(value => {
            if (value) {
                const parseData = JSON.parse(value);
                //setCityName(getData);
                setCurrentUserData(parseData);
            }
        })
    }

    function handleBackButtonClick() {
        props.navigation.popToTop();
        return true;
    }

    useEffect(() => {
        getStorageData();
        BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
        return () => {
            BackHandler.removeEventListener('hardwareBackPress', handleBackButtonClick);
        };
    }, [])
    const cityChanging = () => {
        if (props.city !== undefined) {
            setCityName(props.city);
        }
        else {
            setCityName("Karachi");
        }

    }
    useEffect(() => {
        cityChanging()
    })

    function chooseImages(option) {
        if (option === 'camera') {
            const options = {
                mediaType: 'photo',
                //includeBase64:true,
                quality: 1
            }
            launchCamera(options, async (response) => {
                if (response.didCancel) {
                    console.log('User cancelled image picker');
                }
                else if (response.error) {
                    console.log('ImagePicker Error: ', response.error);
                }
                else if (response.customButton) {
                    console.log('User tapped custom button: ', response.customButton);
                }
                else {
                    //console.log('Response >>', response);
                    // imagesArr.push(response.uri)
                    // const propertyImgs = [...imagesArr, response.uri];
                    // setPropertyPhotos(propertyImgs)
                    let api_key = '941414688435159'
                    let api_secret = 'vsiEnuOQuDnVM8baooKqjsL0GfE'
                    let cloud = 'dbpp68z7c'
                    let formdata = new FormData();
                    formdata.append('file', { uri: response.uri, type: response.type, name: response.fileName });
                    formdata.append('api_key', api_key);
                    formdata.append('upload_preset', 'property_sale')
                    setModalVisible(!modalVisible);
                    setLoadingImgs(true);
                    let upload_url = await fetch('https://api.cloudinary.com/v1_1/' + cloud + '/image/upload', {
                        method: 'POST',
                        body: formdata
                    })
                    //console.log('Image Array >>', imagesArr);
                    const imageURL = await upload_url.json();
                    imagesArr.push(imageURL.secure_url);
                    //const allImgs = [...imagesArr , ]
                    setPropertyPhotos(imagesArr)
                    setLoadingImgs(false);
                    console.log('Cloudinary Img URL >>', imagesArr);

                }
            });

        }
        else if (option === 'gallery') {
            console.log('From Gallery')
            const options = {
                mediaType: 'photo',
                //includeBase64:true,
                quality: 1
            }
            launchImageLibrary(options, async (response) => {
                if (response.didCancel) {
                    // console.log('User cancelled image picker');
                }
                else if (response.error) {
                    // console.log('ImagePicker Error: ', response.error);
                }
                else if (response.customButton) {
                    //console.log('User tapped custom button: ', response.customButton);
                }
                else {
                    //console.log('Response >>', response);
                    // imagesArr.push(response.uri)
                    // const propertyImgs = [...imagesArr, response.uri];
                    // setPropertyPhotos(propertyImgs)
                    let api_key = '941414688435159'
                    let api_secret = 'vsiEnuOQuDnVM8baooKqjsL0GfE'
                    let cloud = 'dbpp68z7c'
                    let formdata = new FormData();
                    formdata.append('file', { uri: response.uri, type: response.type, name: response.fileName });
                    formdata.append('api_key', api_key);
                    formdata.append('upload_preset', 'property_sale')
                    setModalVisible(!modalVisible);
                    setLoadingImgs(true);
                    let upload_url = await fetch('https://api.cloudinary.com/v1_1/' + cloud + '/image/upload', {
                        method: 'POST',
                        body: formdata
                    })
                    //console.log('Image Array >>', imagesArr);
                    const imageURL = await upload_url.json();
                    imagesArr.push(imageURL.secure_url);
                    setPropertyPhotos(imagesArr)
                    setLoadingImgs(false);
                    console.log('Cloudinary Img URL >>', imagesArr);

                }
            });
        }
    }
    const Item = ({ item }) => (
        <TouchableOpacity
            //onPress={()=>props.matchCarouselData(item)}
            style={styles.item}
        >
            <Image
                source={{ uri: `${item}` }}
                style={{ width: 100, height: 100 }}
            />
        </TouchableOpacity>


    );

    const renderItem = ({ item }) => (
        <Item
            item={item}
        />
    );


    //console.log('nameOfCategoryUserSelected Return Se Pehly >>', nameOfCategoryUserSelected);
    return (
        <>
            <Loader loading={loading} />
            <ScrollView style={{ flex: 1, height: scrolHeight }}
                contentContainerStyle={{ flexGrow: 1 }}
                automaticallyAdjustContentInsets="automatic"
            >
                <View>
                    {/* {console.log('nameOfCategoryUserSelected >>', nameOfCategoryUserSelected)} */}
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
                                onPress={() => navigate('Search', { name: 'Enter & Select City' })}
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
                        selectedCategorey === 'Home' ?
                            <>
                                <View style={styles.borderLine}></View>
                                <View style={{ marginHorizontal: 12, }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Icon name="bed" size={20} />
                                        <Text style={{ marginLeft: 10 }}>Bedrooms</Text>
                                    </View>
                                    <View style={styles.bedRoomsContainer}>
                                        {/* <TextInput
                                            placeholder="Type number of bedrooms"
                                            style={[styles.bedroomInput, requireBedroomField !== false ? styles.bedroomInputError : null]}
                                            onChangeText={value => setBedrooms(value)}
                                            keyboardType="number-pad"
                                            value={bedrooms}
                                        /> */}
                                        <TouchableOpacity
                                            onPress={() => setBedrooms(1)}
                                            style={[bedRooms == 1 ? styles.selectedBtnStyle : styles.btnsStyle,]}
                                        >
                                            <Text>1</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            onPress={() => setBedrooms(2)}
                                            style={[bedRooms == 2 ? styles.selectedBtnStyle : styles.btnsStyle,]}
                                        >
                                            <Text>2</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            onPress={() => setBedrooms(3)}
                                            style={[bedRooms == 3 ? styles.selectedBtnStyle : styles.btnsStyle,]}
                                        >
                                            <Text>3</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            onPress={() => setBedrooms(4)}
                                            style={[bedRooms == 4 ? styles.selectedBtnStyle : styles.btnsStyle,]}
                                        >
                                            <Text>4</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            onPress={() => setBedrooms(5)}
                                            style={[bedRooms == 5 ? styles.selectedBtnStyle : styles.btnsStyle,]}
                                        >
                                            <Text>5</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            onPress={() => setBedrooms(6)}
                                            style={[bedRooms == 6 ? styles.selectedBtnStyle : styles.btnsStyle,]}
                                        >
                                            <Text>6</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            onPress={() => setBedrooms(7)}
                                            style={[bedRooms == 7 ? styles.selectedBtnStyle : styles.btnsStyle,]}
                                        >
                                            <Text>7</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            onPress={() => setBedrooms(8)}
                                            style={[bedRooms == 8 ? styles.selectedBtnStyle : styles.btnsStyle,]}
                                        >
                                            <Text>8</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            onPress={() => setBedrooms(9)}
                                            style={[bedRooms == 9 ? styles.selectedBtnStyle : styles.btnsStyle,]}
                                        >
                                            <Text>9</Text>
                                        </TouchableOpacity>

                                    </View>
                                </View>
                                <View style={styles.borderLine}></View>
                                <View style={{ marginHorizontal: 12, }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Icon name="bath" size={20} />
                                        <Text style={{ marginLeft: 10 }}>Baths</Text>
                                    </View>
                                    <View style={styles.bathroomsContainer}>
                                        {/* <TextInput
                                            placeholder="Type number of baths"
                                            style={[styles.bedroomInput, requireBathField !== false ? styles.bedroomInputError : null]}
                                            onChangeText={value => setBaths(value)}
                                            keyboardType="number-pad"
                                            value={baths}
                                        /> */}
                                        <TouchableOpacity
                                            onPress={() => setBaths(1)}
                                            style={[baths == 1 ? styles.selectedBtnStyle : styles.btnsStyle,]}
                                        >
                                            <Text>1</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            onPress={() => setBaths(2)}
                                            style={[baths == 2 ? styles.selectedBtnStyle : styles.btnsStyle,]}
                                        >
                                            <Text>2</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            onPress={() => setBaths(3)}
                                            style={[baths == 3 ? styles.selectedBtnStyle : styles.btnsStyle,]}
                                        >
                                            <Text>3</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            onPress={() => setBaths(4)}
                                            style={[baths == 4 ? styles.selectedBtnStyle : styles.btnsStyle,]}
                                        >
                                            <Text>4</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            onPress={() => setBaths(5)}
                                            style={[baths == 5 ? styles.selectedBtnStyle : styles.btnsStyle,]}
                                        >
                                            <Text>5</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            onPress={() => setBaths(6)}
                                            style={[baths == 6 ? styles.selectedBtnStyle : styles.btnsStyle,]}
                                        >
                                            <Text>6</Text>
                                        </TouchableOpacity>
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
                                <TextInput
                                    placeholder="Whatsapp no."
                                    style={styles.contactNoInputs}
                                    onChangeText={value => setWhatsappNo(value)}
                                    value={whatsappNo}
                                    keyboardType="numeric"
                                />
                                {/* <PhoneInput
                                    ref={phone}
                                    allowZeroAfterCountryCode={false}
                                    textProps={{ placeholder: 'Whatsapp number' }}
                                    onChangePhoneNumber={() => {
                                        setWhatsappNo(phone.current.getValue()),
                                            setValidWhatsapp(phone.current.isValidNumber()),
                                            setStartWhatsappNumber(true)
                                    }
                                    }
                                    value={whatsappNo}
                                    style={[styles.contactNoInputs,
                                    valideWhatsapp !== true && startWhatsappNumber !== false ? styles.errorInput
                                        : null]} 


                                />*/}
                            </View>

                        </View>

                    </View>
                    <View style={styles.borderLine}></View>
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
                                        <Text style={styles.modalText}>Select Images</Text>
                                        <TouchableHighlight
                                            style={styles.btnContainer}
                                            onPress={() => {
                                                setModalVisible(!modalVisible);
                                            }}
                                        >
                                            <Text style={styles.textStyle}>Canceled</Text>
                                        </TouchableHighlight>
                                    </View>
                                    <TouchableOpacity
                                        style={styles.fromCamera}
                                        onPress={() => chooseImages('camera')}
                                    >
                                        <Text>From Camera</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={styles.fromGallery}
                                        onPress={() => chooseImages('gallery')}
                                    >
                                        <Text>From Gallery</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </Modal>
                    </View>

                    <View style={{ marginHorizontal: 12, marginBottom: 15 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Icon name="image" size={20} />
                            <Text style={{ marginLeft: 10 }}>Property Images</Text>
                        </View>
                        <View>
                            <TouchableOpacity
                                onPress={() => setModalVisible(true)}
                                style={styles.uploadImgBtn}
                            >
                                <Icon name="image" size={60} color="#87ceff" />
                            </TouchableOpacity>
                        </View>

                    </View>
                    {/* { && !loadingImgs ?
                       
                        : 
                        null
                    } */}
                    {
                        loadingImgs ?
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ fontWeight: 'bold', color: '#000' }}>Loading....</Text>
                            </View>
                            : propertyPhotos && propertyPhotos.length > 0 && loadingImgs === false ?
                                <>
                                    <FlatList
                                        data={propertyPhotos}
                                        renderItem={renderItem}
                                        keyExtractor={item => item.id}
                                        // horizontal={true}
                                        numColumns={3}

                                    />
                                </>
                                :
                                null

                    }

                </View>
            </ScrollView>
            <View style={styles.borderLine}></View>
            <View style={{ justifyContent: 'flex-end', }}>
                <View style={styles.bottomBtnsContainer}>
                    {/* <TouchableOpacity
                    style={styles.uploadLateBtn}
                    >
                        <Text style={{color:"#7DE24E",fontWeight:'bold'}}>UPLOAD LATER</Text>
                    </TouchableOpacity> */}
                    {loadingImgs ?
                        <TouchableOpacity
                            disabled={true}
                            //onPress={uploadAddProperty}
                            style={{ ...styles.uploadNowBtn, opacity: 0.6 }}
                        >
                            <Text style={{ color: '#fff', fontWeight: 'bold' }}>UPLOAD NOW</Text>
                        </TouchableOpacity>
                        :
                        <TouchableOpacity
                            onPress={() => alertForPropertyApprovel()}
                            style={styles.uploadNowBtn}
                        >
                            <Text style={{ color: '#fff', fontWeight: 'bold' }}>UPLOAD NOW</Text>
                        </TouchableOpacity>
                    }

                </View>
            </View>
        </>
    )

}

const mapStateToProps = (state) => {
    //console.log('MapStateToProps State Value ..>>>', state);
    return {
        city: state.authReducer.city
    }
}


export default connect(mapStateToProps)(AddProperty);
