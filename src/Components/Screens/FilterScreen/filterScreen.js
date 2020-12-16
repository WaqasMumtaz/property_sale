//Import React and Hook we needed
import React, { useState, useEffect } from 'react';
import styles from './css/style';
import TouchableButton from '../../Button/button';
import Icon from 'react-native-vector-icons/FontAwesome';
import { RadioButton } from 'react-native-paper';
import TabTopNav from '../../../Navigation/TabTopNav';
import SelectRange from '../../Ranges';





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
    title: '120 - 125 Sq. Yd',
  },
  {
    id: '2',
    title: '500 Sq. Yd',

  },
  {
    id: '3',
    title: '80 Sq. Yd',

  },
  {
      id: '4',
      title: '240 - 250 Sq. Yd',
     

    },
    {
      id: '5',
      title: '300 Sq. Yd',
     

    },
    {
      id: '6',
      title: '50 - 60 Sq. Yd',
     

    },
    {
      id: '7',
      title: '1000 Sq. Yd',
     

    },
]

const Item = ({ title  }) => (
  <TouchableOpacity style={styles.item}>
      <Text style={styles.title}>{title}</Text>
  </TouchableOpacity>


);



const FilterScreen = ({navigation}) => {
  navigation.setOptions({
    headerRight:()=>(
      <TouchableButton 
         onPress={()=>navigation.navigate('City', {name:'Homes In Karachi'})}
         touchBtnStyle={{backgroundColor:'#32CD32',
         justifyContent:'center',paddingHorizontal:15}}
         title='Apply'
         textStyle={{color:'white'}}
      />
    )
  });

  const renderItem = ({ item }) => (
    <Item title={item.title} para={item.para} />
);
  const [userSelectType, setUserSelectType] = useState('buy');
  const [selectValue , setSelectValue]= useState('PKR');
  const [areaSelect , setAreaSelect]= useState('Sq. Yd')
  const priceIcon = <Icon name="dollar" size={18} color="#808080"/>
  const areaIcon = <Icon name="foursquare" size={18} color="#808080"/>

  // const shadowStyle = {
  //   shadowOpacity: 1
  // }

  return (
    <>
      <View style={styles.mainContainer}>
        <ScrollView style={{ flex: 1, height: scrolHeight}}
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
            onPress={()=>navigation.navigate('Search', {name:"Select City"})}
            style={styles.selectCity}
            >
              <Icon name="map-marker" color='gray' size={25} />
              <Text style={{ marginRight: 225 }}>City{"\n"}Karachi</Text>
              <Icon name="angle-right" color='gray' size={25} />
            </TouchableOpacity>
            {/* <Text style={{marginLeft:38, color:'#307ecc'}}>Karachi</Text> */}
          </View>
          <TouchableOpacity 
            onPress={()=>navigation.navigate('Search', {name:"Select Location"})}
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
             {<TabTopNav/>}
          </View>
           <View style={styles.borderLine}></View>
          <View style={styles.priceRange}>
           {<SelectRange
            title='Price Range'
            selectValue={selectValue}
            setIcon={priceIcon}
           />}
          </View>
          <View style={styles.borderLine}></View>
          <View style={styles.areaRange}>
           {<SelectRange
            title='Area Range'
            selectValue={areaSelect}
            setIcon={areaIcon}
           />}
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
          <View style={styles.borderLine}></View>
          <View style={styles.bedRoomTitleIcon}>
          <Icon name="bed" size={18} color="#808080"/>
          <Text style={{marginLeft:10}}>Bedrooms</Text>
          </View>
          <View style={styles.bedRoomsContainer}>
             <TouchableOpacity style={styles.btnsStyle}>
                   <Text>Studio</Text>
             </TouchableOpacity>
             <TouchableOpacity style={styles.btnsStyle}>
                   <Text>1</Text>
             </TouchableOpacity>
             <TouchableOpacity style={styles.btnsStyle}>
                   <Text>2</Text>
             </TouchableOpacity>
             <TouchableOpacity style={styles.btnsStyle}>
                   <Text>3</Text>
             </TouchableOpacity>
             <TouchableOpacity style={styles.btnsStyle}>
                   <Text>4</Text>
             </TouchableOpacity>
             <TouchableOpacity style={styles.btnsStyle}>
                   <Text>5</Text>
             </TouchableOpacity>
             <TouchableOpacity style={styles.btnsStyle}>
                   <Text>6</Text>
             </TouchableOpacity>
             <TouchableOpacity style={styles.btnsStyle}>
                   <Text>7</Text>
             </TouchableOpacity>
             <TouchableOpacity style={styles.btnsStyle}>
                   <Text>8</Text>
             </TouchableOpacity>
             <TouchableOpacity style={styles.btnsStyle}>
                   <Text>9</Text>
             </TouchableOpacity>
             <TouchableOpacity style={styles.btnsStyle}>
                   <Text>10+</Text>
             </TouchableOpacity>
          </View>
          <View style={styles.borderLine}></View>
          <View style={styles.bedRoomTitleIcon}>
          <Icon name="bath" size={18} color="#808080"/>
          <Text style={{marginLeft:10}}>Bathrooms</Text>
          </View>
          <View style={styles.bathroomsContainer}>
          <TouchableOpacity style={styles.btnsStyle}>
                   <Text>1</Text>
             </TouchableOpacity>
             <TouchableOpacity style={styles.btnsStyle}>
                   <Text>2</Text>
             </TouchableOpacity>
             <TouchableOpacity style={styles.btnsStyle}>
                   <Text>3</Text>
             </TouchableOpacity>
             <TouchableOpacity style={styles.btnsStyle}>
                   <Text>4</Text>
             </TouchableOpacity>
             <TouchableOpacity style={styles.btnsStyle}>
                   <Text>5</Text>
             </TouchableOpacity>
             <TouchableOpacity style={styles.btnsStyle}>
                   <Text>6+</Text>
             </TouchableOpacity>
          </View>
          <View style={styles.borderLine}></View>
          <View style={{flexDirection:"row",marginTop:20}}>
           <Icon name="check" size={18} color="#808080"/>
            <Text style={{marginLeft:10}}>Add Keyword</Text>
          </View>
          <View style={styles.addBtnContainer}>
             <TextInput
             placeholder="Try furnished, Low price etc."
             placeholderTextColor="#808080"
             style={styles.addKeyInput}
             />
            <TouchableOpacity style={styles.addBtn}>
            <Icon name="plus" size={20} color="#7DE24E"/>
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