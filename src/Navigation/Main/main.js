import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from '../../Components/Auth/Login';
import Signup from '../../Components/Auth/Signup';
import Home from '../../Components/Home';
import Properties from '../../Components/Properties';
import Carousal from '../../Components/Carousals';
import Icon from 'react-native-vector-icons/Ionicons';
import DrawerContent from '../../Components/Screens/CustomDrawer/DrawerContent';


import {
  TextInput,
  View,
  Text,
  ScrollView,
  Image,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
  Button
} from 'react-native';

const Drawer = createDrawerNavigator();
const LoginStack = createStackNavigator();
const SignupStack = createStackNavigator();

const MainStack = createStackNavigator();
const MainStackScreen = ({ navigation }) => (
  <MainStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#7DE24E',
      elevation:0,
      
    },
    headerTintColor: 'white',
    headerTitleAlign: 'center',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }}>
    <MainStack.Screen name="Home" component={Home}
      options={{
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25}
            onPress={() => navigation.openDrawer()}
            backgroundColor="#7DE24E"
            
          />
        ),
        // headerRight: () => (
        //   <Icon.Button name="search" size={25}
        //     backgroundColor="#7DE24E"
        //   />
        // )

      }}
    />
  </MainStack.Navigator>
)

const LoginScreen = ({ navigation }) => (
  <LoginStack.Navigator screenOptions={{

  }}>
    <LoginStack.Screen
      name="Login" component={Login}
    />
  </LoginStack.Navigator>
)
const SignupScreen =({navigation})=>(
  <SignupStack.Navigator screenOptions={{

  }}>
    <SignupStack.Screen
    name="Signup" component={Signup}
    />
  </SignupStack.Navigator>
)

const Main = () => {
  return (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
      {/* <Drawer.Screen name="Carousal" component={Carousal}/> */}
      <Drawer.Screen name="Home" component={MainStackScreen} />
      <Drawer.Screen name="Login" component={LoginScreen} />
      <Drawer.Screen name="Signup" component={SignupScreen} />
    </Drawer.Navigator>
  );
}

export default Main;