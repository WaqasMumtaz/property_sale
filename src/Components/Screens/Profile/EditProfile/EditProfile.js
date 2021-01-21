import React, { useState, useEffect, useRef } from 'react';
import styles from './css/style';
//import TouchableButton from '../../Button/button';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage';
import Loader from '../../../Loader';
import { connect } from 'react-redux';
import { updateUser } from '../../../Redux/Actions/authAction';


import {
    StyleSheet,
    TextInput,
    View,
    Text,
    Image,
    KeyboardAvoidingView,
    Keyboard,
    TouchableHighlight,
    TouchableOpacity,
    ScrollView,
    ImageBackground,
    Dimensions,
    FlatList,
    Animated,
    Button,
    Alert,
    BackHandler,
    Modal
} from 'react-native';
const { scrolHeight } = Dimensions.get('window').height;


const EditProfileScreen = (props) => {
    //console.log('Props data >>', props.route.params.userData);
    const userData = props.route.params.userData;
    const [email, setEmail] = useState(userData.email);
    const [name, setName] = useState(userData.name);
    const [contact, setContact] = useState(userData.contact);
    const [role , setRole] = useState(userData.role);
    let [loading, setLoading] = useState(false);


    const updatedUserData = {
        _id:userData._id,
        email:email,
        name:name,
        role:role,
        status:userData.status,
        contact:contact
    }

    const updateProfile = ()=>{
      setLoading(true)
      setTimeout(()=>{
          //console.log('Updated user data >>', updatedUserData);
          AsyncStorage.setItem('currentUser', JSON.stringify(updatedUserData));
          props.updateUser(updatedUserData);
          setLoading(false)
          props.navigation.goBack();
      }, 3000)
    }
     
    return (
        <View style={styles.mainContainer}>
            <ScrollView keyboardShouldPersistTaps="handled">
                <KeyboardAvoidingView enabled>
                  <Loader loading={loading} />
                    <View style={styles.profileContainer}>
                        <View style={styles.profilPicContainer}>
                            <Icon name="user" size={90} color="#808080" />
                            {/* <View style={styles.nameContainer}>
                            <Text style={styles.nameStyle}>{userData !== undefined ? userData.name : null}</Text>
                        </View>
                        <View style={styles.userTitle}>
                            <Text style={styles.userTitleStyle}>Role : {userData !== undefined ? userData.role : null}</Text>
                        </View> */}
                        </View>
                    </View>
                    <View style={styles.viewBlock}>
                        {/* <View> */}
                        <Text style={styles.labelStyle}>Name</Text>
                        <TextInput
                            onChangeText={e => setName(e)}
                            style={styles.userInsertedValueStyle}
                            value={name}
                        />
                    </View>
                    <View style={styles.viewBlock}>
                        <Text style={styles.labelStyle}>Email</Text>
                        <TextInput
                            onChangeText={e => setEmail(e)}
                            style={styles.userInsertedValueStyle}
                            value={email}
                            keyboardType="email-address"
                        />
                    </View>
                    <View style={styles.viewBlock}>
                        <Text style={styles.labelStyle}>Account Status</Text>
                        <Text style={styles.userStatusStyle}>{userData !== undefined ? userData.status : null}</Text>
                    </View>
                    <View style={styles.viewBlock}>
                        <Text style={styles.labelStyle}>Contact Number</Text>
                        {/* <Text style={styles.userInsertedValueStyle}></Text> */}
                        <TextInput
                            onChangeText={e => setContact(e)}
                            style={styles.userInsertedValueStyle}
                            value={contact}
                            keyboardType="numeric"
                        />
                    </View>
                    <TouchableOpacity
                        style={styles.buttonStyle}
                        activeOpacity={0.5}
                        onPress={() => updateProfile()}
                        >
                        <Text style={styles.buttonTextStyle}>Update Profile</Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </ScrollView>
        </View>
    )
}

const mapStateToProps = (state)=>{
    // console.log('MapStateToProps State Value ..>>>', state);
       return {
         user:state.authReducer.user
       }
     }
     
     const mapDispatchToProps = (dispatch)=>{
     return {
       updateUser:(user)=>dispatch(updateUser(user))
     }
     }
   
export default connect(mapStateToProps, mapDispatchToProps)(EditProfileScreen);
   

