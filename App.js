import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import Main from './src/Navigation/Main';
//import StackNav from './src/Navigation/DrawerNav';
// import DrawerNav from './src/Navigation/DrawerNav/drawerNav';
import { Provider } from './src/Context';


const App = () => {

  const [cityName, setCityName] = useState('Lahore');

  const cityChangeFun = (value) => {
    setCityName(value);
  }

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

  const data = {
    cityName:cityName,
    cityChangeFun:cityChangeFun
  }

  return (

    <>
      <Provider value={data}>
        <NavigationContainer
          theme={MyTheme}
        >
          <Main />
        </NavigationContainer>
      </Provider>


    </>
  );
};

// const styles = StyleSheet.create({
//   // scrollView: {
//   //   backgroundColor: Colors.lighter,
//   // },

// });

export default App;
