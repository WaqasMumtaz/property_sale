import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from '../../Components/Auth/Login';
import Signup from '../../Components/Auth/Signup';
import Home from '../../Components/Home';
import FilterScreen from '../../Components/Screens/FilterScreen/filterScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import CityPropties from '../../Components/CityProperties';
import DetailProperty from '../../Components/Screens/DetailProperty';
import AddProperty from '../../Components/Screens/AddProperty';
import Search from '../../Components/Screens/Search';
import MapScreen from '../../Components/Map';
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
const Stack = createStackNavigator();

const MainStack = createStackNavigator();
const MainStackScreen = ({ navigation }) => (
  <MainStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#32CD32',
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
            backgroundColor="#32CD32"

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
        backgroundColor: '#32CD32',
      },
      headerTintColor: 'white',
    }}
    > 
      <Stack.Screen name="Home" component={DrawerMain}
      options={{
        headerShown:false
      }}
      />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="FILTRS" component={FilterScreen}/>
      <Stack.Screen name="City" component={CityPropties}
      options={({ route }) => ({ title: route.params.name })}
      />
      <Stack.Screen name="Details" component={DetailProperty}
      options={{
        title:'Property Details'
      }}
      />
      <Stack.Screen name="Add Property" component={AddProperty}/>
      <Stack.Screen name="Search" component={Search}/>
      <Stack.Screen name="Map" component={MapScreen}/>


    </Stack.Navigator>
  );
}

export default Main;