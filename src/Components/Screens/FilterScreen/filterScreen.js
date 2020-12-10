//Import React and Hook we needed
import React, { useState, useEffect } from 'react';
import styles from './css/style';
import TouchableButton from '../../Button/button';
import Icon from 'react-native-vector-icons/FontAwesome';
import { RadioButton } from 'react-native-paper';
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

const Item = ({ title, icon }) => (
  // <View style={styles.itemsContainer}>
  <>
    <TouchableOpacity style={styles.item}>
      <Text>ICON</Text>
    </TouchableOpacity>
    <View style={styles.itemsTitle}>
      <Text style={styles.title}>{title}</Text>
    </View>
  </>
  // </View>

);

const HomeScreen = () => {
      const [userSelectProperty , setUserSelectProperty] = useState('all');
  return (
    
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
    <View style={{ flex: 1, paddingVertical: 15 }}>
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
          marginLeft:12 ,
          justifyContent:'space-between',alignItems:'center'}}>
        <TouchableOpacity 
        onPress={()=>setUserSelectProperty('all')}
        // style={{alignItems:'center',justifyContent:'center'}}
        >
        <Text style={[userSelectProperty !== 'all' ? styles.textStyle : styles.slctTextStyle]}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={()=>setUserSelectProperty('residential')}
        // style={{justifyContent:'center', backgroundColor:'red',}}
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
    <View style={{ flex: 1, paddingVertical: 15, }}>
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
      // screenOptions={({ route }) => ({
      //   tabBarIcon: () => (
      //     <Icon name="Home" size="20"/>
      //   )})}
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


const FilterScreen = (props) => {
  const [userSelectType, setUserSelectType] = useState('buy');

  const shadowStyle = {
    shadowOpacity: 1
  }

  return (
    <>
      <View style={styles.mainContainer}>
        <ScrollView style={{ flex: 1, height: scrolHeight }}
          contentContainerStyle={{ flexGrow: 1 }}
          automaticallyAdjustContentInsets="automatic"
        >
          <View style={[styles.wantContainer, shadowStyle]}>
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