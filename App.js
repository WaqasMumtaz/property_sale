import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import Main from './src/Navigation/Main';
//import StackNav from './src/Navigation/DrawerNav';
// import DrawerNav from './src/Navigation/DrawerNav/drawerNav';

const App = () => {

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Close Splash Screen
    SplashScreen.hide();
  });

  return (
    
    <>
      <NavigationContainer>
        <Main />
      </NavigationContainer>
      
    </>
  );
};

// const styles = StyleSheet.create({
//   // scrollView: {
//   //   backgroundColor: Colors.lighter,
//   // },

// });

export default App;
