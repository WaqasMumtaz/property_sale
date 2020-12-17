/* This is an Login Registration example from https://aboutreact.com/ */
/* https://aboutreact.com/react-native-login-and-signup/ */

//Import React and Hook we needed
import React, { useState } from 'react';
import styles from './CSS/style';
import { RadioButton } from 'react-native-paper';


//Import all required component
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  Keyboard,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Loader from '../../Loader';

const Signup = props => {
  let [userName, setUserName] = useState('');
  let [userEmail, setUserEmail] = useState('');
  let [userAge, setUserAge] = useState('');
  let [userAddress, setUserAddress] = useState('');
  let [loading, setLoading] = useState(false);
  let [errortext, setErrortext] = useState('');
  let [isRegistraionSuccess, setIsRegistraionSuccess] = useState(false);
  const [userSelectType, setUserSelectType] = useState('buyer');

  const handleSubmitButton = () => {
    setErrortext('');
    if (!userName) {
      alert('Please fill Name');
      return;
    }
    if (!userEmail) {
      alert('Please fill Email');
      return;
    }
    if (!userAge) {
      alert('Please fill Age');
      return;
    }
    if (!userAddress) {
      alert('Please fill Address');
      return;
    }
    //Show Loader
    setLoading(true);
    var dataToSend = {
      user_name: userName,
      user_email: userEmail,
      user_age: userAge,
      user_address: userAddress,
    };
    // setLoading(false);
    console.log('Register Data User >>', dataToSend);
    // var formBody = [];
    // for (var key in dataToSend) {
    //   var encodedKey = encodeURIComponent(key);
    //   var encodedValue = encodeURIComponent(dataToSend[key]);
    //   formBody.push(encodedKey + '=' + encodedValue);
    // }
    // formBody = formBody.join('&');

    // fetch('https://aboutreact.herokuapp.com/register.php', {
    //   method: 'POST',
    //   body: formBody,
    //   headers: {
    //     //Header Defination
    //     'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    //   },
    // })
    //   .then(response => response.json())
    //   .then(responseJson => {
    //     //Hide Loader
    //     setLoading(false);
    //     console.log(responseJson);
    //     // If server response message same as Data Matched
    //     if (responseJson.status == 1) {
    //       setIsRegistraionSuccess(true);
    //       console.log('Registration Successful. Please Login to proceed');
    //     } else {
    //       setErrortext('Registration Unsuccessful');
    //     }
    //   })
    //   .catch(error => {
    //     //Hide Loader
    //     setLoading(false);
    //     console.error(error);
    //   });
  };
  if (isRegistraionSuccess) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#307ecc',
          justifyContent: 'center',
        }}>
        <Image
          source={require('../../Images/success.png')}
          style={{ height: 150, resizeMode: 'contain', alignSelf: 'center' }}
        />
        <Text style={styles.successTextStyle}>Registration Successful.</Text>
        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5}
          onPress={() => props.navigation.navigate('LoginScreen')}>
          <Text style={styles.buttonTextStyle}>Login Now</Text>
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <View style={{ flex: 1, }}>
      <Loader loading={loading} />
      <ScrollView keyboardShouldPersistTaps="handled">
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

        <View style={{flexDirection:'row', marginHorizontal:20,justifyContent:'space-between'}}>
          <Text style={{marginTop:7, fontSize:16,fontWeight:'bold'}}>Register as a </Text>
          <View style={{ flexDirection: 'row', }}>
            <RadioButton
              value={userSelectType}
              status={userSelectType === 'buyer' ? 'checked' : 'unchecked'}
              onPress={() => setUserSelectType('buyer')}
              color='#7DE24E'
            />
            <Text style={[userSelectType !== 'buyer' ? styles.unCheck : styles.check]}>Buyer</Text>
            <RadioButton
              value={userSelectType}
              status={userSelectType === 'seller' ? 'checked' : 'unchecked'}
              onPress={() => setUserSelectType('seller')}
              color='#7DE24E'
            />
            <Text style={[userSelectType !== 'seller' ? styles.unCheck : styles.check]}>Seller</Text>
          </View>
          {/* <View style={{ flexDirection: 'row', marginRight: 5 }}>
            
          </View> */}
        </View>

        <KeyboardAvoidingView enabled>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={UserName => setUserName(UserName)}
              // underlineColorAndroid="#FFFFFF"
              placeholder="Enter Name"
              placeholderTextColor="#32CD32"
              autoCapitalize="sentences"
              returnKeyType="next"
              // onSubmitEditing={() =>
              //   this._emailinput && this._emailinput.focus()
              // }
              value={userName}
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={UserEmail => setUserEmail(UserEmail)}
              // underlineColorAndroid="#F6F6F7"
              placeholder="Enter Email"
              placeholderTextColor="#32CD32"
              keyboardType="email-address"
              // ref={ref => {
              //   this._emailinput = ref;
              // }}
              value={userEmail}
              returnKeyType="next"
              onSubmitEditing={() => this._ageinput && this._ageinput.focus()}
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={UserAge => setUserAge(UserAge)}
              // underlineColorAndroid="#F6F6F7"
              placeholder="Enter Age"
              placeholderTextColor="#32CD32"
              keyboardType="numeric"
              // ref={ref => {
              //   this._ageinput = ref;
              // }}
              value={userAge}
              onSubmitEditing={() =>
                this._addressinput && this._addressinput.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={UserAddress => setUserAddress(UserAddress)}
              // underlineColorAndroid="#FFFFFF"
              placeholder="Enter Address"
              placeholderTextColor="#32CD32"
              autoCapitalize="sentences"
              // ref={ref => {
              //   this._addressinput = ref;
              // }}
              value={userAddress}
              returnKeyType="next"
              onSubmitEditing={Keyboard.dismiss}
              blurOnSubmit={false}
            />
          </View>
          {errortext != '' ? (
            <Text style={styles.errorTextStyle}> {errortext} </Text>
          ) : null}
          <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}
            onPress={handleSubmitButton}>
            <Text style={styles.buttonTextStyle}>REGISTER</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};
export default Signup;

