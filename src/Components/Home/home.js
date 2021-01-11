//Import React and Hook we needed
import React, { useState, useEffect } from 'react';
import styles from './css/style';
import Carousal from '../Carousals';
//import { Consumer } from '../../Context';
import ViewPropertyCarousal from '../ViewProperties';


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
  Alert
} from 'react-native';
// import Loader from '../../Loader';
import { KeyboardAwareView } from 'react-native-keyboard-aware-view';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage';
//import Loader from '../../Loader';
import HttpUtilsFile from '../Services/HttpUtils';
import TopTabs from './TopTabs/TopTabs';


//const image = { uri: "https://reactjs.org/logo-og.png" };
const { scrolHeight } = Dimensions.get('window').height;
let rentData = [];
let buyData = [];

let userViewedData = '';

const Home = ({ route, navigation }) => {
  const { navigate } = navigation;
  navigation.closeDrawer();
  //let cityName = route.params.data;
  const [userSelectType, setUserSelectType] = useState('buy');
  const [cityName, setCityName] = useState('Islamabad');
  const [rentProperties, setRentProperties] = useState([]);
  const [buyProperties, setBuyProperties] = useState([]);
  const [userSearchData, setUserSearchData] = useState(false);
  const [viewBuyerProperty, setViewBuyerProperty] = useState([]);
  const [viewRentProperty, setViewRentProperty] = useState([]);

  const getDataProperties = (routeName, clickBtn, type, areaSizeValue, areaSizeUnit) => {
    //console.log('routeName >>', routeName, 'Type >>', type, 'clickBtn >>', clickBtn , 'areaSizeValue >>', areaSizeValue , 'areaSizeUnit >>', areaSizeUnit);
    //console.log('buyProperties >>', buyProperties);
    let filteredData = [];
    if (userSelectType === 'buy') {

      if (clickBtn === 'location') {
        filteredData = buyProperties.filter((item) => item.propertyTypeData.nameOfCategoryUserSelected.toLowerCase() === routeName.toLowerCase() && item.cityName.toLowerCase() === type.toLowerCase())

      }
      else if (clickBtn === 'type') {
        filteredData = buyProperties.filter((item) => item.propertyTypeData.nameOfCategoryUserSelected.toLowerCase() === routeName.toLowerCase() && item.propertyTypeData.nameOfUserProperty.toLowerCase() === type.toLowerCase())

      }
      else if (clickBtn === 'area') {
        filteredData = buyProperties.filter((item) => item.propertyTypeData.nameOfCategoryUserSelected.toLowerCase() === routeName.toLowerCase() && item.areaSizeValue === areaSizeValue && item.areaSizeUnit.toLowerCase() === areaSizeUnit.toLowerCase())

      }

      if (filteredData && filteredData.length > 0) {
        // console.log(filteredData, 'filtered data');
        // navigate('City', { name: `Filtered ${routeName}`, userSearchedData: filteredData })

      }
      else {
        //console.log('else condition')
        return Alert.alert('This data does not yet exist , Try others categories');
      }

    }
    else if (userSelectType === 'rent') {
      //console.log('RentDAta >>', rentProperties);

      if (clickBtn === 'location') {
        filteredData = rentProperties.filter((item) => item.propertyTypeData.nameOfCategoryUserSelected.toLowerCase() === routeName.toLowerCase() && item.cityName.toLowerCase() === type.toLowerCase())

      }
      else if (clickBtn === 'type') {
        filteredData = rentProperties.filter((item) => item.propertyTypeData.nameOfCategoryUserSelected.toLowerCase() === routeName.toLowerCase() && item.propertyTypeData.nameOfUserProperty.toLowerCase() === type.toLowerCase())

      }
      else if (clickBtn === 'area') {
        filteredData = rentProperties.filter((item) => item.propertyTypeData.nameOfCategoryUserSelected.toLowerCase() === routeName.toLowerCase() && item.areaSizeValue === areaSizeValue && item.areaSizeUnit.toLowerCase() === areaSizeUnit.toLowerCase())

      }

      if (filteredData && filteredData.length > 0) {
        console.log(filteredData, 'filtered data');
        // navigate('City', { name: `Filtered ${routeName}`, userSearchedData: filteredData })

      }
      else {
        //console.log('else condition')
        return Alert.alert('This data does not yet exist , Try others categories');
      }


    }

  }

  const getAllProperties = async () => {
    const userData = await HttpUtilsFile.get('getproperties');
    //console.log('get properties data >>', userData);
    if (userData.code == 200) {
      //console.log('Data properties >>', userData.content);
      const allProperties = userData.content;
      // console.log('All Data >>', allProperties);
      allProperties.map(items => {
        if (items.purposeValue === 'rent' && items.status !== 'pending') {
          // console.log('Rent Items >>', items);
          rentData.push(items);
          setRentProperties(rentData);
          //console.log('Rent DAta >>', rentData);
        }
        if (items.purposeValue === 'sell' && items.status !== 'pending') {
          buyData.push(items);
          setBuyProperties(buyData)
          //console.log('Buy Data >>', buyData)
        }
      })
    }
  }

  const getStorageData = () => {
    const getCity = AsyncStorage.getItem("userSelectedLocation").then(value => {
      if (value) {
        setCityName(getCity);
      }
      else {
        setCityName('Islamabad');
      }
    });

  }

  const viewDataFunc = () => {
    if (userSelectType === 'buy') {
      AsyncStorage.getItem("viewBuyerProperty").then(value => {
        if (value) {
          let userViewData = JSON.parse(value);
          setViewBuyerProperty(userViewData);
        }
        else {
          console.log('else not data in localstorage');
          setViewBuyerProperty([])
        }
      })
    }
    else if(userSelectType === 'rent'){
      AsyncStorage.getItem("viewRentProperty").then(value => {
        if (value) {
          let userViewData = JSON.parse(value);
          setViewRentProperty(userViewData);
          
        }
        else {
          console.log('else not data in localstorage');
          setViewRentProperty([])
        }
      })
    }
  }


  useEffect(() => {
    getAllProperties();
    viewDataFunc();
  }, [])


  useEffect(() => {
    getStorageData();
  })


  const matchCarouselData = (item) => {

    if (userSelectType === 'buy') {
      let arr = [];
      const propertyDetail = {
        price: item.priceValue,
        priceUnit: item.priceUnit,
        location: item.locationArea,
        cityName: item.cityName,
        areaSizeUnit: item.areaSizeUnit,
        areaSizeValue: item.areaSizeValue,
        baths: item.baths,
        bedRooms: item.bedRooms,
        countryCode: item.countryCode,
        date: item.date,
        email: item.email,
        latitude: item.latitude,
        longitude: item.longitude,
        mobileNo: item.mobileNo,
        month: item.month,
        propertyDescription: item.propertyDescription,
        propertyCategory: item.propertyTypeData.nameOfCategoryUserSelected,
        propertyType: item.propertyTypeData.nameOfUserProperty,
        purpose: item.purposeValue,
        status: item.status,
        whatsappNo: item.whatsappNo,
        year: item.year,
        propertyId: item._id
      }
      // console.log('propertyDetail >>', propertyDetail);
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
      navigate('Details', { propertyDetail: propertyDetail })

    }

    else if (userSelectType === 'rent') {
      let arr = [];
      const propertyDetail = {
        price: item.priceValue,
        priceUnit: item.priceUnit,
        location: item.locationArea,
        cityName: item.cityName,
        areaSizeUnit: item.areaSizeUnit,
        areaSizeValue: item.areaSizeValue,
        baths: item.baths,
        bedRooms: item.bedRooms,
        countryCode: item.countryCode,
        date: item.date,
        email: item.email,
        latitude: item.latitude,
        longitude: item.longitude,
        mobileNo: item.mobileNo,
        month: item.month,
        propertyDescription: item.propertyDescription,
        propertyCategory: item.propertyTypeData.nameOfCategoryUserSelected,
        propertyType: item.propertyTypeData.nameOfUserProperty,
        purpose: item.purposeValue,
        status: item.status,
        whatsappNo: item.whatsappNo,
        year: item.year,
        propertyId: item._id
      }
      // console.log('propertyDetail >>', propertyDetail);
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
      navigate('Details', { propertyDetail: propertyDetail });
    }
  }

  function showViewPropertyDetails(item){
    const propertyDetail = {
      price: item.priceValue,
      priceUnit: item.priceUnit,
      location: item.locationArea,
      cityName: item.cityName,
      areaSizeUnit: item.areaSizeUnit,
      areaSizeValue: item.areaSizeValue,
      baths: item.baths,
      bedRooms: item.bedRooms,
      countryCode: item.countryCode,
      date: item.date,
      email: item.email,
      latitude: item.latitude,
      longitude: item.longitude,
      mobileNo: item.mobileNo,
      month: item.month,
      propertyDescription: item.propertyDescription,
      propertyCategory: item.propertyTypeData.nameOfCategoryUserSelected,
      propertyType: item.propertyTypeData.nameOfUserProperty,
      purpose: item.purposeValue,
      status: item.status,
      whatsappNo: item.whatsappNo,
      year: item.year,
      propertyId: item._id
    }
    navigate('Details', { propertyDetail: propertyDetail });
  }

  //console.log('State Buyer View Data >>', viewBuyerProperty);
  return (
    <KeyboardAwareView animated={true}>
      <View style={styles.mainContainer}>
        <ScrollView style={{ flex: 1, backgroundColor: 'white', height: scrolHeight }}
          contentContainerStyle={{ flexGrow: 1 }}
          automaticallyAdjustContentInsets="automatic"
        >
          <View style={styles.toggleContainer}>

            {/* {console.log('RentProperties >>', rentProperties)} */}
            {/* <ImageBackground source={require('../Images/sale.png')} 
            style={styles.imageStyle}
            resizeMode='stretch'
            > */}
            <View style={styles.toggleButton}>
              <TouchableOpacity
                onPress={() => setUserSelectType('buy')}
                style={[userSelectType !== 'rent' ? styles.selectdBuyBtn : styles.buyBtn]}
              >
                <Text style={[userSelectType !== 'rent' ? styles.selectdTextBtn : styles.textStyle]}>Buy</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setUserSelectType('rent')}
                style={[userSelectType !== 'buy' ? styles.selectdRentBtn : styles.rentBtn]}
              >
                <Text style={[userSelectType !== 'buy' ? styles.selectdTextBtn : styles.textStyle]}>Rent</Text>
              </TouchableOpacity>
            </View>
            {/* </ImageBackground> */}
            <View style={styles.searchContainer}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Search', { name: 'Select City' })}
                style={styles.cityBtn}
              >
                <Text style={{ color: '#307ecc', fontWeight: 'bold' }}>{cityName}</Text>
              </TouchableOpacity>
              <Icon name="arrow-circle-right" size={15}
                style={styles.iconStyle}
              />
              <View style={styles.line}></View>
              <TextInput
                placeholder="Search Properties"
                style={styles.inputTexts}
                onFocus={() => navigation.navigate('FILTRS', { data: cityName })}
              />
            </View>
          </View>
          <View style={styles.browseHeading}>
            <Text style={{ fontWeight: 'bold', color: 'gray' }}>Browse Properties</Text>
          </View>
          <View style={styles.paginationContainer}>
            {<TopTabs getDataProperties={getDataProperties} />}
          </View>
          {userSelectType === 'buy' && viewBuyerProperty && viewBuyerProperty.length > 0 ?
            <>
              <View style={styles.recentSearchHeading}>
                <Text style={{ fontWeight: 'bold', color: 'gray', }}>View Properties</Text>
              </View>
              <View style={styles.recentSearhCarosualContainer}>
                <View style={styles.recentSearhCarosualContainer}>
                  <ViewPropertyCarousal
                    data={viewBuyerProperty}
                    showViewPropertyDetails={showViewPropertyDetails}
                  />
                </View>
              </View>
            </>
            :
              null
          }
          {userSelectType === 'rent' && viewRentProperty && viewRentProperty.length > 0 ?
          <>
          <View style={styles.recentSearchHeading}>
                <Text style={{ fontWeight: 'bold', color: 'gray', }}>View Properties</Text>
              </View>
              <View style={styles.recentSearhCarosualContainer}>
                <View style={styles.recentSearhCarosualContainer}>
                  <ViewPropertyCarousal
                    data={viewRentProperty}
                    showViewPropertyDetails={showViewPropertyDetails}
                  />
                </View>
              </View>
          </>
          :
          null
        }


          <View style={styles.recentSearchHeading}>
            <Text style={{ fontWeight: 'bold', color: 'gray', }}>All Properties</Text>
          </View>
          {userSelectType === 'buy' && buyProperties.length >= 0 ?
            <View style={styles.recentSearhCarosualContainer}>
              <Carousal
                data={buyProperties}
                matchCarouselData={matchCarouselData}
              />
            </View>
            : userSelectType === 'rent' && rentProperties.length >= 0 ?
              <View style={styles.recentSearhCarosualContainer}>
                <Carousal
                  data={rentProperties}
                  matchCarouselData={matchCarouselData}

                />
              </View>
              :
              null
          }

          {/* {userSelectType === 'buy' ?
          <Text></Text> 
          :
          null} */}
          {/* {buyerUserData} */}
        </ScrollView>
      </View>
    </KeyboardAwareView>
  )

}

export default Home;
