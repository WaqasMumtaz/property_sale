import React, { useState } from 'react';
import styles from './CSS/style';
//Import action method from authAction
// import { updateUser } from '../../Redux/Actions/authAction';
import AsyncStorage from '@react-native-community/async-storage';


//Import all required component
import {
  TextInput,
  View,
  Text,
  ScrollView,
  Image,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
// import AsyncStorage from '@react-native-community/async-storage';
import Loader from '../../Loader';
import HttpUtilsFile from '../../Services/HttpUtils';


const Login = props => {
  const { navigate } = props.navigation;
  let [loading, setLoading] = useState(false);
  let [errortext, setErrortext] = useState('');
  let [userEmail, setUserEmail] = useState('');
  let [emailValid, setEmailValid] = useState(true);
  //let [emailError, setEmailError] = useState(false);
  let [userPassword, setUserPassword] = useState('');
  let [passwrdValid, setPasswrdValid] = useState(false);
  let [passwordNotMatch, setPasswordNotMatch] = useState('');

  const handleSubmitPress = async () => {
    //  props.navigation.navigate('Home')
    // setErrortext('');
    if (!userEmail || !userPassword) {
      alert('Please fill all fields');
      return;
    }
    if (emailValid !== true) {
      alert('Please enter correct email');
      return;
    }
    // if (passwrdValid !== false) {
    //   alert('Please enter required password length');
    //   return;
    // }
    try {
      setLoading(true)
      const dataToSend = {
        email: userEmail,
        password: userPassword
      };
      const userData = await HttpUtilsFile.post('signin', dataToSend);
      console.log('Api user data response >>', userData);
      if (userData.code === 200) {
        setLoading(false);
         //setIsRegistraionSuccess(true);
          AsyncStorage.setItem('currentUser', JSON.stringify(userData))
          navigate('Home')
        // else {
        //   navigate('Add Property')
        // }
        setUserEmail('');
        setUserPassword('');
      }
      else if (userData.Match !== true) {
        setLoading(false);
        setPasswordNotMatch(userData.mgs);
        setUserPassword('');
        setTimeout(() => {
          setPasswordNotMatch('')
        }, 2000)

      }
    }
    catch (error) {
      console.log('This catch error >>', error)
    }

    // var formBody = [];

  };

  const validate = (text) => {
    //console.log(text);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(text) === false) {
      //console.log("Email is Not Correct");
      setUserEmail(text);
      setEmailValid(false);
      return false;
    }
    else {
      setUserEmail(text);
      setEmailValid(true);
      //console.log("Email is Correct");
    }
  }

  // const passwordValidate = (text) => {
  //   setUserPassword(text);
  //   if (userPassword.length < 3) {
  //     setPasswrdValid(true)
  //     return true;
  //   }
  //   else {
  //     setPasswrdValid(false)
  //   }
  // }

  return (
    <View style={styles.mainBody}>
      <Loader loading={loading} />
      <ScrollView keyboardShouldPersistTaps="handled">
        <View style={{ marginTop: 100 }}>
          <KeyboardAvoidingView enabled>
            <View style={{ alignItems: 'center' }}>
              <Image
                source={require('../../Images/sale.png')}
                style={{
                  width: '50%',
                  height: 100,
                  resizeMode: 'contain',
                  margin: 30,
                }}
              />
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={[styles.inputStyle, emailValid !== true ? styles.errorInput : null]}
                onChangeText={value => validate(value)}
                // underlineColorAndroid="#F6F6F7"
                placeholder="Enter Email"
                placeholderTextColor="#32CD32"
                keyboardType="email-address"
                // ref={ref => {
                //   this._emailinput = ref;
                // }}
                value={userEmail}
                autoCapitalize="none"
                autoCorrect={false}
                // onSubmitEditing={() => this._ageinput && this._ageinput.focus()}
                blurOnSubmit={false}
              />
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={value => setUserPassword(value)}
                // underlineColorAndroid="#F6F6F7"
                secureTextEntry={true}
                placeholder="Password"
                placeholderTextColor="#32CD32"

                // ref={ref => {
                //   this._ageinput = ref;
                // }}
                value={userPassword}
                // onSubmitEditing={() =>
                //   this._addressinput && this._addressinput.focus()
                // }
                blurOnSubmit={false}
              />
            </View>
            {passwordNotMatch != '' ?
              <View style={styles.instructionContainer}>
                <Text style={styles.instructionStyle}>{passwordNotMatch}</Text>
              </View>
              : null
            }
            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={handleSubmitPress}>
              <Text style={styles.buttonTextStyle}>LOGIN</Text>
            </TouchableOpacity>
            <View style={styles.registerTextContainer}>
              <Text
                style={styles.registerTextStyle}
              >
                New Here ?
            </Text>
              <Text
                style={styles.registerText}
                onPress={() => navigate('Signup')}>
                Register
            </Text>
            </View>
            {/* <Text
              style={styles.registerTextStyle}
              onPress={() => props.navigation.navigate('Signup')}>
              New Here ? Register
            </Text> */}
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
    </View>
  );
};


export default Login;