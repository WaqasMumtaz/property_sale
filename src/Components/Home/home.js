//Import React and Hook we needed
import React, { useState, useEffect } from 'react';
import styles from './css/style';
import Carousal from '../Carousals';

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
let userSearchCategory = '';
let userSearchType = '';


const Home = ({navigation}) => {
  const { navigate } = navigation;
  //console.log('Navigation >>', navigation);
  //console.log('Rent Data >>', rentData);
  //console.log('userSearchCategory >>', userSearchCategory);
  const [userSelectType, setUserSelectType] = useState('buy');
  const [cityName, setCityName] = useState('Islamabad');
  const [rentProperties , setRentProperties] = useState([]);
  const [buyProperties , setBuyProperties] = useState([]);
  const [userSearchData , setUserSearchData] = useState(false);

  const getDataProperties=(routeName , type)=>{
    //console.log('routeName >>', routeName , 'Type >>', type);
    let userSearchedData = [];
    userSearchCategory = routeName.toUpperCase();
    userSearchType= type.toUpperCase();
    // console.log('routeName >>', userSearchCategory , 'Type >>', userSearchType);
    //  console.log('userSearchCategory >>', userSearchCategory.toUpperCase());
    //  console.log('userSearchType >>', userSearchType.toUpperCase());
    if(userSelectType === 'buy' ){
      buyProperties.map(items =>{
        items.itemTitle = 'Available For Sell';
        const userCategory = items.propertyTypeData.nameOfCategoryUserSelected.toUpperCase();
        const userType = items.propertyTypeData.nameOfUserProperty.toUpperCase();
        const areaSizeValue = `${items.areaSizeValue} ${items.areaSizeUnit.toUpperCase()}`;
        const cityName = `${items.cityName.toUpperCase()}`
        //console.log('AreaSize Value >>', areaSizeValue);
        if(userSearchCategory === userCategory && userSearchType === userType || userSearchType === areaSizeValue
         || userSearchType === cityName){
           //console.log('Condition Match True')
           //setUserSearchData(true)
           userSearchedData.push(items);
           //console.log('Rent DAta Searched by user >>', userSearchedData);
           navigate('City', {name: `${userSearchCategory}`, userSearchedData: userSearchedData})
         }
         else {
           Alert.alert('This data does not yet exist , Try others categories');
         }
     })   
    }
    else if(userSelectType === 'rent' ){
      //console.log('RentDAta >>', rentProperties);
      rentProperties.map(items =>{
          items.itemTitle = 'Available For Rent';
          const userCategory = items.propertyTypeData.nameOfCategoryUserSelected.toUpperCase();
          const userType = items.propertyTypeData.nameOfUserProperty.toUpperCase();
          const areaSizeValue = `${items.areaSizeValue} ${items.areaSizeUnit.toUpperCase()}`;
          const cityName = `${items.cityName.toUpperCase()}`
          //console.log('AreaSize Value >>', areaSizeValue);
          if(userSearchCategory === userCategory && userSearchType === userType || userSearchType === areaSizeValue
           || userSearchType === cityName){
             //console.log('Condition Match True')
             //setUserSearchData(true)
             userSearchedData.push(items);
             //console.log('Rent DAta Searched by user >>', userSearchedData);
             navigate('City', {name: `${userSearchCategory}`, userSearchedData: userSearchedData})
           }
           else {
             Alert.alert('This data does not yet exist , Try others categories');
           }
       })
    }
    
    }

  const getAllProperties = async ()=>{
    const userData = await HttpUtilsFile.get('getproperties');
    //console.log('get properties data >>', userData);
    if(userData.code == 200){
      //console.log('Data properties >>', userData.content);
      const allProperties = userData.content;
     // console.log('All Data >>', allProperties);
      allProperties.map(items =>{
        if(items.purposeValue === 'rent' && items.status !== 'pending'){
         // console.log('Rent Items >>', items);
         rentData.push(items);
         setRentProperties(rentData);
         //console.log('Rent DAta >>', rentData);
        }
        if(items.purposeValue === 'sell' && items.status !== 'pending') {
          buyData.push(items);
          setBuyProperties(buyData)
          //console.log('Buy Data >>', buyData)
        }
      })
    }
  }

  useEffect(()=>{
    getAllProperties()
  },[])


  const getStorageData = async () => {
    const getData = await AsyncStorage.getItem("userSelectedLocation");
    // const getCurrentUser = await AsyncStorage.getItem("currentUser");
    //console.log('getCurrentUser >>',JSON.parse(getCurrentUser));
    //const parseData = JSON.parse(getCurrentUser);
    setCityName(getData);
    // setCurrentUserData(parseData);
}
useEffect(() => {
  getStorageData();
})

// Start Tab Navigation Code Here 


// End Tab Code


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
              onPress={()=>navigation.navigate('Search', {name: 'Select City'})}
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
                onFocus={()=>navigation.navigate('FILTRS')}
              />
            </View>
          </View>
          <View style={styles.browseHeading}>
            <Text style={{ fontWeight: 'bold', color: 'gray' }}>Browse Properties</Text>
          </View>
          <View style={styles.paginationContainer}>
            {<TopTabs getDataProperties={getDataProperties}/>}
          </View>
          <View style={styles.recentSearchHeading}>
            <Text style={{ fontWeight: 'bold', color: 'gray', }}>Recent Searches</Text>
          </View>
          <View style={styles.recentSearhCarosualContainer}>
            <Carousal/>
          </View>

        </ScrollView>
      </View>
    </KeyboardAwareView>
  )

}

export default Home;
