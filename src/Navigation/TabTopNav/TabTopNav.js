import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button, View , Text } from 'react-native';
import HomeScreen from '../../Components/Screens/TabTopScreens/HomeScreen';
import PlotsScreen from '../../Components/Screens/TabTopScreens/PlotsScreen';
import CommercialScreen from '../../Components/Screens/TabTopScreens/CommercialScreen';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();




const TabTopNav = () => {
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
  

export default TabTopNav;
