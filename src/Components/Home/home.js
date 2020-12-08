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
  Dimensions
} from 'react-native';
// import Loader from '../../Loader';
import { KeyboardAwareView } from 'react-native-keyboard-aware-view';
import Icon from 'react-native-vector-icons/FontAwesome';
import Properties from '../Properties';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

//const image = { uri: "https://reactjs.org/logo-og.png" };
const { scrolHeight } = Dimensions.get('window').height;

const Tab = createMaterialTopTabNavigator();
const HomeScreen = () => {

  const data = [
    {
      id: '1',
      title: '250 Sq. Yd',
      para: 'Houses'
    },
    {
      id: '2',
      title: '120 Sq. Yd',
      para: 'Houses'

    },
    {
      id: '3',
      title: '80 Sq. Yd',
      para: 'Houses'

    },
    {
      id: '4',
      title: 'On Installment',
      para: 'Flats'
    },
    {
      id: '5',
      title: 'Low Price',
      para: 'Houses'
    },
    {
      id: '6',
      title: 'Under 20 Lacs',
      para: 'Flats'
    },

  ]

  return (
    <View style={{ flex: 1, paddingVertical: 15, backgroundColor: '#fff' }}>
      {<Properties data={data} />}
    </View>
  );
}

const PlotsScreen = () => {
  const data = [
    {
      id: '1',
      title: '250 Sq. Yd',
      para: 'Houses'
    },
    {
      id: '2',
      title: '120 Sq. Yd',
      para: 'Houses'

    },
    {
      id: '3',
      title: '80 Sq. Yd',
      para: 'Houses'

    },
    {
      id: '4',
      title: 'On Installment',
      para: 'Flats'
    },
    {
      id: '5',
      title: 'Low Price',
      para: 'Houses'
    },
    {
      id: '6',
      title: 'Under 20 Lacs',
      para: 'Flats'
    },

  ]
  return (
    <View style={{ flex: 1, paddingVertical: 15, backgroundColor: '#fff' }}>
      {<Properties data={data} />}
    </View>
  );
}

const CommercialScreen = () => {
  const data = [
    {
      id: '1',
      title: '250 Sq. Yd',
      para: 'Houses'
    },
    {
      id: '2',
      title: '120 Sq. Yd',
      para: 'Houses'

    },
    {
      id: '3',
      title: '80 Sq. Yd',
      para: 'Houses'

    },
    {
      id: '4',
      title: 'On Installment',
      para: 'Flats'
    },
    {
      id: '5',
      title: 'Low Price',
      para: 'Houses'
    },
    {
      id: '6',
      title: 'Under 20 Lacs',
      para: 'Flats'
    },

  ]
  return (
    <View style={{ flex: 1, paddingVertical: 15, backgroundColor: '#fff' }}>
      {<Properties data={data} />}
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



const Home = ({navigation}) => {

  const [userSelectType, setUserSelectType] = useState('buy');

  // useEffect(()=>{
  //   console.log('State Value >>', userSelectType);

  // },[])


  return (
    <KeyboardAwareView animated={true}>
      <View style={styles.mainContainer}>
        <ScrollView style={{ flex: 1, backgroundColor: 'white', height: scrolHeight }}
          contentContainerStyle={{ flexGrow: 1 }}
          automaticallyAdjustContentInsets="automatic"
        >
          <View style={styles.toggleContainer}>
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
              <TouchableOpacity style={styles.cityBtn}>
                <Text style={{ color: '#307ecc', fontWeight: 'bold' }}>Karachi</Text>
              </TouchableOpacity>
              <Icon name="arrow-circle-right" size={15}
                style={styles.iconStyle}
              />
              <View style={styles.line}></View>
              <TextInput
                placeholder="Search Properties for Sale "
                style={styles.inputTexts}
                onFocus={()=>navigation.navigate('FILTRS')}
              />
            </View>
          </View>
          <View style={styles.browseHeading}>
            <Text style={{ fontWeight: 'bold', color: 'gray' }}>Browse Properties</Text>
          </View>
          <View style={styles.paginationContainer}>
            {<MyTabs />}
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
