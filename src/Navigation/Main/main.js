import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from '../../Components/Auth/Login';
import Signup from '../../Components/Auth/Signup';
import Home from '../../Components/Home';
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

const MainStack = createStackNavigator();
const MainStackScreen = ({ navigation }) => (
  <MainStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#7DE24E'
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
        headerRight: () => (
          <Icon.Button name="search" size={25}
            backgroundColor="#7DE24E"
          />
        )

      }}
    />
  </MainStack.Navigator>
)

const Main = () => {
  return (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}
    >
      <Drawer.Screen name="Home" component={MainStackScreen} />
      <Drawer.Screen name="Login" component={Login} />
      <Drawer.Screen name="Signup" component={Signup} />
    </Drawer.Navigator>
  );
}

export default Main;