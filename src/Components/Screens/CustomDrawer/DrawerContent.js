import * as React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
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
    Switch
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const DrawerContent = (props) => {
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
                    <View style={styles.registrationContainer}>
                        <TouchableOpacity
                        onPress={()=>props.navigation.navigate('Login')}
                        style={styles.userAuthContainer}
                        >
                        <Text style={{color:'#7DE24E'}}>Login or Create Account </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.borderLine}></View>
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="home-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Home"
                            onPress={() => {props.navigation.navigate('Home')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="home-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Add Property"
                            // onPress={() => {props.navigation.navigate('Home')}}
                        />
                         <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="shield-search" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Search Property"
                            // onPress={() => {props.navigation.navigate('Home')}}
                        />
                         <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="shield-plus" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="New Projects"
                            // onPress={() => {props.navigation.navigate('Home')}}
                        />
                         <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="tag-heart-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Favorites"
                            // onPress={() => {props.navigation.navigate('Home')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="shield-search" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Saved Searches"
                            // onPress={() => {props.navigation.navigate('Home')}}
                        />
                         <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="home-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Plot Finder"
                            // onPress={() => {props.navigation.navigate('Home')}}
                        />
                    </Drawer.Section>    

                </View>
            </DrawerContentScrollView>
        </View>
    )
}

export default DrawerContent;