import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer,DefaultTheme } from '@react-navigation/native';
import Main from './src/Navigation/Main';
//import StackNav from './src/Navigation/DrawerNav';
// import DrawerNav from './src/Navigation/DrawerNav/drawerNav';

const App = () => {

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#fff'
    },
  };
  

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Close Splash Screen
    SplashScreen.hide();
  });

  return (
    
    <>
      <NavigationContainer 
      theme={MyTheme}
      >
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
