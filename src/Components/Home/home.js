//Import React and Hook we needed
import React, { useState, useEffect } from 'react';
import styles from './css/style';
import Carousal from '../Carousals';
import { Consumer } from '../../Context';


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

let userViewedData = [];

const Home = ({ route, navigation }) => {
  const { navigate } = navigation;
  //let cityName = route.params.data;
  const [userSelectType, setUserSelectType] = useState('buy');
  const [cityName, setCityName] = useState('Islamabad');
  const [rentProperties, setRentProperties] = useState([]);
  const [buyProperties, setBuyProperties] = useState([]);
  const [userSearchData, setUserSearchData] = useState(false);
  const [userViewData , setUserViewData] = useState();

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

  const getStorageData = async () => {
    const getData = await AsyncStorage.getItem("userSelectedLocation");
    setCityName(getData);
    
  }

  const viewDataFunc=()=>{
    AsyncStorage.getItem("viewData").then(value => {
      if (value) {
        let userViewData = JSON.parse(value);
       // console.log('User View DAta LocalStorage >>', userViewData);
        setUserViewData(userViewData)
        //userViewedData.push(userViewData);
        //console.log('User inserted Data >>', userViewedData);

      }
      else {
        console.log('else not data in localstorage');
        setUserViewData([])

      }
    })
  }


  useEffect(() => {
    getAllProperties();
    viewDataFunc();
  }, [])


  useEffect(() => {
    getStorageData();
  })


  const matchCarouselData = async (title, para) => {
    //console.log('click user title >>', title, 'user para >>', para);
    let userViewedData = [];
    if (userSelectType === 'buy') {
      await buyProperties.map(items => {
        const dataTitle = `${items.propertyTypeData.nameOfUserProperty.toUpperCase()} FOR ${items.purposeValue.toUpperCase()}`;
        const dataCity = `IN ${items.cityName.toUpperCase()}`;
        const userCity = para.toUpperCase();
        // console.log(dataTitle , userCity);
        if (dataTitle === title && dataCity === userCity) {
           console.log('Match Carousal Data >>', userViewData);
           if(userViewData && userViewData.length > 0){
            userViewData.filter((item) =>{
              if(item._id !== items._id){
               // userViewedData.push(items)
              // userViewedData = [...userViewData , items];
             // console.log('Total View Data >>',userViewedData);
             // AsyncStorage.setItem('viewData', JSON.stringify(userViewedData))
              }
              else {
                console.log('else condition >>', items);
              }
              // else if(item._id === items._id){
              //  // console.log('Clicked Data >>', items);
              //   console.log('Match Data >>', userViewedData);
              // }
            })
           
           }
           else {
           // console.log('Not Available View Data in LocalStorage');
            userViewedData.push(items)
            AsyncStorage.setItem('viewData', JSON.stringify(userViewedData))
            
           }
          // return navigate('Details', {propertyDetail:{
          //        price:items.priceValue,
          //        priceUnit:items.priceUnit,
          //        location:items.locationArea,
          //        cityName:items.cityName,
          //        areaSizeUnit:items.areaSizeUnit,
          //        areaSizeValue:items.areaSizeValue,
          //        baths:items.baths,
          //        bedRooms:items.bedRooms,
          //        countryCode:items.countryCode,
          //        date:items.date,
          //        email:items.email,
          //        latitude:items.latitude,
          //        longitude:items.longitude,
          //        mobileNo:items.mobileNo,
          //        month:items.month,
          //        propertyDescription:items.propertyDescription,
          //        propertyCategory:items.propertyTypeData.nameOfCategoryUserSelected,
          //        propertyType:items.propertyTypeData.nameOfUserProperty,
          //        purpose:items.purposeValue,
          //        status:items.status,
          //        whatsappNo:items.whatsappNo,
          //        year:items.year,
          //        propertyId:items._id

          // }    
          //})
        }
      })
      //console.log('userSearchedData >>', userSearchedData);
    }
    else if (userSelectType === 'rent') {
      rentProperties.map(items => {
        const dataTitle = `${items.propertyTypeData.nameOfUserProperty.toUpperCase()} FOR ${items.purposeValue.toUpperCase()}`;
        const dataCity = `IN ${items.cityName.toUpperCase()}`;
        const userCity = para.toUpperCase();
        // console.log(dataTitle , userCity);
        if (dataTitle === title && dataCity === userCity) {
          // userSearchedData.push(items);
          //userSearchedData = items;
          //console.log('userSearchedData >>', userSearchedData);
          return navigate('Details', {
            propertyDetail: {
              price: items.priceValue,
              priceUnit: items.priceUnit,
              location: items.locationArea,
              cityName: items.cityName,
              areaSizeUnit: items.areaSizeUnit,
              areaSizeValue: items.areaSizeValue,
              baths: items.baths,
              bedRooms: items.bedRooms,
              countryCode: items.countryCode,
              date: items.date,
              email: items.email,
              latitude: items.latitude,
              longitude: items.longitude,
              mobileNo: items.mobileNo,
              month: items.month,
              propertyDescription: items.propertyDescription,
              propertyCategory: items.propertyTypeData.nameOfCategoryUserSelected,
              propertyType: items.propertyTypeData.nameOfUserProperty,
              purpose: items.purposeValue,
              status: items.status,
              whatsappNo: items.whatsappNo,
              year: items.year,
              propertyId: items._id

            }
          })
        }
      })
    }
  }


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
          <View style={styles.recentSearchHeading}>
            <Text style={{ fontWeight: 'bold', color: 'gray', }}>View Properties</Text>
          </View>
          <View style={styles.recentSearhCarosualContainer}>
            {userSelectType === 'buy' && buyProperties.length >= 0 ?
              <View style={styles.recentSearhCarosualContainer}>
                <Carousal
                  data={buyProperties}
                />
              </View>
              : userSelectType === 'rent' && rentProperties.length >= 0 ?
                <View style={styles.recentSearhCarosualContainer}>
                  <Carousal
                    data={rentProperties}
                  />
                </View>
                :
                null
            }
          </View>
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
