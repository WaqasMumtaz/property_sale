//Import React and Hook we needed
import React, { useState, useEffect, useRef } from 'react';
import styles from './css/style';
import TouchableButton from '../../Button/button';
import Icon from 'react-native-vector-icons/FontAwesome';
import { RadioButton } from 'react-native-paper';
import TabTopNav from '../../../Navigation/TabTopNav';
//import SelectRange from '../../Ranges';
import ModalScreen from '../../Modal';
import HttpUtilsFile from '../../Services/HttpUtils';
//import { Consumer } from '../../../Context';
import AsyncStorage from '@react-native-community/async-storage';



let nameOfUserProperty = 'houses';
let nameOfCategoryUserSelected = 'Home';
let rentData = [];
let buyData = [];

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
const data = [
  {
    id: '1',
    title: '120 SQ. YD.',
  },
  {
    id: '2',
    title: '500 SQ. YD.',

  },
  {
    id: '3',
    title: '80 SQ. YD.',

  },
  {
    id: '4',
    title: '220 SQ. YD.',


  },
  {
    id: '5',
    title: '300 SQ. YD.',


  },
  {
    id: '6',
    title: '50 SQ. YD.',


  },
  {
    id: '7',
    title: '1000 SQ. YD.',


  },
]

let areaRangeValue = 0;
let areaToRangeValue = 0;
const FilterScreen = ({ route, navigation }) => {
  //let cityName = route.params.data;
  //let cityName ="Lahore"
  //console.log('Route Data >>', navigation);
  //let cityName = 'Lahore';
  navigation.setOptions({
    headerRight: () => (
      <TouchableButton
        onPress={() => applyFilterData()}
        touchBtnStyle={{
          backgroundColor: '#32CD32',
          justifyContent: 'center', paddingHorizontal: 15
        }}
        title='Apply'
        textStyle={{ color: 'white' }}
      />
    )
  });
  // const cityName = (
  //   <Consumer>
  //     {({ cityName }) => (
  //       <Text style={{ color: '#307ecc', fontWeight: 'bold' }}>{cityName.toUpperCase()}</Text>
  // )}
  //   </Consumer>
  // )

  //Functional Component State's
  const [rentProperties, setRentProperties] = useState([]);
  const [buyProperties, setBuyProperties] = useState([]);

  const [cityName, setCityName] = useState('Lahore');
  const [modalVisible, setModalVisible] = useState(false);
  const [userSelectType, setUserSelectType] = useState('buy');
  //const [selectValue, setSelectValue] = useState('PKR');
  const [priceUnit, setPriceUnit] = useState('PKR');
  const [priceValue, setPriceValue] = useState(0);
  const [priceToValue, setPriceToValue] = useState(0);
  //const [areaSelect, setAreaSelect] = useState('Sq. Yd.');
  const [areaUnit, setAreaUnit] = useState('Sq. Yd.');
  const [areaValue, setAreaValue] = useState(0);
  const [areaToSelect, setAreaToSelect] = useState(0);
  const priceIcon = <Icon name="dollar" size={18} color="#808080" />
  const areaIcon = <Icon name="foursquare" size={18} color="#808080" />
  const [selectType, setSelectType] = useState('houses');
  const [selectedCategorey, setSelectedCategorey] = useState('Home');
  const [areaSelectWithBtn, setAreaSelectWithBtn] = useState('');
  const [bedRooms, setBedrooms] = useState(0);
  const [baths, setBaths] = useState(0);
  const [userSelectUnit, setUserSelectUnit] = useState('');


  // backgroundColor:'#DAEBDE',

  const Item = ({ title, id }) => (
    <TouchableOpacity
      key={id}
      onPress={() => setAreaSelectWithBtn(title)}
      style={[areaSelectWithBtn !== title ? styles.item : styles.selectedItem]}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>


  );

  const renderItem = ({ item }) => (
    <Item title={item.title} id={item.id} />
  );



  const getPropertyData = (routeName, userSelectProperty) => {
    // nameOfCategoryUserSelected = routeName;
    // nameOfUserProperty = userSelectProperty;
    //setUserCategory(routeName)
    setSelectedCategorey(routeName);
    setSelectType(userSelectProperty);
    //console.log('nameOfCategoryUserSelected >>', nameOfCategoryUserSelected , 'nameOfUserProperty >>', nameOfUserProperty);
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
 

  useEffect(() => {
    getAllProperties()
  }, []);
  
  useEffect(()=>{
    getStorageData();

  })

  const applyFilterData = () => {
    let userSearchedData = [];
    let userSearchDataWithPaymentRange = [];
    let dataNotFound = '';
    if (userSelectType === 'buy') {
      buyProperties.map(items => {
        items.itemTitle = 'Available For Sell';
        const userCategory = items.propertyTypeData.nameOfCategoryUserSelected.toUpperCase();
        const userType = items.propertyTypeData.nameOfUserProperty.toUpperCase();
        const propertyAreaSizeValue = `${items.areaSizeValue} ${items.areaSizeUnit.toUpperCase()}`;
        const userSelectAreaSize = `${areaValue} ${areaUnit.toUpperCase()}`;
        const userSelectAreaRange = `${areaToSelect} ${areaUnit.toUpperCase()}`;
        const propertyBedrooms = items.bedRooms;
        const propertyBaths = items.baths;
        //const propertyPriceUnite = items.priceUnit.toUpperCase();
        const propertyPrice = items.priceValue;
        const inCity = `${items.cityName.toUpperCase()}`;
        const userSelectCity = cityName.toUpperCase();
        console.log('USer Select City >>', userSelectCity)
        const userSelectPrice = priceValue;
        const userSelectPriceRange = priceToValue;
        console.log('userCategory >>', userCategory, 'userType', userType);
        //console.log('AreaSize Value >>', areaSizeValue);
        const userSelectCategory = selectedCategorey.toUpperCase();
        const userSelectType = selectType.toUpperCase();
        if (userSelectCity === inCity) {
          if (userSelectCategory === userCategory && userSelectType === userType) {
            userSearchedData.push(items);
            console.log('userSearchedData >>', userSearchedData);
            navigation.navigate('City', { name: `${userSelectCategory}`, userSearchedData: userSearchedData })
            if (priceValue != 0 || priceToValue != 0) {
              //console.log('Not Match Data')
              if (userSelectPrice <= propertyPrice || userSelectPriceRange <= propertyPrice) {
                userSearchedData.push(items);
                console.log('Searched with payment >>', userSearchedData);

              }
            }
            if (areaValue !== 0 || areaToSelect !== 0 || areaSelectWithBtn !== '') {
              if (propertyAreaSizeValue === userSelectAreaSize || propertyAreaSizeValue === userSelectAreaRange
                || propertyAreaSizeValue === areaSelectWithBtn) {
                userSearchedData.push(items);
                console.log('Searched with Area Size >>', userSearchedData);
              }
            }
            if (userCategory === 'HOME' && userType === 'HOUSES') {
              if (bedRooms !== 0 || baths !== 0) {
                if (bedRooms <= propertyBedrooms || baths <= propertyBaths) {
                  userSearchedData.push(items);
                  console.log('Searched with Bedroom or baths >>', userSearchedData);
                }
              }
            }

          }

        }
        if (userSelectCity === inCity) {
          if (userSelectCategory === userCategory && userSelectType !== userType) {
            let userSearchedData = [];
            console.log('city same but property not match >>', userSearchedData);

          }
        }
        else if (userSelectCity !== inCity) {
          let userSearchedData = [];
          console.log('city not match try other city >>', userSearchedData);
        }


      })
    }
    else if (userSelectType === 'rent') {
      rentProperties.map(items => {
        items.itemTitle = 'Available For Rent';
        const userCategory = items.propertyTypeData.nameOfCategoryUserSelected.toUpperCase();
        const userType = items.propertyTypeData.nameOfUserProperty.toUpperCase();
        const propertyAreaSizeValue = `${items.areaSizeValue} ${items.areaSizeUnit.toUpperCase()}`;
        const userSelectAreaSize = `${areaValue} ${areaUnit.toUpperCase()}`;
        const userSelectAreaRange = `${areaToSelect} ${areaUnit.toUpperCase()}`;
        const propertyBedrooms = items.bedRooms;
        const propertyBaths = items.baths;
        //const propertyPriceUnite = items.priceUnit.toUpperCase();
        const propertyPrice = items.priceValue;
        const inCity = `${items.cityName.toUpperCase()}`;
        const userSelectCity = cityName.toUpperCase;
        const userSelectPrice = priceValue;
        const userSelectPriceRange = priceToValue;
        //console.log('userCategory >>', userCategory, 'userType', userType);
        //console.log('AreaSize Value >>', areaSizeValue);
        const userSelectCategory = selectedCategorey.toUpperCase();
        const userSelectType = selectType.toUpperCase();
        if (userSelectCity === inCity) {
          if (userSelectCategory === userCategory && userSelectType === userType) {
            userSearchedData.push(items);
            console.log('userSearchedData >>', userSearchedData);
            if (priceValue != 0 || priceToValue != 0) {
              //console.log('Not Match Data')
              if (userSelectPrice <= propertyPrice || userSelectPriceRange <= propertyPrice) {
                userSearchedData.push(items);
                console.log('Searched with payment >>', userSearchedData);

              }
            }
            if (areaValue !== 0 || areaToSelect !== 0 || areaSelectWithBtn !== '') {
              if (propertyAreaSizeValue === userSelectAreaSize || propertyAreaSizeValue === userSelectAreaRange
                || propertyAreaSizeValue === areaSelectWithBtn) {
                userSearchedData.push(items);
                console.log('Searched with Area Size >>', userSearchedData);
              }
            }
            if (userCategory === 'HOME' && userType === 'HOUSES') {
              if (bedRooms !== 0 || baths !== 0) {
                if (bedRooms <= propertyBedrooms || baths <= propertyBaths) {
                  userSearchedData.push(items);
                  console.log('Searched with Bedroom or baths >>', userSearchedData);
                }
              }
            }

          }

        }
        if (userSelectCity === inCity) {
          if (userSelectCategory === userCategory && userSelectType !== userType) {
            let userSearchedData = [];
            console.log('city same but property not match >>', userSearchedData);

          }
        }
        else if (userSelectCity !== inCity) {
          let userSearchedData = [];
          console.log('city not match try other city >>', userSearchedData);
        }


      })

    }
  }

  // console.log('City Name >>', cityName);


  return (
    <>
      <View style={styles.mainContainer}>
        <ScrollView style={{ flex: 1, height: scrolHeight }}
          contentContainerStyle={{ flexGrow: 1 }}
          automaticallyAdjustContentInsets="automatic"

        >
          <View style={styles.wantContainer}>
            <Icon name="check-circle" size={25} color='gray' style={{ marginTop: 5 }} />
            <Text style={{ marginRight: 62, marginTop: 8 }}>i want to</Text>
            {/* <Icon name="angle-right" size={20}/> */}
            <View style={{ flexDirection: 'row', marginLeft: 22, }}>
              <RadioButton
                value={userSelectType}
                status={userSelectType === 'buy' ? 'checked' : 'unchecked'}
                onPress={() => setUserSelectType('buy')}
                color='#7DE24E'
              />
              <Text style={[userSelectType !== 'buy' ? styles.unCheck : styles.check]}>Buy</Text>
            </View>
            <View style={{ flexDirection: 'row', marginRight: 5 }}>
              <RadioButton
                value={userSelectType}
                status={userSelectType === 'rent' ? 'checked' : 'unchecked'}
                onPress={() => setUserSelectType('rent')}
                color='#7DE24E'
              />
              <Text style={[userSelectType !== 'rent' ? styles.unCheck : styles.check]}>Rent</Text>
            </View>
          </View>
          <View style={styles.cityContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Search', { name: "Select City" })}
              style={styles.selectCity}
            >
              <Icon name="map-marker" color='gray' size={25} />
              <Text>City :</Text>
              <Text style={{ color: '#307ecc', fontWeight: 'bold' }}>{cityName}</Text>
              <Icon name="angle-right" color='gray' size={25} />
            </TouchableOpacity>
            {/* <Text style={{marginLeft:38, color:'#307ecc'}}>Karachi</Text> */}
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('Search', { name: "Select Location" })}
            style={styles.locationContainer}
          >
            <View style={styles.iconOrText}>
              <Icon name="building-o" color="gray" size={20} />
              <Text style={{ marginLeft: 20 }}>Select Locations</Text>
            </View>
            <View style={styles.iconRight}>
              <Icon name="angle-right" color="gray" size={25} />
            </View>
            {/* <Text>Icon</Text> */}
          </TouchableOpacity>
          <Text style={{ fontWeight: 'bold', color: 'gray', marginTop: 25 }}>Browse Property</Text>
          <View style={styles.browsPropertyContainer}>
            {<TabTopNav getPropertyData={getPropertyData} />}
          </View>
          <View style={styles.borderLine}></View>
          <View style={styles.priceRange}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <View style={{
                width: '30%', flexDirection: 'row',
                justifyContent: 'space-between', paddingVertical: 10
              }}>
                {/* <Icon name="calculator" size={15} color="#D3D3D3"/> */}
                {priceIcon}
                <Text>Price Range</Text>
              </View>
              <View style={{ width: '30%' }}>
                <TouchableOpacity
                  onPress={() => { setModalVisible(true), setUserSelectUnit('price-unit') }}
                  style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 10 }}
                >
                  <Text>{priceUnit}</Text>
                  <Icon name="caret-down" size={18} color="#000" />
                </TouchableOpacity>
              </View>
            </View>
            <View >
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <TextInput
                  placeholder="0"
                  style={{ height: 40, backgroundColor: '#ebe9e6', width: '30%', borderRadius: 10 }}
                  onChangeText={(value) => setPriceValue(value)}
                  keyboardType="numeric"
                  value={priceValue}
                />
                <Text style={{ paddingVertical: 10 }}>TO</Text>
                <TextInput
                  placeholder="any"
                  style={{ height: 40, backgroundColor: '#ebe9e6', width: '30%', borderRadius: 10 }}
                  onChangeText={(value) => setPriceToValue(value)}
                  keyboardType="numeric"
                  value={priceToValue}
                />
              </View>
            </View>
            {/* {<SelectRange
              title='Price Range'
              selectValue={selectValue}
              setIcon={priceIcon}
              textInputFunc={textInputFunc}
            />} */}
          </View>
          <View style={styles.borderLine}></View>
          <View style={styles.areaRange}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <View style={{
                width: '30%', flexDirection: 'row',
                justifyContent: 'space-between', paddingVertical: 10
              }}>
                {/* <Icon name="calculator" size={15} color="#D3D3D3"/> */}
                {areaIcon}
                <Text>Area Range</Text>
              </View>
              <View style={{ width: '30%' }}>
                <TouchableOpacity
                  onPress={() => { setModalVisible(true), setUserSelectUnit('area-size') }}
                  style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 10 }}
                >
                  <Text>{areaUnit}</Text>
                  <Icon name="caret-down" size={18} color="#000" />
                </TouchableOpacity>
              </View>
            </View>
            <View >
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <TextInput
                  placeholder="0"
                  style={{ height: 40, backgroundColor: '#ebe9e6', width: '30%', borderRadius: 10 }}
                  onChangeText={(value) => setAreaValue(value)}
                  keyboardType="numeric"
                  value={areaValue}
                />
                <Text style={{ paddingVertical: 10 }}>TO</Text>
                <TextInput
                  placeholder="any"
                  style={{ height: 40, backgroundColor: '#ebe9e6', width: '30%', borderRadius: 10 }}
                  onChangeText={(value) => setAreaToSelect(value)}
                  keyboardType="numeric"
                  vlaue={areaToSelect}
                />
              </View>
            </View>
            {/* {<SelectRange
              title='Area Range'
              selectValue={areaSelect}
              setIcon={areaIcon}
              textInputFunc={textInputFunc}

            />} */}
            <View style={styles.areaBtnsContainer}>
              <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                horizontal={true}
              // numColumns={3}

              />
            </View>
          </View>
          {modalVisible ?
            <View>
              <ModalScreen
                setModalVisible={setModalVisible}
                visible={modalVisible}
                centeredView={styles.centeredView}
                modalView={styles.modalView}
                animationType="fade"
                transparent={true}
                userSelectUnit={userSelectUnit}
                borderLine={styles.borderLine}
                priceUnit={priceUnit}
                setPriceUnit={setPriceUnit}
                areaUnit={areaUnit}
                setAreaUnit={setAreaUnit}

              />
            </View>
            :
            null
          }

          <View style={styles.borderLine}></View>
          {selectedCategorey === 'Home' && selectType === 'houses' ?
            <>
              <View style={styles.bedRoomTitleIcon}>
                <Icon name="bed" size={18} color="#808080" />
                <Text style={{ marginLeft: 10 }}>Bedrooms</Text>
              </View>
              <View style={styles.bedRoomsContainer}>
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
                {/* <TouchableOpacity style={styles.btnsStyle}>
                  <Text>10+</Text>
                </TouchableOpacity> */}
              </View>
              <View style={styles.borderLine}></View>
              <View style={styles.bedRoomTitleIcon}>
                <Icon name="bath" size={18} color="#808080" />
                <Text style={{ marginLeft: 10 }}>Bathrooms</Text>
              </View>
              <View style={styles.bathroomsContainer}>
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
            </>
            :
            null

          }
          <View style={styles.borderLine}></View>
          <View style={{ flexDirection: "row", marginTop: 20 }}>
            <Icon name="check" size={18} color="#808080" />
            <Text style={{ marginLeft: 10 }}>Add Keyword</Text>
          </View>
          <View style={styles.addBtnContainer}>
            <TextInput
              placeholder="Try furnished, Low price etc."
              placeholderTextColor="#808080"
              style={styles.addKeyInput}
            />
            <TouchableOpacity style={styles.addBtn}>
              <Icon name="plus" size={20} color="#7DE24E" />
            </TouchableOpacity>
          </View>

        </ScrollView>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.btnsContainer}>
          <TouchableButton
            title='Reset'
            touchBtnStyle={styles.resetBtnStyle}
            textStyle={styles.resetText}
          />
          <TouchableButton
            title='Show 1000+ Ads'
            touchBtnStyle={styles.adsBtnStyle}
            textStyle={styles.adsText}
          />
        </View>

      </View>
    </>
  )
}

export default FilterScreen;