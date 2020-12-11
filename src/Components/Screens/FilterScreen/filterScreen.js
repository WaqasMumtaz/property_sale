//Import React and Hook we needed
import React, { useState, useEffect } from 'react';
import styles from './css/style';
import TouchableButton from '../../Button/button';
import Icon from 'react-native-vector-icons/FontAwesome';
import { RadioButton } from 'react-native-paper';
import SelectRange from '../../Ranges';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();




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

const HomeScreen = () => {
 
      const [userSelectProperty , setUserSelectProperty] = useState('all');
  return (
    
    <View style={{paddingVertical: 15,}}>
      <View style={{
       flexDirection:'row',
       justifyContent:'space-between',
      alignItems:'center'
      }}>
        <TouchableOpacity 
        onPress={()=>setUserSelectProperty('all')}
        style={[userSelectProperty !== 'all' ? styles.iconBtn : styles.iconBtnSelectd]}
        >
          <Icon name="clone" size={20} style={[userSelectProperty !== 'all' ? styles.iconStyle : styles.selctdIcon]}/>
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={()=>setUserSelectProperty('home')}
        style={[userSelectProperty !== 'home' ? styles.iconBtn : styles.iconBtnSelectd]}
        >
          <Icon name="home" size={20} style={[userSelectProperty !== 'home' ? styles.iconStyle : styles.selctdIcon]}/>
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={()=>setUserSelectProperty('building')}
        style={[userSelectProperty !== 'building' ? styles.iconBtn : styles.iconBtnSelectd]}
        >
          <Icon name="building" size={20} style={[userSelectProperty !== 'building' ? styles.iconStyle : styles.selctdIcon]}/>
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={()=>setUserSelectProperty('uperPortion')}
        style={[userSelectProperty !== 'uperPortion' ? styles.iconBtn : styles.iconBtnSelectd]}
        >
          <Icon name="university" size={20} style={[userSelectProperty !== 'uperPortion' ? styles.iconStyle : styles.selctdIcon]}/>
        </TouchableOpacity>
      </View>

      <View style={{flexDirection:'row', 
          marginLeft:12 ,
          justifyContent:'space-between',alignItems:'center'}}>
        <TouchableOpacity 
        onPress={()=>setUserSelectProperty('all')}
        // style={{backgroundColor:'red',alignItems:'center',flexDirection:'row'}}
        >
        <Text style={[userSelectProperty !== 'all' ? styles.textStyle : styles.slctTextStyle]}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={()=>setUserSelectProperty('home')}
        >
        <Text style={[userSelectProperty !== 'home' ? styles.textStyle : styles.slctTextStyle]}>Houses</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={()=>setUserSelectProperty('building')}
        >
        <Text style={[userSelectProperty !== 'building' ? styles.textStyle : styles.slctTextStyle]}>Flats</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={()=>setUserSelectProperty('uperPortion')}
        >
        <Text style={[userSelectProperty !== 'uperPortion' ? styles.textStyle : styles.slctTextStyle]}>Uper{"\n"}Portion</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const PlotsScreen = () => {
  const [userSelectProperty , setUserSelectProperty] = useState('all');
  return (
    <View style={{paddingVertical: 15 ,}}>
      <View style={{paddingVertical: 15, }}>
      <View style={{
       flexDirection:'row',
       justifyContent:'space-between',
      //  marginHorizontal:10
      }}>
        <TouchableOpacity 
        onPress={()=>setUserSelectProperty('all')}
        style={[userSelectProperty !== 'all' ? styles.iconBtn : styles.iconBtnSelectd]}
        >
          <Icon name="clone" size={20} style={[userSelectProperty !== 'all' ? 
          styles.iconStyle : styles.selctdIcon]}/>
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={()=>setUserSelectProperty('residential')}
        style={[userSelectProperty !== 'residential' ? styles.iconBtn : styles.iconBtnSelectd]}
        >
          <Icon name="home" size={20} style={[userSelectProperty !== 'residential' ? styles.iconStyle : styles.selctdIcon]}/>
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={()=>setUserSelectProperty('comercialPlot')}
        style={[userSelectProperty !== 'comercialPlot' ? styles.iconBtn : styles.iconBtnSelectd]}
        >
          <Icon name="building" size={20} style={[userSelectProperty !== 'comercialPlot' ? styles.iconStyle : styles.selctdIcon]}/>
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={()=>setUserSelectProperty('agricultural')}
        style={[userSelectProperty !== 'agricultural' ? styles.iconBtn : styles.iconBtnSelectd]}
        >
          <Icon name="university" size={20} style={[userSelectProperty !== 'agricultural' ? styles.iconStyle : styles.selctdIcon]}/>
        </TouchableOpacity>
      </View>

      <View style={{flexDirection:'row', 
           marginTop:7 ,
          justifyContent:'space-between',alignItems:'center',}}>
        <TouchableOpacity 
        onPress={()=>setUserSelectProperty('all')}
        // style={{alignItems:'center',justifyContent:'center'}}
        >
        <Text style={[userSelectProperty !== 'all' ? styles.textStyle : styles.slctTextStyle]}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={()=>setUserSelectProperty('residential')}
        // style={{m, backgroundColor:'red',}}
        >
        <Text style={[userSelectProperty !== 'residential' ? styles.textStyle : styles.slctTextStyle]}>Residential</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={()=>setUserSelectProperty('comercialPlot')}
        >
        <Text style={[userSelectProperty !== 'comercialPlot' ? styles.textStyle : styles.slctTextStyle]}>Commercial</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={()=>setUserSelectProperty('agricultural')}
        >
        <Text style={[userSelectProperty !== 'agricultural' ? styles.textStyle : styles.slctTextStyle]}>Agricultural </Text>
        </TouchableOpacity>
      </View>
    </View>
    </View>
  );
}

const CommercialScreen = () => {
  const [userSelectProperty , setUserSelectProperty] = useState('all');
  return (
    <View style={{ paddingVertical: 15, }}>
       <View style={{paddingVertical: 15, }}>
      <View style={{
       flexDirection:'row',
       justifyContent:'space-between',
       alignItems:'center'
      }}>
        <TouchableOpacity 
        onPress={()=>setUserSelectProperty('all')}
        style={[userSelectProperty !== 'all' ? styles.iconBtn : styles.iconBtnSelectd]}
        >
          <Icon name="clone" size={20} style={[userSelectProperty !== 'all' ? styles.iconStyle : styles.selctdIcon]}/>
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={()=>setUserSelectProperty('office')}
        style={[userSelectProperty !== 'office' ? styles.iconBtn : styles.iconBtnSelectd]}
        >
          <Icon name="home" size={20} style={[userSelectProperty !== 'office' ? styles.iconStyle : styles.selctdIcon]}/>
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={()=>setUserSelectProperty('shop')}
        style={[userSelectProperty !== 'shop' ? styles.iconBtn : styles.iconBtnSelectd]}
        >
          <Icon name="building" size={20} style={[userSelectProperty !== 'shop' ? styles.iconStyle : styles.selctdIcon]}/>
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={()=>setUserSelectProperty('warehouse')}
        style={[userSelectProperty !== 'warehouse' ? styles.iconBtn : styles.iconBtnSelectd]}
        >
          <Icon name="university" size={20} style={[userSelectProperty !== 'warehouse' ? styles.iconStyle : styles.selctdIcon]}/>
        </TouchableOpacity>
      </View>

      <View style={{flexDirection:'row', 
          marginLeft:12 ,
          justifyContent:'space-between',alignItems:'center'}}>
        <TouchableOpacity 
        onPress={()=>setUserSelectProperty('all')}
        // style={{alignItems:'center',justifyContent:'center'}}
        >
        <Text style={[userSelectProperty !== 'all' ? styles.textStyle : styles.slctTextStyle]}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={()=>setUserSelectProperty('office')}
        >
        <Text style={[userSelectProperty !== 'office' ? styles.textStyle : styles.slctTextStyle]}>Office</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={()=>setUserSelectProperty('shop')}
        >
        <Text style={[userSelectProperty !== 'shop' ? styles.textStyle : styles.slctTextStyle]}>Shop</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={()=>setUserSelectProperty('warehouse')}
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


const FilterScreen = ({navigation}) => {
  navigation.setOptions({
    headerRight:()=>(
      <TouchableButton 
         onPress={()=>navigation.navigate('City', {name:'Homes In Karachi'})}
         touchBtnStyle={{backgroundColor:'#7DE24E',
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
            <TouchableOpacity style={styles.selectCity}>
              <Icon name="map-marker" color='gray' size={25} />
              <Text style={{ marginRight: 225 }}>City{"\n"}Karachi</Text>
              <Icon name="angle-right" color='gray' size={25} />
            </TouchableOpacity>
            {/* <Text style={{marginLeft:38, color:'#307ecc'}}>Karachi</Text> */}
          </View>
          <View style={styles.locationContainer}>
            <TouchableOpacity style={styles.iconOrText}>
              <Icon name="building-o" color="gray" size={20} />
              <Text style={{ marginLeft: 20 }}>Select Locations</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconRight}>
              <Icon name="angle-right" color="gray" size={25} />
            </TouchableOpacity>
            {/* <Text>Icon</Text> */}
          </View>
          <Text style={{ fontWeight: 'bold', color: 'gray', marginTop: 25 }}>Browse Property</Text>
          <View style={styles.browsPropertyContainer}>
             {<MyTabs/>}
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