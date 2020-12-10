import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from '../../Components/Auth/Login';
import Signup from '../../Components/Auth/Signup';
import Home from '../../Components/Home';
import FilterScreen from '../../Components/Screens/FilterScreen/filterScreen';
import TouchableButton from '../../Components/Button/button';
import Icon from 'react-native-vector-icons/Ionicons';
import DrawerContent from '../../Components/Screens/CustomDrawer/DrawerContent';
import SelectRange from '../../Components/Ranges';


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
const Stack = createStackNavigator();

const MainStack = createStackNavigator();
const MainStackScreen = ({ navigation }) => (
  <MainStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#7DE24E',
      elevation: 0,

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
// const FilterStackScreen = ({ navigation }) => (
//   <Stack.Navigator>
//     <Stack.Screen name="Filter" component={FilterScreen} />
//   </Stack.Navigator>
// )

// const LoginScreen = ({ navigation }) => (
//   <LoginStack.Navigator>
//     <LoginStack.Screen
//       name="Login" component={Login}
//     />
//   </LoginStack.Navigator>
// )
// const SignupScreen = ({ navigation }) => (
//   <SignupStack.Navigator screenOptions={{

//   }}>
//     <SignupStack.Screen
//       name="Signup" component={Signup}
//     />
//   </SignupStack.Navigator>
// )

const DrawerMain=()=>(
<Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
      {/* <Drawer.Screen name="Carousal" component={Carousal}/> */}
      <Drawer.Screen name="Home" component={MainStackScreen} />
    </Drawer.Navigator>
)

const Main = () => {
  return (
    <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#7DE24E',
      },
      headerTintColor: 'white',
    }}
    >
      {/* <Stack.Screen name="Range" component={SelectRange}/> */}
      <Stack.Screen name="Home" component={DrawerMain}
      options={{
        headerShown:false
      }}
      />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="FILTRS" component={FilterScreen}
      options={{
        headerRight:()=>(
          <TouchableButton 
             touchBtnStyle={{backgroundColor:'#7DE24E',
             justifyContent:'center',paddingHorizontal:15}}
             title='Apply'
             textStyle={{color:'white'}}
          />
        )
      }}
      />
    </Stack.Navigator>
  );
}

export default Main;