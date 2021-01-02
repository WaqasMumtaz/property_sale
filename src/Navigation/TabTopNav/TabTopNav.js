import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button, View, Text } from 'react-native';
import HomeScreen from '../../Components/Screens/TabTopScreens/HomeScreen';
import PlotsScreen from '../../Components/Screens/TabTopScreens/PlotsScreen';
import CommercialScreen from '../../Components/Screens/TabTopScreens/CommercialScreen';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();
//export const MyContext = React.createContext();
import { Provider } from '../../Context';




const TabTopNav = (props) => {
  // console.log('Props in Tabs >>', props)
  // const userHandler={
  //   myFunc:props.getPropertyData
  // }
  return (
    <Provider value={props.getPropertyData}>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#32CD32',
          inactiveTintColor: 'gray',

        }}
      >
        <Tab.Screen name="Home" component={HomeScreen}  />
        <Tab.Screen name="Plots" component={PlotsScreen} />
        <Tab.Screen name="Commercial" component={CommercialScreen} />
      </Tab.Navigator>
    </Provider>

  );
}


export default TabTopNav;
