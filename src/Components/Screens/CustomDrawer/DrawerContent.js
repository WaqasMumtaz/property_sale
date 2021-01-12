import React, { useEffect, useState } from 'react';
import { Alert, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import styles from './css/style';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch,
} from 'react-native-paper';

import AsyncStorage from '@react-native-community/async-storage';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { removeUser } from '../../Redux/Actions/authAction';
import { connect } from 'react-redux';



const DrawerContent = (props) => {
    const { navigate } = props.navigation;

    const [userName, setUserName] = useState('');
    const [userLogin , setUserLogin] = useState(false);

    const logoutUser = () => {
        AsyncStorage.clear();
        props.removeUser(null)
        //console.log('User Successfully Logout');
        Alert.alert('You Are Successfully Logout');
        setUserName('');
        setUserLogin(false);
    }
    const addPropertyScreen = () => {
        AsyncStorage.getItem("currentUser").then(value => {
            if (value !== null) {
                //let userData = JSON.parse(value);
                //console.log('User DAta >>', userData);
                navigate('Add Property');
            }
            // console.log('Asynstorage Data >>', value);
            else {
                navigate('Login',{routeName:'Add Property'});
            }
        })
    }


    useEffect(() => {
        AsyncStorage.getItem("currentUser").then(value => {
            if (value) {
                let userData = JSON.parse(value);
                //console.log('User DAta >>', userData);
                setUserName(userData.content.name);
                setUserLogin(true);
            }
            else {
                setUserLogin(false)
            }
        
        })
    //  if(props.user !== undefined && props.user !== null){
    //     setUserName(props.user.name);
    //     setUserLogin(true);
    //  }
    //  else {
    //     setUserName('');
    //     setUserLogin(false)
    //  }
    })

    return (
        <View style={styles.mainContainer}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.logoSection}>
                        <Image
                            source={require('../../Images/sale.png')}
                            style={styles.imageStyle}
                            resizeMode="contain"
                        />
                    </View>
                    {userName !== '' ?
                        <View style={styles.userNameContainer}>
                            <Text style={{fontWeight:'bold'}}>{userName}</Text>
                            <TouchableOpacity
                             onPress={()=>navigate('Profile')}
                            >
                            <Text style={{color:'#307ecc'}}>profile </Text>
                            </TouchableOpacity>
                        </View>
                        :
                        <View style={styles.registrationContainer}>
                            <TouchableOpacity
                                onPress={() => navigate('Login',{routeName:'Login Button'})}
                                style={styles.userAuthContainer}
                            >
                                <Text style={{ color: '#7DE24E' }}>Login or Create Account </Text>
                            </TouchableOpacity>
                        </View>

                    }

                    <View style={styles.borderLine}></View>
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="home-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Home"
                            onPress={() => { props.navigation.navigate('Home') }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="home-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Add Property"
                            onPress={addPropertyScreen}

                        // onPress={() => {props.navigation.navigate('Home')}}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="shield-search"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Search Property"
                            onPress={() => { props.navigation.navigate('FILTRS') }}
                        />
                        {userLogin !== false ?
                        <DrawerItem
                        icon={({ color, size }) => (
                            <Icon
                                name="shield-plus"
                                color={color}
                                size={size}
                            />
                        )}
                        label="Logout"
                        onPress={logoutUser}
                    />
                    :
                    null
                      }
                        
                        {/* <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="tag-heart-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Favorites"
                            // onPress={() => {props.navigation.navigate('Home')}}
                        /> */}
                        {/* <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="shield-search" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Saved Searches"
                            // onPress={() => {props.navigation.navigate('Home')}}
                        /> */}
                        {/* <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="home-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Plot Finder" 
                            // onPress={() => {props.navigation.navigate('Home')}}
                        />*/}
                    </Drawer.Section>

                </View>
            </DrawerContentScrollView>
        </View>
    )
}

const mapStateToProps = (state)=>{
    //console.log('MapStateToProps State Value ..>>>', state);
      return {
        user:state.authReducer.user
      }
    }
    const mapDispatchToProps = (dispatch)=>{
        return {
            removeUser:(user)=>dispatch(removeUser(user))
        }
        }
  
  export default connect(mapStateToProps , mapDispatchToProps)(DrawerContent);

